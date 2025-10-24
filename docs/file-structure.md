# File Structure Guide

This document provides a comprehensive overview of the Sphere Global project structure and explains the organization of files and directories.

## 📁 Root Directory Structure

```
sphere-global/
├── src/                        # Source code directory
├── public/                     # Static public assets
├── docs/                       # Project documentation
├── package.json               # Dependencies and scripts
├── biome.json                 # Linting and formatting configuration
├── components.json            # Shadcn UI components configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project overview
```

## 🎯 Source Code Structure (`src/`)

### App Router (`src/app/`)

The application uses Next.js 16 App Router for file-based routing:

```
src/app/
├── (root)/                    # Route group for main pages
│   ├── layout.tsx            # Root layout component
│   ├── page.tsx              # Home page
│   ├── about/                 # About page
│   │   └── page.tsx
│   ├── careers/               # Careers page
│   │   └── page.tsx
│   ├── contact/               # Contact page
│   │   └── page.tsx
│   ├── legal/                 # Legal pages
│   │   ├── components/        # Legal page components
│   │   ├── privacy/           # Privacy policy
│   │   └── terms-of-services/ # Terms of service
│   ├── resources/              # Resources section
│   │   ├── blogs/             # Blog posts
│   │   ├── case-studies/      # Case studies
│   │   ├── faqs/              # Frequently asked questions
│   │   ├── research-papers/   # Research papers
│   │   └── testimonials/      # Client testimonials
│   └── services/              # Services pages
│       ├── [slug]/            # Dynamic service pages
│       └── page.tsx           # Services listing
├── favicon.ico                # Site favicon
├── robots.ts                  # SEO robots configuration
└── sitemap.ts                 # SEO sitemap generation
```

### Assets (`src/assets/`)

Static assets organized by type:

```
src/assets/
├── fonts/                     # Custom font files
│   ├── albert-sans/          # Albert Sans font family
│   ├── inter-display/        # Inter Display font family
│   └── index.ts              # Font exports
├── icons/                     # SVG icon components
│   ├── ai.tsx                # AI-related icons
│   ├── arrows.tsx            # Arrow icons
│   ├── books.tsx             # Book/documentation icons
│   ├── briefcase.tsx         # Business icons
│   ├── checkmarks.tsx        # Checkmark icons
│   ├── chevrons.tsx          # Chevron navigation icons
│   ├── email.tsx             # Email icons
│   ├── phone.tsx             # Phone icons
│   ├── social.tsx            # Social media icons
│   ├── support.tsx           # Support icons
│   ├── timeline.tsx          # Timeline icons
│   ├── user.tsx              # User-related icons
│   └── index.ts              # Icon exports
├── checkmark-iconbox.tsx     # Checkmark icon component
├── illustration.tsx          # Illustration components
└── logo.tsx                  # Logo components
```

### Components (`src/components/`)

Reusable UI components organized by purpose:

```
src/components/
├── dev/                      # Development-only components
│   └── breakpoint-ind.tsx    # Breakpoint indicator
├── layout/                   # Layout components
│   ├── cta.tsx              # Call-to-action components
│   ├── footer.tsx            # Site footer
│   ├── navbar/               # Navigation components
│   │   ├── desktop.tsx       # Desktop navigation
│   │   ├── mobile.tsx        # Mobile navigation
│   │   └── index.ts          # Navigation exports
│   └── structured-data.tsx    # SEO structured data
├── ui/                       # Base UI components
│   ├── badge.tsx             # Badge component
│   ├── button.tsx            # Button component
│   ├── card.tsx              # Card component
│   ├── checkbox.tsx          # Checkbox component
│   ├── drawer.tsx            # Drawer component
│   ├── field.tsx             # Form field component
│   ├── input.tsx             # Input component
│   ├── input-group.tsx       # Input group component
│   ├── item.tsx              # List item component
│   ├── label.tsx             # Label component
│   ├── logo-carousel.tsx     # Logo carousel component
│   ├── marquee.tsx           # Marquee component
│   ├── navigation-menu.tsx   # Navigation menu component
│   ├── primitives/           # Low-level primitive components
│   │   ├── animate/          # Animation components
│   │   ├── base/             # Base components
│   │   ├── effects/          # Visual effects
│   │   └── radix/            # Radix UI wrappers
│   ├── radix/                # Radix UI components
│   │   ├── accordion.tsx     # Accordion component
│   │   └── tabs.tsx          # Tabs component
│   ├── separator.tsx         # Separator component
│   ├── skeleton.tsx          # Loading skeleton
│   ├── sonner.tsx            # Toast notifications
│   ├── table.tsx             # Table component
│   ├── tabs.tsx              # Tabs component
│   └── textarea.tsx          # Textarea component
├── field-hear.tsx            # Form field component
└── icon-box.tsx              # Icon box component
```

