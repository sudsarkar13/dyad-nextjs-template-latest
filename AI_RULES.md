# AI Development Rules

This document outlines the technology stack and specific library usage guidelines for this Next.js application. Adhering to these rules will help maintain consistency, improve collaboration, and ensure the AI assistant can effectively understand and modify the codebase.

## Tech Stack Overview

The application is built using the following core technologies:

* **Framework**: Next.js 16.0.3 (App Router)
* **Language**: TypeScript (strict mode enabled)
* **Package Manager**: PNPM with workspace support
* **UI Components**: Shadcn/UI ("New York" style) - A collection of re-usable UI components built with Radix UI and Tailwind CSS
* **Styling**: Tailwind CSS v4 - A utility-first CSS framework with modern @import syntax
* **Icons**: Lucide React - A comprehensive library of simply beautiful SVG icons
* **Forms**: React Hook Form for managing form state and validation, with Zod for schema validation
* **State Management**: React built-in hooks (`useState`, `useReducer`, `useContext`)
* **Notifications/Toasts**: Sonner for displaying non-intrusive notifications
* **Charts**: Recharts for data visualization
* **Animation**: `tailwindcss-animate` plugin and animation capabilities built into Radix UI components
* **Theme**: next-themes for dark/light mode switching
* **Date Handling**: date-fns for date manipulation and react-day-picker for date selection

## Project Structure Rules

### Directory Organization

This project follows Next.js App Router conventions with **NO src/ directory**:

```plaintext
dyad-nextjs-template-latest/
├── app/                    # Next.js App Router (MANDATORY)
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── favicon.ico       # App icon
├── components/            # Reusable components
│   └── ui/               # Shadcn/UI components (50+ components)
├── hooks/                # Custom React hooks
│   └── use-mobile.ts     # Mobile detection hook
├── lib/                  # Utility functions and configurations
│   └── utils.ts          # Shared utility functions
├── public/               # Static assets
└── [config files]        # Various configuration files
```

### Path Aliases

The project uses TypeScript path mapping with the following aliases:

* `@/*` - Points to the root directory
* `@/components` - Points to components directory
* `@/lib` - Points to lib directory
* `@/hooks` - Points to hooks directory
* `@/ui` - Points to components/ui directory

## Library Usage Guidelines

To ensure consistency and leverage the chosen stack effectively, please follow these rules:

### 1. UI Components

* **Primary Choice**: Always prioritize using components from the `components/ui/` directory (Shadcn/UI components)
* **Available Components**: The project includes 50+ pre-configured components including:
  * Basic: Button, Input, Label, Textarea, Select, Checkbox, Radio Group
  * Layout: Card, Sheet, Dialog, Drawer, Tabs, Accordion, Collapsible
  * Navigation: Navigation Menu, Menubar, Breadcrumb, Pagination
  * Data Display: Table, Avatar, Badge, Progress, Calendar, Chart
  * Feedback: Alert, Alert Dialog, Toast (Sonner), Skeleton, Spinner
  * Overlays: Popover, Tooltip, Hover Card, Context Menu, Dropdown Menu
  * Form: Form components with React Hook Form integration
  * Advanced: Carousel, Resizable panels, Scroll Area, Command palette
* **Custom Components**: If a required component is not available, create new components following Shadcn/UI patterns (Radix UI primitives + Tailwind CSS)
* **Component Style**: Use "New York" style as configured in `components.json`
* **Avoid**: Introducing new third-party UI component libraries

### 2. Styling

* **Primary Choice**: Exclusively use Tailwind CSS v4 utility classes for all styling
* **Global Styles**: `app/globals.css` contains:
  * Tailwind CSS v4 imports (`@import "tailwindcss"`)
  * Animation plugin (`@plugin "tailwindcss-animate"`)
  * CSS custom properties for theming
  * Dark mode variant definitions
* **Theme System**: Use CSS custom properties defined in `:root` and `.dark` classes
* **Color System**: Project uses OKLCH color space for better color consistency
* **CSS-in-JS**: Do not use CSS-in-JS libraries (e.g., Styled Components, Emotion)

### 3. Icons

* **Primary Choice**: Use icons exclusively from the `lucide-react` library
* **Usage Pattern**: Import specific icons rather than the entire library
* **Example**: `import { ChevronDown, User, Settings } from "lucide-react"`

### 4. Forms

* **Management**: Use `react-hook-form` for all form logic (state, validation, submission)
* **Validation**: Use `zod` for schema-based validation with `react-hook-form` via `@hookform/resolvers`
* **Form Components**: Utilize the pre-built form components in `components/ui/form.tsx`
* **Input Components**: Use form-specific components like Input, Textarea, Select, Checkbox, etc.

### 5. State Management

* **Local State**: Use React's `useState` and `useReducer` hooks for component-level state
* **Shared State**: Use React Context API for state shared between components
* **Global State**: No external state management library is currently installed
* **Server State**: Use React's built-in data fetching or consider React Query for complex scenarios

