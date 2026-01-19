# Sphere Global

A modern, responsive website for Sphere Global built with Next.js 16, React 19, and TypeScript. This project showcases our services, company information, and provides a platform for client engagement.

## 🚀 Tech Stack

### Core Technologies
- **Next.js 16**: A React framework that provides server-side rendering, routing, and optimization out of the box
- **React 19**: A JavaScript library for building user interfaces using reusable components
- **TypeScript**: A typed superset of JavaScript that adds static type checking
- **Tailwind CSS 4**: A utility-first CSS framework for rapid UI development

### Supporting Libraries
- **Better Auth**: Comprehensive authentication solution for Next.js
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **Radix UI**: Unstyled, accessible UI primitives for building design systems
- **Motion**: Animation library for React components
- **React Hook Form**: Performant, flexible forms with easy validation
- **Zod**: TypeScript-first schema validation
- **Nuqs**: Type-safe search params state manager
- **Sonner**: An opinionated toast component for React
- **Vaul**: Drawer component for React
- **React Email**: Build and send emails using React
- **Lucide React**: Beautiful, customizable SVG icons
- **Biome**: Fast linter and formatter for JavaScript/TypeScript
- **pnpm**: Fast, disk space efficient package manager

## 📁 Project Structure

```
sphere-global/
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── (root)/                # Main application routes
│   │   │   ├── (company)/         # About page
│   │   │   │   ├── about/         # Careers and job listings
│   │   │   │   ├── careers/       # Contact page
│   │   │   │   ├── contact/       # Contact page
│   │   │   │   ├── methodology/   # Contact page
│   │   │   ├── legal/             # Legal pages (privacy, terms)
│   │   │   ├── resources/         # Resources (blogs, case studies, FAQs)
│   │   │   ├── services/          # Services pages
│   │   │   └── page.tsx           # Home page
│   │   ├── api/                   # API routes
│   │   │   ├── auth/              # Authentication endpoints
│   │   │   ├── health/            # Health check
│   │   │   └── test/              # Test endpoints
│   │   ├── robots.ts              # Robots.txt generation
│   │   └── sitemap.ts             # Sitemap generation
│   ├── assets/                    # Static assets
│   │   ├── fonts/                 # Custom fonts (Albert Sans, Inter Display)
│   │   └── icons/                 # SVG icon components
│   ├── components/                # Reusable UI components
│   │   ├── layout/                # Layout components (navbar, footer, CTA)
│   │   ├── ui/                    # Shadcn UI components
│   │   └── markdown/              # Markdown rendering
│   ├── contents/                  # MDX content files
│   │   ├── case-studies/          # Case studies content
│   │   ├── research-papers/       # Research papers content
│   │   └── services/              # Service descriptions
│   ├── data/                      # Static data and configuration
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions and configurations
│   │   ├── auth/                  # Authentication utilities
│   │   ├── emails/                # Email templates and utilities
│   │   └── env/                   # Environment variable validation
│   ├── modules/                   # Feature-specific modules
│   │   ├── auth/                  # Authentication components
│   │   ├── case-studies/          # Case studies management
│   │   ├── form/                  # Form components and validators
│   │   ├── research-papers/       # Research papers management
│   │   ├── seo/                   # SEO utilities
│   │   ├── services/              # Service-related components
│   │   └── views/                 # Page view components
│   ├── server/                    # Server-side code
│   │   ├── migrations/            # Database migrations
│   │   └── schema/                # Database schemas
│   ├── styles/                    # Global styles
│   │   ├── globals.css            # Global CSS
│   │   ├── typography.css         # Typography styles
│   │   └── animations.css         # Animation styles
│   └── types/                     # TypeScript type definitions
├── public/                        # Static public assets
│   ├── brands/                    # Client brand logos
│   ├── images/                    # Images (team, services, blogs)
│   ├── pdf/                       # PDF assets
│   ├── svg/                       # SVG assets
│   └── videos/                    # Video assets
├── docs/                          # Project documentation
│   ├── accessibility.md           # Accessibility guidelines
│   ├── code-conventions.md        # Coding standards
│   ├── deployment-checklist.md    # Deployment guide
│   ├── development-workflow.md    # Development setup
│   ├── file-structure.md          # Detailed file structure
│   ├── load-balancer.md           # Load balancer setup
│   ├── vps-deployment.md          # VPS deployment guide
│   └── README.md                  # Documentation index
├── tests/                         # Test files
│   ├── e2e/                       # End-to-end tests
│   └── int/                       # Integration tests
└── configuration files            # Config files (biome.json, tsconfig.json, etc.)
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

## 🐳 Local Services (Docker)

The project uses Docker for local database and email testing services.

### Postgres (Database)
- Port: `5432`
- Default credentials: `user`/`password` (configured in `.env`)

### MailHog (Email Testing)
- SMTP Port: `1025`
- Web UI: [http://localhost:8025](http://localhost:8025)
- The default `SMTP_HOST=localhost` and `SMTP_PORT=1025` in `.env.local` target this service.

Start all services:
```bash
pnpm docker:up
```

## 📜 Available Scripts

### Core
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter and formatter
- `pnpm format` - Format code with Biome

### Database & Auth
- `pnpm db:generate` - Generate SQL migrations
- `pnpm db:migrate` - Apply migrations
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm auth:generate` - Generate auth schema

### Docker & Services
- `pnpm docker:up` - Start Docker services (Postgres, MailHog)
- `pnpm docker:down` - Stop Docker services
- `pnpm email:dev` - Start email preview server

### Testing
- `pnpm test` - Run all tests
- `pnpm test:e2e` - Run Playwright E2E tests
- `pnpm test:int` - Run Vitest integration tests

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

### Deployment Helper

A helper script is provided to simplify deployment tasks:

```bash
# Initialize SSL (First-time)
./scripts/deploy.sh ssl-init

# Start services
./scripts/deploy.sh start

# View logs
./scripts/deploy.sh logs
```

For detailed instructions, see the [VPS Deployment Guide](./docs/vps-deployment.md).

### Environment Variables

Create a `.env` file for your environment. You can copy the example:

```bash
cp example.env .env
```

Key variables include:
- `DATABASE_URL`: Postgres connection string
- `BETTER_AUTH_SECRET`: Secret for auth tokens
- `PORT`: External port (default: 80)
- `SMTP_*`: Email configuration
- `DB_*`: Database credentials (used by Docker)


## 📄 License

This project is proprietary to Sphere Global.

---

For detailed information about the project structure and conventions, please refer to the documentation in the `docs/` directory.