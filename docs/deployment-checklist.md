# Deployment Checklist

Use this checklist to ensure a smooth deployment to your VPS.

## Pre-Deployment

- [x] VPS is provisioned and accessible via SSH
- [x] Domain name is registered (if using custom domain)
- [x] DNS records are configured (A records pointing to VPS IP)
- [ ] All required environment variables are documented
- [ ] Database credentials are prepared
- [ ] SMTP credentials are prepared
- [ ] OAuth credentials (LinkedIn) are prepared
- [ ] Better Auth secret is generated

## VPS Initial Setup

- [ ] Connected to VPS via SSH
- [ ] System packages updated (`apt update && apt upgrade`)
- [ ] Docker installed and verified
- [ ] Docker Compose installed and verified
- [ ] Firewall configured (ports 22, 80, 443 open)
- [ ] Application directory created (`/opt/sphere-global`)

## File Transfer

- [ ] Project files transferred to VPS (Git, SCP, or rsync)
- [ ] All required files present:
  - [ ] `docker-compose.yml`
  - [ ] `Dockerfile`
  - [ ] `Caddyfile`
  - [ ] `.dockerignore`
  - [ ] `package.json`
  - [ ] `pnpm-lock.yaml`
  - [ ] `next.config.ts`
  - [ ] `src/` directory
  - [ ] `public/` directory

## Configuration

- [ ] `.env` file created with all required variables
- [ ] `.env` file permissions set to 600
- [ ] `Caddyfile` updated with domain name (if using custom domain)
- [ ] Database credentials configured
- [ ] Better Auth secret generated and added
- [ ] SMTP credentials configured
- [ ] OAuth credentials configured
- [ ] Base URLs updated to production domain

## Build and Deploy

- [ ] Docker images built successfully (`docker compose build`)
- [ ] Services started (`docker compose up -d`)
- [ ] All containers are running (`docker compose ps`)
- [ ] All containers are healthy (check status)
- [ ] Health endpoint accessible (`/api/health`)

## Database Setup

- [ ] Database container is running
- [ ] Database migrations executed (if applicable)
- [ ] Database connection verified
- [ ] Initial data seeded (if needed)

## Verification

- [ ] Application accessible via HTTP/HTTPS
- [ ] Health endpoint returns 200 status
- [ ] All pages load correctly
- [ ] Authentication works (if applicable)
- [ ] Email sending works (test contact form)
- [ ] OAuth login works (if applicable)
- [ ] No errors in logs

## Post-Deployment

- [ ] Backup script created and tested
- [ ] Automated backups configured (cron)
- [ ] Monitoring setup (optional)
- [ ] Log rotation configured (optional)
- [ ] SSL certificate verified (if using HTTPS)
- [ ] Performance tested
- [ ] Security checklist reviewed

## Scaling (Optional)

- [ ] Multiple app instances tested
- [ ] Load balancing verified
- [ ] Health checks working across instances

## Documentation

- [ ] Deployment process documented
- [ ] Environment variables documented
- [ ] Backup/restore procedures documented
- [ ] Troubleshooting guide reviewed
- [ ] Team members informed of deployment

## Security

- [ ] Strong passwords used for all services
- [ ] Database port not exposed externally (if not needed)
- [ ] Firewall rules configured correctly
- [ ] SSH key authentication enabled (recommended)
- [ ] Regular security updates scheduled
- [ ] Logs monitored for suspicious activity

---

**Quick Health Check Commands:**

```bash
# Check all containers
docker compose ps

# Check health
curl http://yourdomain.com/api/health

# View logs
docker compose logs -f

# Check resource usage
docker stats
```

