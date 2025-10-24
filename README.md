# Sphere Global

A modern, responsive website for Sphere Global built with Next.js 16, React 19, and TypeScript. This project showcases our services, company information, and provides a platform for client engagement.

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives with custom components
- **Animations**: Motion (Framer Motion)
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Linting & Formatting**: Biome
- **Package Manager**: pnpm

## 📁 Project Structure

```
sphere-global/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── assets/                 # Static assets (fonts, icons, illustrations)
│   ├── components/             # Reusable UI components
│   ├── data/                   # Static data and configuration
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions and configurations
│   ├── modules/                # Feature-specific modules
│   ├── styles/                 # Global styles and typography
│   └── types/                  # TypeScript type definitions
├── public/                     # Static public assets
├── docs/                       # Project documentation
└── configuration files
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
- Uses Next.js 16 App Router for file-based routing
- Server Components by default for optimal performance
- Client Components only when necessary (interactivity, browser APIs)

### Component Organization
- **UI Components**: Reusable, accessible components in `src/components/ui/`
- **Layout Components**: Navigation, footer, and layout-specific components
- **Feature Modules**: Self-contained modules in `src/modules/`

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Built on Radix UI primitives
- **Typography**: Custom font system with Albert Sans and Inter Display
- **Responsive Design**: Mobile-first approach

## 📚 Documentation

- [File Structure Guide](./docs/file-structure.md) - Detailed explanation of project organization
- [Code Conventions](./docs/code-conventions.md) - Coding standards and best practices
- [Development Workflow](./docs/development-workflow.md) - Development setup and processes

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