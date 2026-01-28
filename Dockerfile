# ================================
# Stage 1: Dependencies
# ================================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (including devDependencies for build)
RUN pnpm install --frozen-lockfile

# Cache dependencies for better layer caching
RUN pnpm store prune

# ================================
# Stage 2: Builder
# ================================
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build-time environment variables
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL:-postgres://user:password@localhost:5432/db_name}
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET:-dummy-secret-for-build}
ENV BETTER_AUTH_URL=${BETTER_AUTH_URL:-http://localhost:3000}

# Build the application
RUN pnpm build

# ================================
# Stage 3: Runner
# ================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install pnpm for production
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy package files for production dependencies
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile && pnpm store prune

# Copy built application from builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./.next/standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Set ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", ".next/standalone/server.js"]

