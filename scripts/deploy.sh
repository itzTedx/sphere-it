#!/bin/bash

# Sphere Global Deployment Script
# This script helps automate the deployment process

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${YELLOW}ℹ${NC} $1"
}

# Check if .env file exists
if [ ! -f .env ]; then
    print_error ".env file not found!"
    print_info "Please create a .env file with all required environment variables."
    print_info "See example.env for reference."
    exit 1
fi

print_success ".env file found"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed!"
    print_info "Install Docker: curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh"
    exit 1
fi

print_success "Docker is installed"

# Check if Docker Compose is installed
if ! command -v docker compose &> /dev/null; then
    print_error "Docker Compose is not installed!"
    print_info "Install Docker Compose: sudo apt install docker-compose-plugin -y"
    exit 1
fi

print_success "Docker Compose is installed"

# Parse command line arguments
COMMAND=${1:-help}

case $COMMAND in
    build)
        print_info "Building Docker images..."
        docker compose build
        print_success "Build completed"
        ;;
    
    start)
        print_info "Starting services..."
        docker compose up -d
        print_success "Services started"
        print_info "Waiting for services to be healthy..."
        sleep 10
        docker compose ps
        ;;
    
    stop)
        print_info "Stopping services..."
        docker compose down
        print_success "Services stopped"
        ;;
    
    restart)
        print_info "Restarting services..."
        docker compose restart
        print_success "Services restarted"
        ;;
    
    logs)
        SERVICE=${2:-}
        if [ -z "$SERVICE" ]; then
            docker compose logs -f
        else
            docker compose logs -f "$SERVICE"
        fi
        ;;
    
    status)
        print_info "Container status:"
        docker compose ps
        echo ""
        print_info "Health check:"
        if curl -f -s http://localhost/api/health > /dev/null 2>&1; then
            print_success "Health endpoint is accessible"
        else
            print_error "Health endpoint is not accessible"
        fi
        ;;
    
    update)
        print_info "Updating application..."
        if [ -d .git ]; then
            print_info "Pulling latest changes..."
            git pull
        fi
        print_info "Rebuilding images..."
        docker compose build
        print_info "Restarting services..."
        docker compose up -d
        print_success "Update completed"
        ;;
    
    scale)
        INSTANCES=${2:-1}
        if [ -z "$INSTANCES" ] || ! [[ "$INSTANCES" =~ ^[0-9]+$ ]]; then
            print_error "Please provide a valid number of instances"
            print_info "Usage: ./deploy.sh scale 3"
            exit 1
        fi
        print_info "Scaling app to $INSTANCES instances..."
        docker compose up -d --scale app=$INSTANCES
        print_success "Scaled to $INSTANCES instances"
        docker compose ps
        ;;
    
    backup)
        BACKUP_DIR="/opt/backups"
        DATE=$(date +%Y%m%d_%H%M%S)
        mkdir -p "$BACKUP_DIR"
        
        print_info "Creating database backup..."
        
        # Source .env file to get DB variables
        source .env
        
        docker compose exec -T postgres pg_dump -U "${DB_USER:-postgres}" "${DB_NAME:-sphere_global}" > "$BACKUP_DIR/db_backup_$DATE.sql"
        
        print_success "Backup created: $BACKUP_DIR/db_backup_$DATE.sql"
        
        # Keep only last 7 days
        find "$BACKUP_DIR" -name "db_backup_*.sql" -mtime +7 -delete
        print_info "Old backups cleaned (kept last 7 days)"
        ;;
    
    health)
        print_info "Checking health endpoints..."
        
        # Check app health
        if docker compose exec -T app node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))" 2>/dev/null; then
            print_success "App health check passed"
        else
            print_error "App health check failed"
        fi
        
        # Check Caddy health
        if docker compose exec -T caddy wget --no-verbose --tries=1 --spider http://localhost/api/health > /dev/null 2>&1; then
            print_success "Caddy health check passed"
        else
            print_error "Caddy health check failed"
        fi
        
        # Check database health
        if docker compose exec -T postgres pg_isready -U "${DB_USER:-postgres}" > /dev/null 2>&1; then
            print_success "Database health check passed"
        else
            print_error "Database health check failed"
        fi
        ;;
    
    help|*)
        echo "Sphere Global Deployment Script"
        echo ""
        echo "Usage: ./deploy.sh [command]"
        echo ""
        echo "Commands:"
        echo "  build      - Build Docker images"
        echo "  start      - Start all services"
        echo "  stop       - Stop all services"
        echo "  restart    - Restart all services"
        echo "  logs       - View logs (optionally specify service: app, caddy, postgres)"
        echo "  status     - Show container status and health"
        echo "  update     - Pull latest code and rebuild"
        echo "  scale N    - Scale app to N instances (e.g., scale 3)"
        echo "  backup     - Create database backup"
        echo "  health     - Run health checks on all services"
        echo "  help       - Show this help message"
        echo ""
        echo "Examples:"
        echo "  ./deploy.sh build"
        echo "  ./deploy.sh start"
        echo "  ./deploy.sh logs app"
        echo "  ./deploy.sh scale 3"
        ;;
esac

