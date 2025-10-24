# Development Workflow

This document outlines the development setup, workflow, and best practices for contributing to the Sphere Global project.

## 🚀 Getting Started

### Prerequisites

Before starting development, ensure you have:

- **Node.js** 18+ (recommended: use nvm for version management)
- **pnpm** (recommended) or npm
- **Git** for version control
- **VS Code** (recommended) with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Auto Rename Tag
  - Bracket Pair Colorizer

### Initial Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd sphere-global
```

2. **Install dependencies:**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start the development server:**
```bash
pnpm dev
# or
npm run dev
```

5. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Environment

### VS Code Configuration

Create `.vscode/settings.json` for consistent development:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

### Recommended Extensions

Install these VS Code extensions for optimal development:

```json
{
  "recommendations": [
    "biomejs.biome",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

## 📝 Development Workflow

### 1. Feature Development

#### Creating a New Feature

1. **Create a feature branch:**
```bash
git checkout -b feature/user-profile
```

2. **Set up the feature structure:**
```
src/
├── app/
│   └── (root)/
│       └── user-profile/
│           └── page.tsx
├── components/
│   └── user-profile/
│       ├── index.ts
│       ├── user-profile.tsx
│       └── user-profile-form.tsx
├── types/
│   └── user-profile.d.ts
└── data/
    └── user-profile.ts
```

3. **Develop the feature:**
- Start with types and interfaces
- Create components with proper structure
- Add styling with Tailwind CSS
- Implement functionality
- Add tests if needed

4. **Test the feature:**
```bash
pnpm dev
# Test in browser
```

#### Code Quality Checks

Before committing, run quality checks:

```bash
# Lint and format code
pnpm lint

# Type check
pnpm type-check

# Build check
pnpm build
```

### 2. Component Development

#### Component Creation Process

1. **Plan the component:**
   - Define props interface
   - Identify subcomponents
   - Plan styling approach
   - Consider accessibility

2. **Create the component file:**
```typescript
// src/components/user-profile/user-profile.tsx
import { UserProfileProps } from '@/types/user-profile'

export function UserProfile({ user, onEdit }: UserProfileProps) {
  // Component implementation
}
```

3. **Add TypeScript types:**
```typescript
// src/types/user-profile.d.ts
export interface UserProfileProps {
  user: User
  onEdit: (user: User) => void
}
```

4. **Style with Tailwind:**
```typescript
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
  <p className="text-gray-600">{user.email}</p>
</div>
```

5. **Export from index:**
```typescript
// src/components/user-profile/index.ts
export { UserProfile } from './user-profile'
export { UserProfileForm } from './user-profile-form'
```

### 3. Page Development

#### App Router Pages

1. **Create page file:**
```typescript
// src/app/(root)/user-profile/page.tsx
import { UserProfile } from '@/components/user-profile'

export default function UserProfilePage() {
  return <UserProfile />
}
```

2. **Add metadata:**
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Profile | Sphere Global',
  description: 'Manage your user profile',
}
```

3. **Handle dynamic routes:**
```typescript
// src/app/(root)/user-profile/[id]/page.tsx
interface UserProfilePageProps {
  params: { id: string }
}

export default function UserProfilePage({ params }: UserProfilePageProps) {
  return <UserProfile userId={params.id} />
}
```

## 🔄 Git Workflow

### Branch Naming

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation updates
- `refactor/component-name` - Code refactoring

### Commit Messages

Follow conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Examples:
```
feat(user-profile): add user profile management
fix(navigation): resolve mobile menu toggle issue
docs(readme): update installation instructions
refactor(components): extract reusable button component
```

### Pull Request Process

1. **Create pull request:**
   - Use descriptive title
   - Add detailed description
   - Link related issues
   - Add screenshots for UI changes

2. **Review checklist:**
   - [ ] Code follows conventions
   - [ ] Tests pass
   - [ ] No console errors
   - [ ] Responsive design works
   - [ ] Accessibility considerations
   - [ ] Performance impact assessed

3. **Merge requirements:**
   - At least one approval
   - All checks pass
   - No merge conflicts

## 🧪 Testing Strategy

### Component Testing

```typescript
// src/components/user-profile/__tests__/user-profile.test.tsx
import { render, screen } from '@testing-library/react'
import { UserProfile } from '../user-profile'

describe('UserProfile', () => {
  it('should render user information', () => {
    const mockUser = { name: 'John Doe', email: 'john@example.com' }
    render(<UserProfile user={mockUser} />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })
})
```

### E2E Testing

```typescript
// cypress/e2e/user-profile.cy.ts
describe('User Profile', () => {
  it('should allow editing user profile', () => {
    cy.visit('/user-profile')
    cy.get('[data-testid="edit-button"]').click()
    cy.get('[data-testid="name-input"]').clear().type('Jane Doe')
    cy.get('[data-testid="save-button"]').click()
    cy.get('[data-testid="user-name"]').should('contain', 'Jane Doe')
  })
})
```

## 🚀 Deployment Process

### Pre-deployment Checklist

- [ ] All tests pass
- [ ] Build succeeds without errors
- [ ] Environment variables configured
- [ ] Performance optimized
- [ ] SEO metadata added
- [ ] Analytics tracking implemented

### Deployment Commands

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Deploy to Vercel
vercel --prod
```

## 🔧 Development Tools

### Code Quality Tools

- **Biome**: Linting and formatting
- **TypeScript**: Type checking
- **ESLint**: Additional linting rules
- **Prettier**: Code formatting (if needed)

### Performance Tools

- **Next.js Analytics**: Performance monitoring
- **Lighthouse**: Performance auditing
- **Bundle Analyzer**: Bundle size analysis

### Debugging Tools

- **React Developer Tools**: Component debugging
- **Next.js DevTools**: Framework debugging
- **Browser DevTools**: Network and performance

## 📊 Monitoring and Analytics

### Development Monitoring

```typescript
// src/lib/analytics.ts
export const trackEvent = (event: string, properties?: Record<string, any>) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', event, properties)
  }
}
```

### Error Tracking

```typescript
// src/lib/error-tracking.ts
export const logError = (error: Error, context?: string) => {
  console.error('Error:', error.message, context)
  // Send to error tracking service
}
```

## 🎨 Design System

### Component Library

- **Base Components**: Button, Input, Card, etc.
- **Layout Components**: Header, Footer, Navigation
- **Feature Components**: User-specific components

### Design Tokens

```typescript
// src/styles/design-tokens.ts
export const tokens = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    success: '#10b981',
    error: '#ef4444',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Albert Sans', 'sans-serif'],
    },
  },
}
```

## 🔍 Code Review Guidelines

### For Reviewers

- **Functionality**: Does the code work as intended?
- **Performance**: Are there any performance issues?
- **Security**: Are there any security vulnerabilities?
- **Accessibility**: Is the component accessible?
- **Maintainability**: Is the code easy to understand and modify?

### For Authors

- **Self-review**: Review your own code before submitting
- **Test thoroughly**: Ensure all functionality works
- **Document changes**: Explain complex logic
- **Follow conventions**: Adhere to established patterns

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors:**
   - Check TypeScript errors
   - Verify import paths
   - Ensure all dependencies are installed

2. **Styling Issues:**
   - Verify Tailwind classes
   - Check CSS specificity
   - Ensure responsive design

3. **Performance Issues:**
   - Use React DevTools Profiler
   - Check bundle size
   - Optimize images and fonts

### Getting Help

- Check existing documentation
- Search for similar issues
- Ask team members
- Create detailed issue reports

This workflow ensures consistent, high-quality development practices across the team.
