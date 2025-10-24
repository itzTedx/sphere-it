# Code Conventions

This document outlines the coding standards, conventions, and best practices for the Sphere Global project.

## 🎯 General Principles

- **Readability**: Code should be self-documenting and easy to understand
- **Consistency**: Follow established patterns throughout the codebase
- **Performance**: Optimize for both development and production
- **Accessibility**: Ensure all components are accessible
- **Type Safety**: Leverage TypeScript for better development experience

## 📁 File and Directory Naming

### Files
- **Components**: PascalCase (e.g., `UserProfile.tsx`, `DealCard.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAutoHeight.ts`)
- **Utilities**: camelCase (e.g., `formatPrice.ts`, `validateEmail.ts`)
- **Types**: camelCase with `.d.ts` extension (e.g., `user.d.ts`)
- **Pages**: `page.tsx` (Next.js App Router convention)
- **Layouts**: `layout.tsx` (Next.js App Router convention)

### Directories
- **Route Groups**: Parentheses (e.g., `(root)`, `(dashboard)`)
- **Dynamic Routes**: Square brackets (e.g., `[slug]`, `[id]`)
- **Feature Directories**: kebab-case (e.g., `user-profile/`, `deal-management/`)
- **Component Directories**: kebab-case (e.g., `ui/`, `layout/`)

### Assets
- **Images**: kebab-case with descriptive names (e.g., `hero-image.webp`)
- **Icons**: kebab-case with purpose (e.g., `user-icon.svg`, `arrow-right.svg`)
- **Fonts**: kebab-case with weight (e.g., `albert-sans-400.woff2`)

## 🏗️ Component Structure

### Component File Organization

```typescript
// 1. Imports (grouped and sorted)
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// 2. Types and Interfaces
interface ComponentProps {
  title: string
  onAction: () => void
}

// 3. Main Component
export function Component({ title, onAction }: ComponentProps) {
  // Component logic
  return (
    <Card>
      <h2>{title}</h2>
      <Button onClick={onAction}>Action</Button>
    </Card>
  )
}

// 4. Subcomponents (if any)
function SubComponent() {
  return <div>Sub component</div>
}
```

### Component Naming
- Use PascalCase for component names
- Use descriptive names that indicate purpose
- Avoid abbreviations unless widely understood

```typescript
// Good
export function UserProfileCard() {}
export function DealManagementForm() {}

// Avoid
export function UserCard() {} // Too generic
export function DMF() {} // Abbreviation
```

## 🎨 Styling Conventions

### Tailwind CSS Classes
- Use utility classes for styling
- Group related classes together
- Use responsive prefixes consistently
- Prefer Tailwind classes over custom CSS

```typescript
// Good
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md md:flex-row md:gap-6">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <p className="text-gray-600">Description</p>
</div>

// Avoid
<div className="bg-white p-6 flex gap-4 flex-col md:flex-row md:gap-6 rounded-lg shadow-md">
```

### Custom CSS
- Use CSS modules or styled-components for complex styles
- Keep custom CSS minimal
- Use CSS custom properties for theme values

```css
/* globals.css */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
}

.custom-component {
  color: var(--primary-color);
}
```

## 🔧 TypeScript Conventions

### Type Definitions
- Use interfaces for object shapes
- Use type aliases for unions and primitives
- Export types from dedicated files
- Use generic types for reusable components

```typescript
// Good
interface UserProfile {
  id: string
  name: string
  email: string
}

type Status = 'pending' | 'approved' | 'rejected'

// Component with generic props
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}
```

### Function Signatures
- Use explicit return types for complex functions
- Use arrow functions for simple operations
- Use function declarations for main component functions

```typescript
// Good
export function UserProfile({ user }: { user: UserProfile }) {
  return <div>{user.name}</div>
}

// Good for simple functions
const formatPrice = (price: number): string => `$${price.toFixed(2)}`

// Good for complex functions
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}
```

## 🎣 React Hooks Conventions

### Custom Hooks
- Use `use` prefix for all custom hooks
- Return objects for multiple values
- Use descriptive names

```typescript
// Good
export function useUserProfile(userId: string) {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  
  return { profile, loading, setProfile }
}

// Good for single value
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  return isMobile
}
```

