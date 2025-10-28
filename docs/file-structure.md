# File Structure Guide

This document provides a comprehensive overview of the Sphere Global project structure and explains the organization of files and directories. It's designed to be accessible for developers of all experience levels, including those new to React and modern web development.

## 📁 Root Directory Structure

```
sphere-global/
├── src/                        # Source code directory
├── public/                     # Static public assets
├── docs/                       # Project documentation
├── package.json                # Dependencies and scripts
├── biome.json                  # Linting and formatting configuration
├── components.json             # Shadcn UI components configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project overview
```

## 🎯 Source Code Structure (`src/`)

### App Router (`src/app/`)

The application uses Next.js 16 App Router for file-based routing. This means:
- **File-based Routing**: The URL structure is determined by the file and folder structure
- **Automatic Routing**: Next.js automatically creates routes based on your file structure
- **Server Components**: By default, components render on the server for better performance
- **Client Components**: Components that need browser features are marked with `'use client'`

```
src/app/
├── (root)/                      # Route group for main pages
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   │   ├── page.tsx
│   │   └── structured-data.ts
│   ├── careers/                 # Careers page
│   │   └── page.tsx
│   ├── contact/                 # Contact page
│   │   ├── page.tsx
│   │   └── structured-data.ts
│   ├── legal/                   # Legal pages
│   │   ├── components/          # Legal page components
│   │   ├── privacy/             # Privacy policy
│   │   │   ├── page.tsx
│   │   │   └── structured-data.ts
│   │   └── terms-of-services/   # Terms of service
│   │       ├── page.tsx
│   │       └── structured-data.ts
│   ├── resources/               # Resources section
│   │   ├── blogs/
│   │   │   └── page.tsx
│   │   ├── case-studies/
│   │   │   └── page.tsx
│   │   ├── faqs/
│   │   │   └── page.tsx
│   │   ├── research-papers/
│   │   │   └── page.tsx
│   │   └── testimonials/
│   │       └── page.tsx
│   └── services/                # Services pages
│       ├── [slug]/              # Dynamic service pages
│       ├── components/          # Services components
│       ├── data/                # Services data
│       ├── page.tsx             # Services listing
│       └── structured-data.ts
├── api/                         # API routes
│   ├── auth/
│   │   └── [...all]/            # better-auth handlers
│   └── test/
│       └── redis/               # test endpoints
├── apple-icon.png               # PWA icons
├── favicon.ico                  # Site favicon
├── icon0.svg                    # App icons
├── icon1.png
├── manifest.json                # PWA manifest
├── robots.ts                    # SEO robots configuration
└── sitemap.ts                   # SEO sitemap generation
```

### Assets (`src/assets/`)

Static assets organized by type:

```
src/assets/
├── fonts/                       # Custom font files
│   ├── albert-sans/             # Albert Sans font family
│   ├── inter-display/           # Inter Display font family
│   └── index.ts                 # Font exports
├── icons/                       # SVG icon components
│   ├── ai.tsx                   # AI-related icons
│   ├── arrows.tsx               # Arrow icons
│   ├── books.tsx                # Book/documentation icons
│   ├── briefcase.tsx            # Business icons
│   ├── checkmarks.tsx           # Checkmark icons
│   ├── chevrons.tsx             # Chevron navigation icons
│   ├── copy.tsx                 # Copy icon
│   ├── email.tsx                # Email icons
│   ├── feather.tsx              # Feather icons
│   ├── gear.tsx                 # Gear/settings icons
│   ├── industries.tsx           # Industry icons
│   ├── iso.tsx                  # ISO icons
│   ├── layout.tsx               # Layout icons
│   ├── phone.tsx                # Phone icons
│   ├── puzzle.tsx               # Puzzle icons
│   ├── services.tsx             # Services icons
│   ├── social.tsx               # Social media icons
│   ├── support.tsx              # Support icons
│   ├── timeline.tsx             # Timeline icons
│   ├── user.tsx                 # User-related icons
│   └── index.ts                 # Icon exports
├── checkmark-iconbox.tsx        # Checkmark icon component
├── illustration.tsx             # Illustration components
└── logo.tsx                     # Logo components
```

### Components (`src/components/`)

Reusable UI components organized by purpose. In React, components are like building blocks that can be reused throughout the application:

```
src/components/
├── dev/                        # Development-only components
│   └── breakpoint-ind.tsx      # Breakpoint indicator
├── layout/                     # Layout components
│   ├── cta.tsx                 # Call-to-action sections
│   ├── footer.tsx              # Site footer
│   ├── navbar/                 # Navigation components
│   │   ├── desktop.tsx         # Desktop navigation
│   │   ├── inquiry-modal.tsx   # Inquiry modal
│   │   ├── mobile.tsx          # Mobile navigation
│   │   └── index.tsx           # Navigation exports
│   └── structured-data.tsx     # SEO structured data
├── providers.tsx               # Global providers
├── ui/                         # Base UI components
│   ├── badge.tsx
│   ├── base/
│   │   └── preview-card.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── checkbox.tsx
│   ├── dialog.tsx
│   ├── drawer.tsx
│   ├── field.tsx
│   ├── input-group.tsx
│   ├── input.tsx
│   ├── item.tsx
│   ├── label.tsx
│   ├── logo-carousel.tsx
│   ├── marquee.tsx
│   ├── navigation-menu.tsx
│   ├── primitives/
│   │   ├── animate/
│   │   ├── base/
│   │   ├── effects/
│   │   └── radix/
│   ├── radix/
│   │   ├── accordion.tsx
│   │   └── tabs.tsx
│   ├── separator.tsx
│   ├── skeleton.tsx
│   ├── sonner.tsx
│   ├── table.tsx
│   ├── tabs.tsx
│   └── textarea.tsx
└── icon-box.tsx                # Icon box component
```

