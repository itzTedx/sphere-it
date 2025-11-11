# Sphere Global

A modern, responsive website for Sphere Global built with Next.js 16, React 19, and TypeScript. This project showcases our services, company information, and provides a platform for client engagement.

## 🚀 Tech Stack

### Core Technologies
- **Next.js 16**: A React framework that provides server-side rendering, routing, and optimization out of the box
- **React 19**: A JavaScript library for building user interfaces using reusable components
- **TypeScript**: A typed superset of JavaScript that adds static type checking
- **Tailwind CSS 4**: A utility-first CSS framework for rapid UI development

### Supporting Libraries
- **Radix UI**: Unstyled, accessible UI primitives for building design systems
- **Motion (Framer Motion)**: Animation library for React components
- **React Hook Form**: Performant, flexible forms with easy validation
- **Zod**: TypeScript-first schema validation
- **Lucide React**: Beautiful, customizable SVG icons
- **Biome**: Fast linter and formatter for JavaScript/TypeScript
- **pnpm**: Fast, disk space efficient package manager

## 📁 Project Structure

```
sphere-global/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (root)/             # Main application routes
│   │   │   ├── about/          # About page
│   │   │   ├── careers/        # Careers and job listings
│   │   │   ├── contact/        # Contact page
│   │   │   ├── legal/          # Legal pages (privacy, terms)
│   │   │   ├── resources/      # Resources (blogs, case studies, FAQs)
│   │   │   ├── services/       # Services pages
│   │   │   └── page.tsx        # Home page
│   │   ├── api/                # API routes
│   │   │   ├── auth/           # Authentication endpoints
│   │   │   ├── health/         # Health check
│   │   │   └── test/           # Test endpoints
│   │   ├── robots.ts           # Robots.txt generation
│   │   └── sitemap.ts          # Sitemap generation
│   ├── assets/                 # Static assets
│   │   ├── fonts/              # Custom fonts (Albert Sans, Inter Display)
│   │   └── icons/              # SVG icon components
│   ├── components/             # Reusable UI components
│   │   ├── layout/             # Layout components (navbar, footer, CTA)
│   │   ├── ui/                 # Shadcn UI components
│   │   └── markdown/           # Markdown rendering
│   ├── contents/               # MDX content files
│   │   └── services/           # Service descriptions
│   ├── data/                   # Static data and configuration
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions and configurations
│   │   ├── auth/               # Authentication utilities
│   │   ├── emails/             # Email templates and utilities
│   │   └── env/                # Environment variable validation
│   ├── modules/                # Feature-specific modules
│   │   ├── auth/               # Authentication components
│   │   ├── form/               # Form components and validators
│   │   ├── seo/                # SEO utilities
│   │   ├── services/           # Service-related components
│   │   └── views/              # Page view components
│   ├── server/                 # Server-side code
│   │   ├── migrations/         # Database migrations
│   │   └── schema/             # Database schemas
│   ├── styles/                 # Global styles
│   │   ├── globals.css         # Global CSS
│   │   ├── typography.css      # Typography styles
│   │   └── animations.css      # Animation styles
│   └── types/                  # TypeScript type definitions
├── public/                     # Static public assets
│   ├── brands/                 # Client brand logos
│   ├── images/                 # Images (team, services, blogs)
│   └── svg/                    # SVG assets
├── docs/                       # Project documentation
│   ├── accessibility.md        # Accessibility guidelines
│   ├── code-conventions.md     # Coding standards
│   ├── deployment-checklist.md # Deployment guide
│   ├── development-workflow.md # Development setup
│   ├── file-structure.md       # Detailed file structure
│   ├── load-balancer.md        # Load balancer setup
│   ├── vps-deployment.md       # VPS deployment guide
│   └── README.md               # Documentation index
├── tests/                      # Test files
│   ├── e2e/                    # End-to-end tests
│   └── int/                    # Integration tests
└── configuration files         # Config files (biome.json, tsconfig.json, etc.)
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sphere-global
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter and formatter
- `pnpm format` - Format code with Biome

## 🏗️ Architecture

### App Router Structure
- **File-based Routing**: Pages are created by adding files to the `src/app/` directory
- **Server Components**: Components that render on the server for better performance (default)
- **Client Components**: Components that run in the browser for interactivity (marked with `'use client'`)

### Component Organization
- **UI Components**: Reusable building blocks (buttons, inputs, cards) in `src/components/ui/`
- **Layout Components**: Page structure elements (navigation, footer) in `src/components/layout/`
- **Feature Modules**: Self-contained business logic in `src/modules/`

### Styling Approach
- **Tailwind CSS**: Write styles using utility classes instead of custom CSS
- **Component Library**: Pre-built components using Radix UI primitives
- **Typography**: Custom fonts (Albert Sans for headings, Inter Display for body text)
- **Responsive Design**: Mobile-first approach that scales up to desktop

## 📚 Documentation

Comprehensive documentation is available in the [`docs/`](./docs/) directory:

- **[Documentation Index](./docs/README.md)** - Overview of all available documentation
- **[File Structure Guide](./docs/file-structure.md)** - Detailed explanation of project organization
- **[Code Conventions](./docs/code-conventions.md)** - Coding standards and best practices
- **[Development Workflow](./docs/development-workflow.md)** - Development setup and processes
- **[Accessibility Guidelines](./docs/accessibility.md)** - Accessibility standards and practices
- **[Deployment Checklist](./docs/deployment-checklist.md)** - Pre-deployment checklist
- **[VPS Deployment Guide](./docs/vps-deployment.md)** - VPS deployment instructions
- **[Load Balancer Setup](./docs/load-balancer.md)** - Load balancer configuration

## 🤝 Contributing

### For New Developers
If you're new to React or modern web development:

1. **Start Here**: Read the [Documentation Index](./docs/README.md) for an overview
2. **Learn the Basics**: Familiarize yourself with React concepts (components, props, state)
3. **Understand the Structure**: Read the [File Structure Guide](./docs/file-structure.md) to understand project organization
4. **Follow Conventions**: Study the [Code Conventions](./docs/code-conventions.md) for coding standards
5. **Setup Development**: Follow the [Development Workflow](./docs/development-workflow.md) guide
6. **Start Small**: Begin with simple tasks like updating content or styling

### For Experienced Developers
1. Follow the established code conventions
2. Use the provided linting and formatting tools
3. Write meaningful commit messages
4. Test your changes thoroughly

## 🚀 Deployment

The project is optimized for deployment on Vercel, but can be deployed to any platform that supports Next.js.

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any required environment variables here
```

### Production Build

```bash
pnpm build
pnpm start
```


## 📄 License

This project is proprietary to Sphere Global.

---

For detailed information about the project structure and conventions, please refer to the documentation in the `docs/` directory.