### Data (`src/data/`)

Static data and configuration files:

```
src/data/
├── about.ts                  # About page data
├── constants.ts              # Application constants
├── legal.ts                  # Legal page content
├── services.ts               # Services data
├── site-config.ts            # Site configuration
└── testimonials.ts            # Client testimonials
```

### Hooks (`src/hooks/`)

Custom React hooks for reusable logic:

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
├── get-strict-context.tsx    # Strict context utility
└── utils.ts                   # General utility functions
```

### Modules (`src/modules/`)

Feature-specific modules:

```
src/modules/
├── form/                     # Form handling module
│   ├── components/           # Form components
│   ├── enquiry-form.tsx     # Enquiry form component
│   └── validators/           # Form validation
│       └── enquiry-schema.ts # Enquiry form schema
└── views/                    # Page view components
    ├── about.tsx             # About page view
    ├── clients.tsx           # Clients section view
    ├── components/           # View-specific components
    │   ├── client-logos.tsx  # Client logos component
    │   └── key-feature-card.tsx # Feature card component
    ├── hero.tsx              # Hero section view
    ├── index.ts              # View exports
    ├── resources.tsx         # Resources section view
    ├── services.tsx          # Services section view
    ├── testimonials.tsx      # Testimonials section view
    ├── why-matters.tsx       # Why it matters section
    └── why-us.tsx            # Why us section
```

### Styles (`src/styles/`)

Global styles and typography:

```
src/styles/
├── globals.css               # Global CSS styles
└── typography.css            # Typography styles
```

### Types (`src/types/`)

TypeScript type definitions:

```
src/types/
├── index.d.ts                # Global type declarations
├── layout.d.ts               # Layout-related types
└── service.d.ts              # Service-related types
```

## 🎨 Public Assets (`public/`)

Static assets served directly:

```
public/
├── brands/                   # Brand logos and assets
│   ├── adcb.svg             # ADCB logo
│   ├── ag-cars.png          # AG Cars logo
│   ├── al-ghurair.svg       # Al Ghurair logo
│   ├── cbd.svg              # CBD logo
│   ├── cbj.svg              # CBJ logo
│   ├── coforge.svg          # Coforge logo
│   ├── enbd.svg             # ENBD logo
│   ├── gems.png             # GEMS logo
│   ├── igt-solution.svg     # IGT Solution logo
│   └── mashreq.svg          # Mashreq logo
├── images/                   # General images
│   ├── avatar-1.jpg         # Avatar images
│   ├── avatar-2.jpg
│   ├── avatar-3.jpg
│   ├── avatar-4.jpg
│   ├── avatar-5.jpg
│   ├── avatar-6.jpg
│   └── banking.webp         # Banking image
└── svg/                      # SVG assets
    ├── assure.svg            # Assure icon
    ├── augment.svg           # Augment icon
    ├── automate.svg          # Automate icon
    ├── data.svg              # Data icon
    ├── elevate.svg           # Elevate icon
    ├── evaluate.svg          # Evaluate icon
    ├── flexible.svg          # Flexible icon
    ├── growth.svg            # Growth icon
    ├── guides.svg            # Guides icon
    ├── pragmatism.svg        # Pragmatism icon
    ├── precision.svg         # Precision icon
    ├── reliability.svg       # Reliability icon
    ├── scale.svg             # Scale icon
    ├── techstack.svg         # Tech stack icon
    └── trusted.svg           # Trusted icon
```

## 📋 File Naming Conventions

### Pages and Components
- **Pages**: `page.tsx` (App Router convention)
- **Layouts**: `layout.tsx` (App Router convention)
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase starting with `use` (e.g., `useAutoHeight.ts`)

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

1. **Component Organization**: Group related components in directories
2. **Asset Management**: Use appropriate formats (SVG for icons, WebP for images)
3. **Type Safety**: Define types in dedicated files
4. **Code Splitting**: Use dynamic imports for large components
5. **Performance**: Optimize images and fonts
6. **Accessibility**: Follow WCAG guidelines in component design

## 🚀 Adding New Features

When adding new features:

1. **Pages**: Add to appropriate route group in `src/app/`
2. **Components**: Create in `src/components/` with proper organization
3. **Data**: Add to `src/data/` for static content
4. **Types**: Define in `src/types/` for TypeScript support
5. **Styles**: Add to `src/styles/` for global styles
6. **Assets**: Place in `public/` for static assets

This structure ensures maintainability, scalability, and follows Next.js best practices.