### Data (`src/data/`)

Static data and configuration files:

```
src/data/
├── about.ts                    # About page data
├── constants.ts                # Application constants
├── legal.ts                    # Legal page content
├── services.ts                 # Services data
├── site-config.ts              # Site configuration
├── teams.ts                    # Teams data
└── testimonials.ts             # Client testimonials
```

### Hooks (`src/hooks/`)

Custom React hooks for reusable logic. Hooks are functions that let you "hook into" React features like state and lifecycle methods:

```
src/hooks/
├── use-auto-height.ts        # Auto-height hook
├── use-controlled-state.ts   # Controlled state hook
├── use-controlled-state.tsx  # Controlled state hook (TSX)
├── use-is-mobile.ts          # Mobile detection hook
└── use-scroll.ts             # Scroll behavior hook
```

### Library (`src/lib/`)

Utility functions and configurations:

```
src/lib/
├── auth/                       # Authentication helpers (better-auth)
│   ├── client.ts
│   └── server.ts
├── emails/
│   ├── index.ts
│   └── templates/
│       └── quick-enquiry.tsx
├── env/                        # Environment variable helpers
│   ├── client.ts
│   └── server.ts
├── get-strict-context.tsx      # Strict context utility
├── redis.ts                    # Redis client
└── utils.ts                    # General utility functions
```

### Modules (`src/modules/`)

Feature-specific modules that contain related functionality grouped together:

```
src/modules/
├── auth/
│   └── components/
│       └── linkedin-button.tsx
├── form/                       # Form handling module
│   ├── components/
│   ├── enquiry-form.tsx        # Enquiry form component
│   ├── quick-enquiry-form.tsx  # Quick enquiry form component
│   └── validators/
│       └── enquiry-schema.ts   # Enquiry form schema
└── views/                      # Page view components
    ├── about.tsx               # About page view
    ├── clients.tsx             # Clients section view
    ├── components/
    │   ├── client-logos.tsx    # Client logos component
    │   └── key-feature-card.tsx # Feature card component
    ├── hero.tsx                # Hero section view
    ├── index.ts                # View exports
    ├── resources.tsx           # Resources section view
    ├── services.tsx            # Services section view
    ├── testimonials.tsx        # Testimonials section view
    ├── why-matters.tsx         # Why it matters section
    └── why-us.tsx              # Why us section
```

### Styles (`src/styles/`)

Global styles and typography:

```
src/styles/
├── globals.css                 # Global CSS styles
└── typography.css              # Typography styles
```

### Types (`src/types/`)

TypeScript type definitions:

```
src/types/
├── index.d.ts                  # Global type declarations
├── layout.d.ts                 # Layout-related types
└── service.d.ts                # Service-related types
```

### Server (`src/server/`)

Server-side database schema and migrations:

```
src/server/
├── index.ts                    # Server entry (drizzle setup, etc.)
├── migrations/                 # SQL migrations
└── schema/                     # Database schema
    ├── auth-generated.ts
    ├── auth.ts
    └── index.ts
```

## 🎨 Public Assets (`public/`)

Static assets served directly:

```
public/
├── brands/                     # Brand logos and assets
├── images/                     # General images (WebP preferred)
└── svg/                        # SVG assets and icons
```

## 📋 File Naming Conventions

### Pages and Components
- **Pages**: `page.tsx` (Next.js App Router convention - this file creates a route)
- **Layouts**: `layout.tsx` (Next.js App Router convention - wraps pages with common elements)
- **Components**: PascalCase (e.g., `UserProfile.tsx`) - React components are typically capitalized
- **Hooks**: camelCase starting with `use` (e.g., `useAutoHeight.ts`) - React hooks must start with "use"

### Directories
- **Route Groups**: Parentheses (e.g., `(root)`)
- **Dynamic Routes**: Square brackets (e.g., `[slug]`)
- **Feature Directories**: kebab-case (e.g., `user-profile/`)

### Assets
- **Images**: kebab-case with descriptive names
- **Icons**: kebab-case with purpose (e.g., `user-profile.svg`)
- **Fonts**: kebab-case with weight (e.g., `albert-sans-400.woff2`)

## 🔧 Configuration Files

### Root Level
- `package.json` - Dependencies and scripts
- `biome.json` - Linting and formatting rules
- `components.json` - Shadcn UI configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration

### Development
- `.env.local` - Local environment variables
- `.gitignore` - Git ignore rules
- `pnpm-lock.yaml` - Package lock file

## 📝 Best Practices

1. **Component Organization**: Group related components in directories (like organizing tools in a toolbox)
2. **Asset Management**: Use appropriate formats (SVG for icons, WebP for images) for optimal performance
3. **Type Safety**: Define types in dedicated files to catch errors early and improve code quality
4. **Code Splitting**: Use dynamic imports for large components to improve page load times
5. **Performance**: Optimize images and fonts to ensure fast loading
6. **Accessibility**: Follow WCAG guidelines to ensure the site works for all users

## 🚀 Adding New Features

When adding new features:

1. **Pages**: Add to appropriate route group in `src/app/` (creates new URLs)
2. **Components**: Create in `src/components/` with proper organization (reusable UI pieces)
3. **Data**: Add to `src/data/` for static content (text, images, configuration)
4. **Types**: Define in `src/types/` for TypeScript support (helps catch errors)
5. **Styles**: Add to `src/styles/` for global styles (affects the entire site)
6. **Assets**: Place in `public/` for static assets (images, icons, fonts)

This structure ensures maintainability, scalability, and follows Next.js best practices. Think of it like organizing a house - each room has a specific purpose, and everything has its place.