### Hook Dependencies
- Always include all dependencies in dependency arrays
- Use useCallback for functions passed as props
- Use useMemo for expensive calculations

```typescript
// Good
useEffect(() => {
  fetchUserData(userId)
}, [userId])

const handleClick = useCallback(() => {
  onAction()
}, [onAction])

const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data)
}, [data])
```

## 📝 Code Organization

### Import Order
1. React and Next.js imports
2. Third-party libraries
3. Internal components and utilities
4. Types and interfaces
5. Relative imports

```typescript
// Good
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { UserProfile } from '@/types/user'
import { formatDate } from '@/lib/utils'
import './styles.css'
```

### Component Organization
- Group related components in directories
- Use index files for clean imports
- Separate concerns (UI, logic, data)

```
components/
├── ui/                    # Base UI components
├── forms/               # Form components
├── layout/              # Layout components
└── features/            # Feature-specific components
    ├── user-profile/
    │   ├── index.ts
    │   ├── user-profile.tsx
    │   └── user-profile-form.tsx
    └── deal-management/
```

## 🚀 Performance Conventions

### Component Optimization
- Use React.memo for expensive components
- Use useMemo for expensive calculations
- Use useCallback for event handlers
- Avoid unnecessary re-renders

```typescript
// Good
const ExpensiveComponent = React.memo(({ data }: { data: Data[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item))
  }, [data])
  
  return <div>{processedData}</div>
})
```

### Image Optimization
- Use Next.js Image component
- Provide appropriate sizes
- Use WebP format when possible

```typescript
// Good
import Image from 'next/image'

<Image
  src="/hero-image.webp"
  alt="Hero image"
  width={800}
  height={600}
  priority
/>
```

## 🔒 Security Conventions

### Input Validation
- Validate all user inputs
- Use Zod for schema validation
- Sanitize data before processing

```typescript
// Good
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
})

const validateUser = (data: unknown) => {
  return userSchema.parse(data)
}
```

### Environment Variables
- Use environment variables for sensitive data
- Never commit secrets to version control
- Use TypeScript for environment variable types

```typescript
// Good
const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  secretKey: process.env.SECRET_KEY!,
}
```

## 📱 Responsive Design

### Mobile-First Approach
- Start with mobile styles
- Use responsive prefixes
- Test on multiple devices

```typescript
// Good
<div className="flex flex-col gap-4 p-4 md:flex-row md:gap-6 md:p-6 lg:gap-8">
  <div className="w-full md:w-1/2 lg:w-1/3">
    Content
  </div>
</div>
```

## ♿ Accessibility Conventions

### Semantic HTML
- Use appropriate HTML elements
- Provide alt text for images
- Use proper heading hierarchy

```typescript
// Good
<section>
  <h2>Section Title</h2>
  <img src="/image.jpg" alt="Descriptive alt text" />
  <button aria-label="Close dialog">×</button>
</section>
```

### ARIA Attributes
- Use ARIA labels when needed
- Ensure keyboard navigation
- Test with screen readers

```typescript
// Good
<button
  aria-expanded={isOpen}
  aria-controls="menu"
  aria-label="Toggle menu"
>
  Menu
</button>
```

## 🧪 Testing Conventions

### Component Testing
- Test component behavior, not implementation
- Use descriptive test names
- Mock external dependencies

```typescript
// Good
describe('UserProfile', () => {
  it('should display user name when profile is loaded', () => {
    const mockUser = { name: 'John Doe', email: 'john@example.com' }
    render(<UserProfile user={mockUser} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
```

## 📋 Code Review Checklist

- [ ] Code follows naming conventions
- [ ] Components are properly typed
- [ ] No unused imports or variables
- [ ] Proper error handling
- [ ] Accessibility considerations
- [ ] Performance optimizations
- [ ] Security best practices
- [ ] Responsive design
- [ ] Code is well-documented

## 🔧 Tool Configuration

### Biome Configuration
The project uses Biome for linting and formatting. Key rules:

- **Formatting**: 2-space indentation, double quotes, semicolons
- **Linting**: TypeScript strict mode, React hooks rules
- **Import Organization**: Automatic import sorting

### TypeScript Configuration
- Strict mode enabled
- Path mapping for clean imports
- Modern ES features

This document should be updated as conventions evolve and new patterns are established in the codebase.
