# VPS Deployment Guide

This guide will walk you through deploying the Sphere Global application to your VPS using Docker Compose.

## 🚀 Quick Start (Docker Compose)

If you just want to get up and running quickly with the recommended setup:

1.  **Clone & Set Env**: `git clone <repo> . && cp example.env .env`
2.  **Edit `.env`**: Fill in your domain, DB credentials, and secrets.
3.  **Build**: `./scripts/deploy.sh build`
4.  **SSL Init**: `./scripts/deploy.sh ssl-init` (if using HTTPS)
5.  **Start**: `./scripts/deploy.sh start`
6.  **Migrate**: `docker compose exec app pnpm db:migrate`

---

## Prerequisites
...
[Rest of the file content]
...
## Alternative: Using Host-Installed Nginx

If you prefer to run Nginx directly on your VPS host instead of inside a Docker container, follow these steps:

### 1. Install Nginx on VPS
```bash
sudo apt update
sudo apt install nginx -y
```

### 2. Configure Nginx
Create a new configuration file:
```bash
sudo nano /etc/nginx/sites-available/sphere-global
```

Add the following (adjusting for your domain):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. Enable Configuration & Restart
```bash
sudo ln -s /etc/nginx/sites-available/sphere-global /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Update Docker Compose
In your `docker-compose.yml`, you can comment out or remove the `nginx` and `certbot` services if you are handling SSL on the host (e.g., with `certbot` installed via `apt`).

---
...
[Rest of the file content]

- A VPS with Ubuntu 20.04+ or similar Linux distribution
- Root or sudo access
- Domain name pointing to your VPS IP (optional but recommended for HTTPS)
- Basic knowledge of Linux command line

## Step 1: Initial VPS Setup

### 1.1 Connect to Your VPS

```bash
ssh root@your-vps-ip
# or
ssh your-username@your-vps-ip
```

### 1.2 Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3 Install Required Software

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Verify installations
docker --version
docker compose version
```

### 1.4 Configure Firewall (UFW)

```bash
# Allow SSH (if not already allowed)
sudo ufw allow 22/tcp

# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### 1.5 Create Application Directory

```bash
# Create directory for your application
sudo mkdir -p /opt/sphere-global
sudo chown $USER:$USER /opt/sphere-global
cd /opt/sphere-global
```

## Step 2: Transfer Files to VPS

### Option A: Using Git (Recommended)

```bash
# Install Git if not already installed
sudo apt install git -y

# Clone your repository
git clone https://github.com/your-username/sphere-global.git .

# Or if using SSH
git clone git@github.com:your-username/sphere-global.git .
```

### Option B: Using SCP

From your local machine:

```bash
# Create a tarball of your project (excluding node_modules, .next, etc.)
tar --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='*.log' \
    -czf sphere-global.tar.gz .

# Transfer to VPS
scp sphere-global.tar.gz root@your-vps-ip:/opt/sphere-global/

# On VPS, extract
cd /opt/sphere-global
tar -xzf sphere-global.tar.gz
rm sphere-global.tar.gz
```

### Option C: Using rsync

From your local machine:

```bash
rsync -avz --exclude 'node_modules' \
            --exclude '.next' \
            --exclude '.git' \
            --exclude '*.log' \
            ./ root@your-vps-ip:/opt/sphere-global/
```

## Step 3: Configure Environment Variables

### 3.1 Create .env File

```bash
cd /opt/sphere-global
nano .env
```

### 3.2 Add Required Environment Variables

```env
# ===============================
# 🌐 BASE CONFIGURATION
# ===============================

# Replace with your actual domain
BASE_URL=https://yourdomain.com
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
BETTER_AUTH_URL=https://yourdomain.com

# ===============================
# 🗄️ DATABASE CONFIGURATION
# ===============================

DB_USER=sphere_user
DB_PASSWORD=your_secure_password_here
DB_NAME=sphere_global
DB_PORT=5432
DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@postgres:5432/${DB_NAME}

# ===============================
# 🔐 BETTER AUTH CONFIGURATION
# ===============================

# Generate a secure secret: openssl rand -base64 32
BETTER_AUTH_SECRET=your_generated_secret_here

# ===============================
# 💼 LINKEDIN OAUTH CONFIGURATION
# ===============================

LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret

# ===============================
# 📧 EMAIL (NODEMAILER) CONFIGURATION
# ===============================

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM="Sphere Global <noreply@yourdomain.com>"
RECEIVER_EMAIL=contact@yourdomain.com

# ===============================
# 🐳 DOCKER CONFIGURATION
# ===============================

# Port for Nginx (80 for HTTP, 443 for HTTPS)
PORT=80
```

### 3.3 Secure the .env File

```bash
# Set proper permissions
chmod 600 .env
```

### 3.4 Generate Better Auth Secret

```bash
# Generate a secure secret
openssl rand -base64 32

# Copy the output and add it to BETTER_AUTH_SECRET in your .env file
```

## Step 4: Configure Domain and SSL

### 4.1 Update Nginx Configuration

The `nginx.conf` file is already configured to handle both HTTP (port 80) and HTTPS (port 443). Ensure the `server_name` in `nginx.conf` matches your domain:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    ...
}

server {
    listen 443 ssl;
    server_name yourdomain.com www.yourdomain.com;
    ...
}
```

### 4.2 Update DNS Records

Point your domain to your VPS IP:

- **A Record**: `yourdomain.com` → `your-vps-ip`
- **A Record**: `www.yourdomain.com` → `your-vps-ip`

### 4.3 Verify DNS Propagation

```bash
dig yourdomain.com +short
```

## Step 5: Build and Initialize SSL

### 5.1 Fix Potential Mounting Errors

If you encounter an error like `not a directory` when starting Nginx, it's usually because Docker created a directory where it expected the `nginx.conf` file.

1. Stop containers: `docker compose down`
2. Remove the incorrect directory: `rm -rf nginx.conf` (if it exists as a folder)
3. Ensure the `nginx.conf` file exists in the root.

### 5.2 Build Docker Images

```bash
./scripts/deploy.sh build
```

### 5.3 Initialize SSL Certificates (First-time only)

Since Nginx requires SSL certificates to start on port 443, you must generate them first:

```bash
./scripts/deploy.sh ssl-init
```

This will use Certbot to request certificates from Let's Encrypt.

### 5.4 Start Services

```bash
./scripts/deploy.sh start
```

### 5.4 Verify Services are Running

```bash
# Check container status
docker ps

# Check logs
docker compose logs -f

# Check specific service logs
docker compose logs app
docker compose logs nginx
docker compose logs certbot
docker compose logs postgres
```

### 5.4 Verify Health Checks

```bash
# Check if all containers are healthy
docker ps --format "table {{.Names}}\t{{.Status}}"

# Test health endpoint
curl http://localhost/api/health
# or if using domain
curl http://yourdomain.com/api/health
```

## Step 6: Database Setup (First Time Only)

### 6.1 Run Database Migrations

```bash
# Execute migrations inside the app container
docker compose exec app pnpm db:migrate

# Or if you have a migration script
docker compose exec app node scripts/migrate.js
```

## Step 7: Scaling (Optional)

### 7.1 Scale Application Instances

```bash
# Scale to 3 app instances for better performance
docker compose up -d --scale app=3

# Verify scaling
docker compose ps
```

Nginx will automatically load balance across all instances.

## Step 8: Monitoring and Maintenance

### 8.1 View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f app
docker compose logs -f nginx
docker compose logs -f certbot
docker compose logs -f postgres

# Last 100 lines
docker compose logs --tail=100 app
```

### 8.2 Check Resource Usage

```bash
# Container stats
docker stats

# Disk usage
docker system df
```

### 8.3 Restart Services

```bash
# Restart all services
docker compose restart

# Restart specific service
docker compose restart app
```

### 8.4 Update Application

```bash
cd /opt/sphere-global

# Pull latest changes (if using Git)
git pull

# Rebuild and restart
docker compose up -d --build app

# Or rebuild all
docker compose build
docker compose up -d
```

## Step 9: Backup Strategy

### 9.1 Backup Database

```bash
# Create backup script
nano /opt/sphere-global/backup-db.sh
```

Add this content:

```bash
#!/bin/bash
BACKUP_DIR="/opt/backups"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

docker compose exec -T postgres pg_dump -U $DB_USER $DB_NAME > $BACKUP_DIR/db_backup_$DATE.sql

