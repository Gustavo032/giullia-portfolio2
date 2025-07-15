# Giullia dos Santos Gomes - Personal Website

## Overview

This is a personal website for Giullia dos Santos Gomes, a pedagogy student at Anhembi Morumbi university. The site is built as a modern, responsive single-page application showcasing her academic background, professional qualifications, and personal qualities. It's designed to present her profile as a future educator with a clean, accessible interface focused on education and personal development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Theme System**: Dark/light mode toggle with localStorage persistence
- **Component Library**: Extensive use of Radix UI primitives through shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL sessions with connect-pg-simple
- **Development Server**: Custom Vite middleware integration

### Key Design Decisions
1. **Monorepo Structure**: Single repository with client, server, and shared code
2. **TypeScript First**: Full TypeScript coverage for type safety
3. **Modern UI**: shadcn/ui components for consistent, accessible design
4. **Responsive Design**: Mobile-first approach with Tailwind CSS
5. **Performance**: Vite for fast development and optimized production builds

## Key Components

### Frontend Components
- **Header**: Enhanced navigation with dark/light theme toggle and mobile menu
- **Hero**: Main landing section with profile photo and introduction
- **About**: Personal journey and mission statement
- **Stats**: Animated statistics section with key achievements
- **Timeline**: Interactive timeline of educational journey
- **Education**: Academic background and qualifications
- **Courses**: Complementary courses and certifications grid
- **Skills**: Interactive skills showcase with category filtering
- **Qualities**: Personal and professional skills with animated progress bars
- **Gallery**: Photo gallery with category filtering and modal view
- **Testimonials**: Rotating testimonials with auto-play functionality
- **Contact**: Contact information with direct links to email and WhatsApp
- **ContactForm**: Interactive contact form with email integration
- **Footer**: Simple footer with copyright information
- **BackToTop**: Enhanced scroll-to-top button with progress indicator

### Backend Components
- **Express Server**: RESTful API structure (routes not yet implemented)
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Vite Integration**: Development server with hot module replacement
- **Database Schema**: User management schema with Drizzle ORM

## Data Flow

### Client-Side Flow
1. React application loads with routing handled by Wouter
2. Theme preference loaded from localStorage
3. Components use React Query for any future API calls
4. Smooth scrolling navigation between sections
5. Responsive design adapts to different screen sizes

### Server-Side Flow
1. Express server serves the React application
2. API routes prefixed with `/api` (currently empty)
3. Database operations through Drizzle ORM
4. Session management with PostgreSQL storage
5. Static file serving for production builds

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives (@radix-ui/*)
- **Styling**: Tailwind CSS with class-variance-authority
- **State Management**: TanStack React Query
- **Icons**: Font Awesome via CDN
- **Fonts**: Google Fonts (Inter)
- **Utilities**: clsx, date-fns, wouter

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: @neondatabase/serverless
- **Session Storage**: connect-pg-simple
- **Validation**: Zod with drizzle-zod integration
- **Development**: tsx for TypeScript execution

### Development Dependencies
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript configuration
- **Linting**: ESLint configuration
- **Development Tools**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Vercel Deployment (Recommended)
1. **Structure**: Project optimized for Vercel static deployment
2. **Build Process**: Vite builds React application to `dist/public`
3. **Configuration**: `vercel.json` configured for SPA routing
4. **No Backend**: Static deployment - no server-side functionality needed

### Build Process
1. **Client Build**: `npm run build` creates optimized static files
2. **Output Directory**: `dist/public` contains all deployable assets
3. **Environment Variables**: No external APIs required for current version
4. **Static Assets**: All content is hardcoded and optimized

### Development Workflow
- **Dev Server**: `npm run dev` starts development server
- **Type Checking**: `npm run check` validates TypeScript
- **Hot Reload**: Vite HMR for instant development feedback
- **Local Testing**: Server runs on `localhost:5000`

### Deployment Options
- **Vercel**: Push to GitHub and import to Vercel (recommended)
- **Netlify**: Deploy `dist/public` folder
- **GitHub Pages**: Deploy `dist/public` folder
- **Any Static Host**: Upload contents of `dist/public`

### Content Management
- **Static Content**: All content is hardcoded in components
- **Images**: Placeholder images from Unsplash
- **Responsive Images**: CSS object-fit for proper image scaling
- **SEO**: Basic meta tags and semantic HTML structure

The application is designed to be easily extensible with additional features like a contact form, blog, or portfolio sections while maintaining the current clean, professional aesthetic focused on education and personal development.