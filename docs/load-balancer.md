# Load Balancer Setup

This project includes a Caddy load balancer configuration to distribute traffic across multiple application instances.

## Architecture

```
Internet → Caddy (Port 80) → App Instances (Port 3000) → PostgreSQL
```

- **Caddy**: Acts as reverse proxy and load balancer with automatic HTTPS
- **App**: Multiple Next.js application instances
- **PostgreSQL**: Shared database for all app instances

## Features

- **Load Balancing**: Distributes requests across multiple app instances using least connections algorithm
- **Health Checks**: Monitors app instance health and removes unhealthy instances
- **Automatic HTTPS**: Automatic SSL/TLS certificate provisioning and renewal
- **Security Headers**: Adds security headers to all responses
- **Gzip Compression**: Compresses responses for better performance
- **WebSocket Support**: Supports WebSocket connections for real-time features

## Usage

### Basic Setup

Start all services with default configuration:

```bash
docker compose up -d
```

The application will be available at `http://localhost` (port 80).

### Scaling Application Instances

Scale the application to multiple instances:

```bash
# Scale to 3 app instances
docker compose up -d --scale app=3
```

**Note**: Docker Compose's internal DNS will round-robin resolve the service name `app` to different instances. Caddy will distribute connections using the least connections algorithm.

### Viewing Logs

```bash
# View all logs
docker compose logs -f

# View Caddy logs
docker compose logs -f caddy

# View app logs
docker compose logs -f app
```

### Health Checks

Check the health of your services:

```bash
# Check app health
curl http://localhost/api/health

# Check Caddy health
docker compose ps
```

## Configuration

### Caddy Configuration

The Caddy configuration is located at `Caddyfile`. Key settings:

- **Load Balancing Algorithm**: `least_conn` (least connections)
- **Health Checks**: Active health checks every 10 seconds on `/api/health`
- **Timeouts**: 60 seconds for read/write operations
- **Failover**: Automatic failover after 3 consecutive failures
- **Automatic HTTPS**: Caddy can automatically provision SSL certificates (when domain is configured)

### Environment Variables

Update your `.env` file with the correct values:

```env
# Base URLs (should point to your domain in production)
BASE_URL=http://localhost
NEXT_PUBLIC_BASE_URL=http://localhost
BETTER_AUTH_URL=http://localhost

# Database (shared across all app instances)
DATABASE_URL=postgres://user:password@postgres:5432/db_name
```

### Port Configuration

Change the external port by setting the `PORT` environment variable:

```env
PORT=8080
```

This will expose Caddy on port 8080 instead of 80.

## Production Considerations

### 1. SSL/TLS

Caddy automatically provisions and renews SSL/TLS certificates via Let's Encrypt. To enable:

1. Update your `Caddyfile` to use your domain:
   ```caddyfile
   yourdomain.com {
       reverse_proxy app:3000 {
           # ... same configuration
       }
   }
   ```

2. Ensure port 443 is accessible and DNS points to your server

3. Caddy will automatically obtain and renew certificates

### 2. Session Affinity

If your application uses server-side sessions, you may need sticky sessions. Update `Caddyfile`:

```caddyfile
reverse_proxy app:3000 {
    lb_policy ip_hash  # Use IP hash instead of least_conn
    # ... other settings
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

# View Caddy access logs
docker compose logs caddy | grep "GET\|POST"
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

3. Verify Caddy can reach app instances:
   ```bash
   docker compose exec caddy wget -O- http://app:3000/api/health
   ```

4. Check Caddy configuration:
   ```bash
   docker compose exec caddy caddy validate --config /etc/caddy/Caddyfile
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

If you need to update the Caddy configuration:

1. Edit `Caddyfile`
2. Reload Caddy configuration:
   ```bash
   docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile
   ```

Or restart the Caddy service:

```bash
docker compose restart caddy
```

## Scaling Strategy

1. **Start Small**: Begin with 2-3 app instances
2. **Monitor**: Watch metrics and logs
3. **Scale Horizontally**: Add more app instances as needed
4. **Database**: Ensure PostgreSQL can handle the increased load
5. **Load Testing**: Test your setup under expected load

## Additional Resources

- [Caddy Reverse Proxy Documentation](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy)
- [Caddy Load Balancing](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy#load-balancing)
- [Docker Compose Scaling](https://docs.docker.com/compose/reference/scale/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)