# Keep only last 7 days of backups
find $BACKUP_DIR -name "db_backup_*.sql" -mtime +7 -delete

echo "Backup completed: db_backup_$DATE.sql"
```

Make it executable:

```bash
chmod +x /opt/sphere-global/backup-db.sh
```

### 9.2 Setup Automated Backups (Cron)

```bash
# Edit crontab
crontab -e

# Add daily backup at 2 AM
0 2 * * * /opt/sphere-global/backup-db.sh >> /var/log/sphere-backup.log 2>&1
```

## Step 10: Security Hardening

### 10.1 Restrict Database Port

Edit `docker-compose.yml` to remove database port exposure (if not needed externally):

```yaml
postgres:
  # Comment out or remove this line:
  # ports:
  #   - "${DB_PORT:-5432}:5432"
```

### 10.2 Use Strong Passwords

Ensure all passwords in `.env` are strong and unique.

### 10.3 Regular Updates

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Docker images
docker compose pull
docker compose up -d
```

### 10.4 Monitor Logs for Suspicious Activity

```bash
# Check for failed login attempts
docker compose logs postgres | grep -i "failed"

# Check application errors
docker compose logs app | grep -i "error"
```

## Troubleshooting

### Issue: Containers won't start

```bash
# Check logs
docker compose logs

# Check if ports are in use
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443

# Check disk space
df -h
```

### Issue: Health checks failing

```bash
# Check if health endpoint is accessible
docker compose exec app curl http://localhost:3000/api/health

# Check app logs
docker compose logs app
```

### Issue: Database connection errors

```bash
# Verify database is running
docker compose ps postgres

# Check database logs
docker compose logs postgres

# Test database connection
docker compose exec postgres psql -U $DB_USER -d $DB_NAME
```

### Issue: SSL certificate not working

```bash
# Check Nginx logs
docker compose logs nginx

# Check Certbot logs
docker compose logs certbot

# Verify DNS is pointing correctly
dig yourdomain.com

# Check if ports 80 and 443 are open
sudo ufw status
```

### Issue: Out of memory

```bash
# Check memory usage
free -h
docker stats

# Consider scaling down or upgrading VPS
```

## Deployment Script

A deployment helper script is available at `scripts/deploy.sh` to simplify common tasks:

```bash
# Make executable (first time only)
chmod +x scripts/deploy.sh

# Build images
./scripts/deploy.sh build

# Start services
./scripts/deploy.sh start

# Stop services
./scripts/deploy.sh stop

# Restart services
./scripts/deploy.sh restart

# View logs
./scripts/deploy.sh logs
./scripts/deploy.sh logs app      # Specific service

# Check status and health
./scripts/deploy.sh status

# Update application
./scripts/deploy.sh update

# Scale app instances
./scripts/deploy.sh scale 3

# Create database backup
./scripts/deploy.sh backup

# Run health checks
./scripts/deploy.sh health

# Show help
./scripts/deploy.sh help
```

## Quick Reference Commands

### Using Docker Compose Directly

```bash
# Start services
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs -f

# Restart services
docker compose restart

# Rebuild and restart
docker compose build && docker compose up -d

# Scale app instances
docker compose up -d --scale app=3

# Check status
docker compose ps

# Execute command in container
docker compose exec app <command>

# Access database
docker compose exec postgres psql -U $DB_USER -d $DB_NAME
```

### Using Deployment Script

```bash
# All common operations
./scripts/deploy.sh [command]
```

## Next Steps

1. **Setup Monitoring**: Consider using tools like Prometheus, Grafana, or Uptime Robot
2. **Setup CI/CD**: Automate deployments using GitHub Actions or GitLab CI
3. **Setup Email Alerts**: Configure alerts for critical errors
4. **Performance Tuning**: Optimize database queries and caching
5. **CDN Setup**: Consider using Cloudflare or similar CDN for static assets

## Support

If you encounter issues:

1. Check the logs: `docker compose logs`
2. Verify environment variables: `cat .env`
3. Check container status: `docker compose ps`
4. Review this guide for common issues

---

**Note**: This guide assumes a basic VPS setup. For production environments, consider additional security measures, monitoring, and backup solutions.

