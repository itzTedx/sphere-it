# Load Balancer Setup

This project includes an Nginx load balancer configuration to distribute traffic across multiple application instances.

## Architecture

```
Internet → Nginx (Port 80/443) → App Instances (Port 3000) → PostgreSQL
```

- **Nginx**: Acts as reverse proxy and load balancer.
- **Certbot**: Handles SSL/TLS certificate provisioning and renewal.
- **App**: Multiple Next.js application instances.
- **Postgres**: Shared database for all app instances.

## Features

- **Load Balancing**: Distributes requests across multiple app instances using the least connections algorithm.
- **Health Checks**: Monitors app instance health via the Nginx upstream module.
- **SSL/TLS**: Automated certificate management via Certbot and Let's Encrypt.
- **Security Headers**: Adds best-practice security headers to all responses.
- **Gzip Compression**: Compresses responses for better performance.
- **WebSocket Support**: Supports WebSocket connections for real-time features.

## Usage

### Basic Setup

Start all services with default configuration:

```bash
docker compose up -d
```

The application will be available at `http://localhost` (port 80).

### Local Development (Direct Access)

For local development and testing, you can bypass Nginx and access the application directly on port `3000`:

```bash
docker compose up -d postgres app
```

Access at: [http://localhost:3000](http://localhost:3000)

### Scaling Application Instances

Scale the application to multiple instances:

```bash
# Scale to 3 app instances
docker compose up -d --scale app=3
```

**Note**: Docker Compose's internal DNS will round-robin resolve the service name `app` to different instances. Nginx will distribute connections using the `least_conn` strategy defined in `nginx.conf`.

### Viewing Logs

```bash
# View all logs
docker compose logs -f

# View Nginx logs
docker compose logs -f nginx

# View app logs
docker compose logs -f app
```

### Health Checks

Check the health of your services:

```bash
# Check app health
curl http://localhost/api/health

# Check Nginx health
docker compose ps nginx
```

## Configuration

### Nginx Configuration

The Nginx configuration is located at `nginx.conf`. Key settings:

- **Upstream Block**: Defines `app_servers` with `least_conn`.
- **Health Checks**: Check `/api/health` with failure timeouts.
- **SSL Configuration**: Points to Certbot-managed certificates in `/etc/letsencrypt`.
- **HTTP to HTTPS**: Port 80 automatically redirects to 443.

### Environment Variables

Update your `.env` file with the correct values:

```env
# Base URLs (should point to your domain in production)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000

# Database (shared across all app instances)
DATABASE_URL=postgresql://user:password@postgres:5432/db_name
```

### Port Configuration

Change the external port by setting the `PORT` environment variable:

```env
PORT=8080
```

This will expose Nginx on port 8080 instead of 80.

## Production Considerations

### 1. SSL/TLS

SSL is handled by Nginx using certificates from Let's Encrypt. To enable:

1. Update `nginx.conf` with your domain name.
2. Ensure ports 80 and 443 are open.
3. Run the initial certificate request:
   ```bash
   ./scripts/deploy.sh ssl-init
   ```
4. Certbot will automatically handle renewals every 12 hours via the `certbot` service.

### 2. Session Affinity

If your application uses server-side sessions, you may need sticky sessions. Update `nginx.conf`:

```nginx
upstream app_servers {
    ip_hash;  # Use IP hash instead of least_conn
    server app:3000;
}
```

### 3. Database Connection Pooling

Ensure your database connection pool is configured appropriately for multiple app instances. Each instance will maintain its own connection pool.

### 4. Shared State

If your application uses in-memory state (caches, sessions), consider using:
- Redis for shared caching
- Database-backed sessions
- External session store

### 5. Monitoring

Monitor your load balancer and application instances:

```bash
# Check container status
docker compose ps

# Check resource usage
docker stats

# View Nginx access logs
docker compose logs nginx | grep "GET\|POST"
```

## Troubleshooting

### App Instances Not Receiving Traffic

1. Check if app instances are healthy:
   ```bash
   docker compose ps
   ```

2. Check app logs for errors:
   ```bash
   docker compose logs app
   ```

3. Verify Nginx can reach app instances:
   ```bash
   docker compose exec nginx wget -O- http://app:3000/api/health
   ```

4. Check Nginx configuration:
   ```bash
   docker compose exec nginx nginx -t
   ```

### High Latency

1. Check if all app instances are running:
   ```bash
   docker compose ps app
   ```

2. Monitor resource usage:
   ```bash
   docker stats
   ```

3. Consider increasing the number of app instances:
   ```bash
   docker compose up -d --scale app=5
   ```

### Configuration Issues

If you need to update the Nginx configuration:

1. Edit `nginx.conf`
2. Test configuration:
    ```bash
    docker compose exec nginx nginx -t
    ```
3. Reload Nginx:
   ```bash
   docker compose exec nginx nginx -s reload
   ```

## Scaling Strategy

1. **Start Small**: Begin with 2-3 app instances
2. **Monitor**: Watch metrics and logs
3. **Scale Horizontally**: Add more app instances as needed
4. **Database**: Ensure PostgreSQL can handle the increased load
5. **Load Testing**: Test your setup under expected load

## Additional Resources

- [Nginx Reverse Proxy Documentation](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
- [Nginx Load Balancing](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/)
- [Docker Compose Scaling](https://docs.docker.com/compose/reference/scale/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)