### 6. Package Management

* **Primary Tool**: Use PNPM for all package management operations
* **Workspace Support**: Project is configured for PNPM workspaces via `pnpm-workspace.yaml`
* **Commands**: Use `pnpm install`, `pnpm add`, `pnpm remove`, `pnpm outdated`, `pnpm update`, `pnpm update --latest` instead of npm/yarn equivalents
* **Scripts**: Use `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`

### 7. Routing

* **App Router**: Utilize Next.js App Router exclusively (file-system based routing in `app/` directory)
* **No Pages Directory**: Do not create or use a `pages/` directory
* **Route Structure**: Follow App Router conventions for layouts, pages, and route groups

### 8. API & Data Fetching

* **Client-Side**: Use native `fetch` API or simple wrappers
* **Server-Side**: Leverage Next.js Route Handlers in `app/api/` or Server Actions
* **No External Libraries**: No data fetching libraries like React Query are currently installed

### 9. Animations

* **Primary Choice**: Use `tailwindcss-animate` plugin utilities
* **Component Animations**: Leverage built-in Radix UI component animations
* **Custom Animations**: Define in Tailwind config or CSS custom properties

### 10. Notifications

* **Primary Choice**: Use Sonner via the `components/ui/sonner.tsx` component
* **Usage**: Import and use the toast functions from Sonner
* **Styling**: Toasts inherit the project's theme system

### 11. Charts & Data Visualization

* **Primary Choice**: Use Recharts library
* **Chart Components**: Utilize the pre-configured chart components in `components/ui/chart.tsx`
* **Theming**: Charts use the project's CSS custom properties for consistent colors

### 12. Date Handling

* **Date Manipulation**: Use `date-fns` for date operations and formatting
* **Date Picker**: Use `react-day-picker` integrated with the Calendar component
* **Calendar Component**: Use `components/ui/calendar.tsx` for date selection interfaces

### 13. Theme Management

* **Theme Provider**: Use `next-themes` for dark/light mode switching
* **CSS Variables**: Themes are implemented via CSS custom properties
* **Color System**: Uses OKLCH color space for consistent color appearance
* **Theme Toggle**: Implement theme switching using next-themes hooks

### 14. TypeScript

* **Strict Mode**: TypeScript strict mode is enabled
* **Type Safety**: Write strongly typed code, avoid `any` where possible
* **Interfaces**: Define proper interfaces for props, API responses, and data structures
* **Path Mapping**: Use configured path aliases for imports

### 15. Custom Hooks

* **Location**: Place custom React hooks in the `hooks/` directory
* **Naming**: Follow `use*` naming convention
* **Example**: `use-mobile.ts` for responsive design logic
* **Reusability**: Create hooks for reusable stateful logic

### 16. Utility Functions

* **Location**: Place utility functions in `lib/utils.ts`
* **Class Utilities**: Use `clsx` and `tailwind-merge` for conditional class names
* **Type Safety**: Ensure all utilities are properly typed
* **Reusability**: Functions should serve clear, reusable purposes

### 17. Component Patterns

* **Composition**: Follow Radix UI composition patterns for building components
* **Variants**: Use `class-variance-authority` for component variants
* **Props**: Define clear prop interfaces with proper TypeScript types
* **Forwarding**: Use `React.forwardRef` for components that need ref forwarding

### 18. Performance

* **Code Splitting**: Leverage Next.js automatic code splitting
* **Dynamic Imports**: Use dynamic imports for heavy components
* **Image Optimization**: Use Next.js Image component for images
* **Bundle Analysis**: Monitor bundle size and optimize as needed

## Development Workflow

### Commands

* **Development**: `pnpm dev` - Start development server
* **Build**: `pnpm build` - Create production build
* **Start**: `pnpm start` - Start production server
* **Lint**: `pnpm lint` - Run ESLint

### Code Quality

* **ESLint**: Configured with Next.js recommended rules
* **TypeScript**: Strict mode enabled with comprehensive type checking
* **Formatting**: Follow consistent code formatting patterns
* **Imports**: Use path aliases and organize imports logically

### Git Workflow

* **Commits**: Write clear, descriptive commit messages
* **Branches**: Use feature branches for development
* **Pull Requests**: Review code before merging to main branch

## Specific Configuration Notes

### Tailwind CSS v4

* Uses modern `@import "tailwindcss"` syntax
* Configured with `@theme inline` for CSS custom properties
* Animation keyframes defined in CSS
* Dark mode implemented via CSS custom properties

### Shadcn/UI Configuration

* Style: "New York"
* RSC: Enabled (React Server Components)
* TSX: TypeScript JSX enabled
* Base Color: Slate
* CSS Variables: Enabled
* Icon Library: Lucide

### Next.js Configuration

* App Router: Enabled
* TypeScript: Strict mode
* ESLint: Next.js configuration
* Path aliases: `@/*` pointing to root

By following these guidelines, we can build a robust, maintainable, and consistent application that leverages the full power of the chosen technology stack.
