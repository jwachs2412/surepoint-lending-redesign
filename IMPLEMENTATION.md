# Implementation Guide - SurePoint Equity Website

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Development Workflow](#development-workflow)
6. [Component Architecture](#component-architecture)
7. [Styling Conventions](#styling-conventions)
8. [Routing](#routing)
9. [SEO Implementation](#seo-implementation)
10. [Accessibility](#accessibility)
11. [Responsive Design](#responsive-design)
12. [Forms](#forms)
13. [Build Process](#build-process)
14. [Environment Variables](#environment-variables)
15. [Testing](#testing)
16. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a modern React-based website for SurePoint Equity, a real estate investment lending company. The site features a responsive design, comprehensive SEO optimization, and full WCAG 2.1 AA accessibility compliance.

### Key Features

- 📱 Fully responsive design (mobile, tablet, desktop, wide)
- ♿ WCAG 2.1 AA accessible
- 🚀 Optimized for performance (Lighthouse 95+ scores)
- 🔍 SEO-optimized with structured data
- 🎨 Modern SASS architecture with CSS Modules
- ⚡ Fast development with Vite HMR
- 📝 TypeScript for type safety
- 🎯 Clean component architecture

---

## Technology Stack

### Core Technologies

- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety
- **Vite 6.0.3** - Build tool and dev server
- **SASS 1.83.4** - CSS preprocessor

### Key Dependencies

- **React Router DOM 7.1.1** - Client-side routing
- **React Hook Form 7.54.2** - Form state management
- **React Helmet Async 2.0.5** - SEO meta tags
- **Google Maps** - Interactive maps

### Development Tools

- **TypeScript ESLint 8.18.2** - Linting
- **Vite Plugin React SWC** - Fast React refresh
- **PostCSS** - CSS processing

---

## Project Structure

```
surepoint-lending-redesign/
├── public/                      # Static assets
│   ├── assets/                  # Images, icons, fonts
│   ├── robots.txt              # Search engine directives
│   └── sitemap.xml             # Site structure for SEO
├── src/
│   ├── components/             # React components
│   │   ├── common/             # Reusable UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.scss
│   │   │   ├── Input/
│   │   │   ├── Textarea/
│   │   │   ├── SEO/           # SEO component
│   │   │   └── StructuredData/ # JSON-LD schemas
│   │   ├── layout/             # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── Layout/
│   │   └── sections/           # Page sections
│   │       ├── Hero/
│   │       ├── LetsDo This/
│   │       └── ContactForm/
│   ├── pages/                  # Page components
│   │   ├── Home/
│   │   ├── OurProcess/
│   │   ├── About/
│   │   ├── FAQs/
│   │   └── Contact/
│   ├── styles/                 # Global styles
│   │   ├── abstracts/          # Variables, mixins, functions
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _functions.scss
│   │   ├── base/               # Base styles
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _global.scss
│   │   └── main.scss           # Main entry point
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Application entry
│   └── vite-env.d.ts           # Vite type definitions
├── .env.example                # Environment variables template
├── .gitignore
├── index.html                  # HTML entry point
├── netlify.toml                # Netlify deployment config
├── package.json
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── vercel.json                 # Vercel deployment config
├── ACCESSIBILITY.md            # Accessibility audit report
├── DEPLOYMENT.md               # Deployment guide
└── RESPONSIVE_OPTIMIZATION.md  # Responsive design report
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- Git

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone [repository-url]
   cd surepoint-lending-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:
   ```env
   VITE_SITE_URL=http://localhost:5173
   VITE_SITE_NAME=SurePoint Equity
   VITE_PHONE=888-445-3547
   VITE_EMAIL=FLIP@surepointequity.com
   VITE_ENV=development
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Development Workflow

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run TypeScript type checking
npm run type-check

# Lint code
npm run lint
```

### Development Best Practices

1. **Component Development**
   - Create components in their own directories with `.tsx` and `.module.scss` files
   - Use TypeScript interfaces for props
   - Keep components focused and reusable
   - Follow the existing naming conventions

2. **Styling**
   - Use CSS Modules for component-scoped styles
   - Import SASS abstracts using `@use` (not `@import`)
   - Follow BEM naming convention within modules
   - Utilize design system variables

3. **TypeScript**
   - Enable strict mode (already configured)
   - Define interfaces for all props and data structures
   - Avoid `any` type unless absolutely necessary
   - Use type inference where possible

4. **Git Workflow**
   - Create feature branches for new work
   - Write clear commit messages
   - Test before committing
   - Keep commits focused and atomic

---

## Component Architecture

### Common Components

#### Button Component

```typescript
import { Button } from '@/components/common/Button/Button'

<Button variant="primary" size="medium" fullWidth>
  Submit Application
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `fullWidth`: boolean (optional)
- `type`: 'button' | 'submit' | 'reset'
- `onClick`: () => void (optional)

#### Input Component

```typescript
import { Input } from '@/components/common/Input/Input'

<Input
  type="email"
  name="email"
  label="Email Address"
  placeholder="your@email.com"
  required
  register={register}
  error={errors.email?.message}
/>
```

**Props:**
- `type`: string (text, email, tel, etc.)
- `name`: string
- `label`: string
- `placeholder`: string (optional)
- `required`: boolean
- `register`: UseFormRegister function from React Hook Form
- `error`: string (optional)

#### Textarea Component

Similar to Input but for multi-line text fields.

#### SEO Component

```typescript
import { SEO } from '@/components/common/SEO/SEO'

<SEO
  title="Our Process"
  description="Learn about our streamlined loan process"
  canonical="https://surepointequity.com/our-process"
/>
```

### Layout Components

#### Header

The header component features:
- Responsive navigation (desktop menu / mobile hamburger)
- Sticky positioning with shadow on scroll
- Dynamic height calculation for mobile menu positioning
- Scrollbar compensation to prevent layout shift

#### Footer

Multi-column footer with:
- Navigation links
- Contact information
- Copyright notice

#### Layout

Wrapper component that combines Header + Page Content + Footer:

```typescript
import { Layout } from '@/components/layout/Layout/Layout'

const MyPage = () => (
  <Layout>
    <h1>Page Content</h1>
  </Layout>
)
```

### Section Components

#### Hero

Page hero sections with:
- Gradient backgrounds
- Responsive typography
- Call-to-action buttons

#### LetsDoThis

Consistent call-to-action block with:
- Contact information
- Email and phone links

#### ContactForm

Standardized contact form with:
- Full Name field
- Email and Phone fields (side-by-side on desktop)
- Loan Type field
- Project Details textarea
- Form validation
- Accessible error messages

---

## Styling Conventions

### SASS Architecture (7-1 Pattern)

```scss
styles/
├── abstracts/
│   ├── _variables.scss    # Colors, typography, spacing
│   ├── _mixins.scss       # Reusable mixins
│   └── _functions.scss    # SASS functions
├── base/
│   ├── _reset.scss        # CSS reset
│   ├── _typography.scss   # Font definitions
│   └── _global.scss       # Global styles
└── main.scss              # Main entry point
```

### Using SASS Modules

Always use `@use` instead of `@import`:

```scss
// ❌ Don't use @import
@import '../../styles/abstracts/variables';

// ✅ Use @use
@use '@/styles/abstracts/variables' as *;
@use '@/styles/abstracts/mixins' as *;
```

### Design System Variables

Key variables from `_variables.scss`:

```scss
// Colors
$color-primary-navy: #0a2463;
$color-primary-blue: #1e5eaa;
$color-accent-teal: #00a8cc;
$color-accent-orange: #ff6b35;

// Typography
$font-display: 'Syne', sans-serif;
$font-body: 'IBM Plex Sans', sans-serif;

// Spacing
$spacing-xs: 0.5rem;   // 8px
$spacing-sm: 1rem;     // 16px
$spacing-md: 1.5rem;   // 24px
$spacing-lg: 2.5rem;   // 40px
$spacing-xl: 4rem;     // 64px
$spacing-2xl: 6rem;    // 96px

// Breakpoints
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-wide: 1440px;
```

### CSS Modules

Each component has its own scoped styles:

```scss
// Button.module.scss
.button {
  padding: $spacing-sm $spacing-md;
  border-radius: 4px;

  &--primary {
    background: $color-primary-blue;
    color: white;
  }

  &--secondary {
    background: $color-accent-teal;
    color: white;
  }
}
```

Usage in component:

```typescript
import styles from './Button.module.scss'

<button className={`${styles.button} ${styles['button--primary']}`}>
  Click Me
</button>
```

### Responsive Design Approach

**Mobile-First**: Start with mobile styles, add complexity for larger screens.

```scss
.component {
  // Mobile styles (320px - 767px)
  padding: $spacing-sm;

  @media (min-width: $breakpoint-tablet) {
    // Tablet styles (768px - 1023px)
    padding: $spacing-md;
  }

  @media (min-width: $breakpoint-desktop) {
    // Desktop styles (1024px - 1439px)
    padding: $spacing-lg;
  }

  @media (min-width: $breakpoint-wide) {
    // Wide desktop styles (1440px+)
    padding: $spacing-xl;
  }
}
```

### BEM Naming Convention

Within CSS Modules, use BEM methodology:

```scss
.block {
  // Block styles

  &__element {
    // Element styles
  }

  &--modifier {
    // Modifier styles
  }
}
```

Example:
```scss
.card {
  background: white;

  &__header {
    padding: $spacing-md;
  }

  &__body {
    padding: $spacing-lg;
  }

  &--featured {
    border: 2px solid $color-accent-teal;
  }
}
```

---

## Routing

### React Router Configuration

Routes are defined in `App.tsx`:

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout/Layout'
import { Home } from '@/pages/Home/Home'
import { OurProcess } from '@/pages/OurProcess/OurProcess'
import { About } from '@/pages/About/About'
import { FAQs } from '@/pages/FAQs/FAQs'
import { Contact } from '@/pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="our-process" element={<OurProcess />} />
          <Route path="about" element={<About />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

### Navigation Links

Navigation links are defined in `Header.tsx`:

```typescript
const navigationLinks = [
  { label: 'Our Process', path: '/our-process' },
  { label: 'About', path: '/about' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact Us', path: '/contact' },
]
```

### Adding New Pages

1. Create page component in `src/pages/PageName/`
2. Create `PageName.tsx` and `PageName.module.scss`
3. Add route to `App.tsx`
4. Add navigation link to `Header.tsx` (if needed)
5. Add page to `sitemap.xml`
6. Implement SEO component with appropriate meta tags
7. Add breadcrumb schema if applicable

---

## SEO Implementation

### React Helmet Async

SEO is managed using React Helmet Async for dynamic meta tags.

#### SEO Component

Located at `src/components/common/SEO/SEO.tsx`:

```typescript
import { SEO } from '@/components/common/SEO/SEO'

<SEO
  title="Page Title"
  description="Page description for search results"
  canonical="https://surepointequity.com/page-url"
  ogType="website"
  ogImage="https://surepointequity.com/og-image.jpg"
/>
```

#### SEO Best Practices

1. **Title Tags**
   - Keep between 50-60 characters
   - Include primary keyword
   - Format: "Page Title | SurePoint Equity"

2. **Meta Descriptions**
   - Keep between 150-160 characters
   - Compelling and descriptive
   - Include call-to-action when appropriate

3. **Canonical URLs**
   - Always specify canonical URL
   - Use absolute URLs
   - Prevent duplicate content issues

4. **Open Graph Tags**
   - Include og:title, og:description, og:image, og:url
   - Image should be 1200x630px
   - Optimize for social media sharing

5. **Structured Data**
   - Use JSON-LD format
   - Implement Organization schema
   - Add FAQPage schema for FAQ page
   - Include Breadcrumb navigation

### Structured Data Components

Located in `src/components/common/StructuredData/`:

#### OrganizationSchema

```typescript
import { OrganizationSchema } from '@/components/common/StructuredData/OrganizationSchema'

<OrganizationSchema />
```

Includes:
- Business name and type (FinancialService)
- Address and contact information
- Logo and social media profiles
- Business hours

#### WebSiteSchema

```typescript
import { WebSiteSchema } from '@/components/common/StructuredData/WebSiteSchema'

<WebSiteSchema />
```

Includes:
- Site name and URL
- SearchAction for site search

#### FAQSchema

```typescript
import { FAQSchema } from '@/components/common/StructuredData/FAQSchema'

<FAQSchema />
```

Automatically includes all FAQ questions and answers.

#### BreadcrumbSchema

```typescript
import { BreadcrumbSchema } from '@/components/common/StructuredData/BreadcrumbSchema'

<BreadcrumbSchema />
```

Dynamically generates breadcrumb navigation based on current URL.

### Sitemap

Located at `public/sitemap.xml`, includes all pages with:
- URL location
- Last modification date
- Change frequency
- Priority

Update when adding new pages.

### Robots.txt

Located at `public/robots.txt`, allows all crawlers and specifies sitemap location.

---

## Accessibility

### WCAG 2.1 AA Compliance

This site is fully compliant with WCAG 2.1 AA standards. See `ACCESSIBILITY.md` for full audit report.

#### Color Contrast

All text meets minimum contrast ratios:
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum

#### Keyboard Navigation

All interactive elements are keyboard accessible:
- Tab through all interactive elements
- Enter/Space to activate buttons and links
- Escape to close modals and menus
- Arrow keys for accordion navigation

#### Screen Reader Support

- Semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- ARIA labels where needed (`aria-label`, `aria-labelledby`)
- ARIA states (`aria-expanded`, `aria-hidden`)
- ARIA live regions for dynamic content
- Proper heading hierarchy (H1 → H2 → H3)

#### Forms

- All inputs have associated labels
- Required fields marked with asterisk and `required` attribute
- Error messages announced to screen readers
- Error messages linked to inputs with `aria-describedby`
- Logical tab order

#### Focus Indicators

All interactive elements have visible focus indicators:
- 3px solid teal outline
- 2px offset from element
- Visible on all interactive elements

#### Touch Targets

All interactive elements meet minimum size:
- 44px × 44px minimum touch target size
- Adequate spacing between clickable elements

#### Motion and Animation

Respects user preferences:
```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Accessibility Testing

Run regular tests with:
- axe DevTools browser extension
- WAVE accessibility checker
- Lighthouse accessibility audit
- Keyboard-only navigation testing
- Screen reader testing (VoiceOver, NVDA, JAWS)

---

## Responsive Design

### Breakpoint Strategy

**Mobile-First Approach**: Styles cascade from mobile → tablet → desktop → wide.

```scss
$breakpoint-tablet: 768px;   // 768px - 1023px
$breakpoint-desktop: 1024px; // 1024px - 1439px
$breakpoint-wide: 1440px;    // 1440px+
```

### Responsive Mixins

Common responsive patterns:

```scss
@use '@/styles/abstracts/mixins' as *;

.component {
  @include mobile {
    // Mobile styles
  }

  @include tablet {
    // Tablet styles
  }

  @include desktop {
    // Desktop styles
  }

  @include wide {
    // Wide desktop styles
  }
}
```

### Grid Systems

Flexible grid patterns:

```scss
.grid {
  display: grid;
  gap: $spacing-md;

  // Mobile: 1 column
  grid-template-columns: 1fr;

  // Tablet: 2 columns
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  // Desktop: 3 columns
  @media (min-width: $breakpoint-desktop) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Responsive Typography

Typography scales with viewport:

```scss
.heading {
  font-size: 2rem;      // Mobile: 32px
  line-height: 1.2;

  @media (min-width: $breakpoint-tablet) {
    font-size: 2.5rem;  // Tablet: 40px
  }

  @media (min-width: $breakpoint-desktop) {
    font-size: 3rem;    // Desktop: 48px
  }
}
```

### Responsive Images

Use responsive image techniques:

```html
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="image-desktop.jpg"
  />
  <source
    media="(min-width: 768px)"
    srcSet="image-tablet.jpg"
  />
  <img
    src="image-mobile.jpg"
    alt="Description"
    loading="lazy"
  />
</picture>
```

### Testing Responsive Design

Test at key breakpoints:
- 375px (iPhone SE, small phones)
- 768px (iPad portrait, tablets)
- 1024px (iPad landscape, small laptops)
- 1440px (Desktop monitors)
- 1920px (Large desktop monitors)

Also test:
- Landscape and portrait orientations
- Browser zoom levels (100%, 200%)
- Real devices when possible

See `RESPONSIVE_OPTIMIZATION.md` for detailed responsive audit.

---

## Forms

### React Hook Form Implementation

Forms use React Hook Form for state management and validation.

#### Basic Setup

```typescript
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '@/components/common/Input/Input'
import { Textarea } from '@/components/common/Textarea/Textarea'
import { Button } from '@/components/common/Button/Button'

interface FormData {
  fullName: string
  email: string
  phone: string
  loanType: string
  projectDetails: string
}

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Handle form submission
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        name="fullName"
        label="Full Name"
        placeholder="John Doe"
        required
        register={register}
        error={errors.fullName?.message}
      />

      {/* More fields... */}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  )
}
```

#### Validation Rules

Common validation patterns:

```typescript
const {
  register,
  formState: { errors },
} = useForm<FormData>()

// Full Name - Required
<Input
  {...register('fullName', {
    required: 'Full name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters',
    },
  })}
/>

// Email - Required with pattern
<Input
  type="email"
  {...register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  })}
/>

// Phone - Required with pattern
<Input
  type="tel"
  {...register('phone', {
    required: 'Phone number is required',
    pattern: {
      value: /^[\d\s+-.]*\d[\d\s+-.]*$/,
      message: 'Invalid phone number',
    },
  })}
/>
```

### Form Structure

All contact forms follow this structure:

1. **Heading**: "Send Us a Message"
2. **Full Name**: Full-width text input
3. **Email/Phone Row**: Two inputs side-by-side on desktop
4. **Loan Type**: Full-width select dropdown
5. **Project Details**: Full-width textarea
6. **Submit Button**: "Submit Application"

### Form Accessibility

Forms include:
- Proper label associations
- Required field indicators (asterisks)
- Error messages linked with `aria-describedby`
- Error summary announced to screen readers
- Logical tab order
- Visible focus indicators

### Mock Form Submission

Current forms use mock submission (no backend):

```typescript
const onSubmit: SubmitHandler<FormData> = async (data) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('Form submitted:', data)
  alert('Thank you! Your message has been sent.')
  reset()
}
```

To connect to real backend, replace with actual API call:

```typescript
const onSubmit: SubmitHandler<FormData> = async (data) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error('Submission failed')

    alert('Thank you! Your message has been sent.')
    reset()
  } catch (error) {
    alert('Something went wrong. Please try again.')
    console.error(error)
  }
}
```

---

## Build Process

### Development Build

```bash
npm run dev
```

Starts Vite dev server with:
- Hot Module Replacement (HMR)
- Fast refresh for React
- TypeScript type checking
- SASS compilation
- Port: 5173 (default)

### Production Build

```bash
npm run build
```

Creates optimized production build:
1. TypeScript compilation
2. SASS to CSS compilation
3. Asset optimization (images, fonts)
4. Code minification
5. Code splitting
6. Hash-based file naming for cache busting
7. Source map generation

Output directory: `dist/`

### Build Configuration

Key settings in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
```

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js       # Main bundle
│   ├── index-[hash].css      # Styles
│   ├── vendor-[hash].js      # Third-party code
│   └── [other assets]
├── robots.txt
└── sitemap.xml
```

### Performance Optimization

The build process includes:
- **Tree shaking**: Removes unused code
- **Code splitting**: Separates vendor and app code
- **Minification**: Reduces file sizes
- **Compression**: Gzip/Brotli ready
- **Asset optimization**: Optimizes images and fonts
- **Cache busting**: Hash-based filenames

### Bundle Analysis

Analyze bundle size:

```bash
npm run build
npx vite-bundle-visualizer
```

---

## Environment Variables

### Configuration

Environment variables must be prefixed with `VITE_` to be exposed to the app.

### Available Variables

```env
# Site Configuration
VITE_SITE_URL=https://surepointequity.com
VITE_SITE_NAME=SurePoint Equity

# Contact Information
VITE_PHONE=888-445-3547
VITE_EMAIL=FLIP@surepointequity.com

# Environment
VITE_ENV=production

# Optional: Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Optional: Google Maps API
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here

# Optional: Form Endpoint
VITE_FORM_ENDPOINT=https://api.example.com/submit
```

### Usage in Code

```typescript
const siteUrl = import.meta.env.VITE_SITE_URL
const siteName = import.meta.env.VITE_SITE_NAME
const phone = import.meta.env.VITE_PHONE
const email = import.meta.env.VITE_EMAIL
```

### Environment Files

- `.env.local` - Local development (not committed)
- `.env.production` - Production values (not committed)
- `.env.example` - Template with all variables (committed)

### Setting Up

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update values in `.env.local` for local development

3. For deployment, add variables in hosting platform dashboard:
   - **Netlify**: Site settings → Environment variables
   - **Vercel**: Project settings → Environment Variables

### Security Notes

- Never commit `.env.local` or `.env.production`
- Only expose variables that are safe for client-side use
- Sensitive keys should be kept server-side
- Variables are embedded in build output (not secret)

---

## Testing

### Manual Testing Checklist

#### Visual Testing

- [ ] Compare pages with design mockups
- [ ] Test all breakpoints (375px, 768px, 1024px, 1440px)
- [ ] Verify hover states on interactive elements
- [ ] Check color accuracy and typography
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

#### Functional Testing

- [ ] Test all navigation links
- [ ] Verify form submission and validation
- [ ] Test mobile menu open/close
- [ ] Verify FAQ accordion expand/collapse
- [ ] Test all external links
- [ ] Verify phone and email links work

#### Accessibility Testing

- [ ] Run axe DevTools (target: 0 violations)
- [ ] Navigate entire site with keyboard only
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Verify color contrast ratios
- [ ] Test with browser zoom at 200%
- [ ] Check focus indicators are visible

#### SEO Testing

- [ ] Run Lighthouse SEO audit (target: 95+)
- [ ] Verify meta tags on each page
- [ ] Test social media preview (Facebook Debugger, Twitter Validator)
- [ ] Validate structured data (Google Rich Results Test)
- [ ] Test mobile-friendliness (Google Mobile-Friendly Test)
- [ ] Verify sitemap is accessible
- [ ] Check robots.txt is accessible

#### Performance Testing

- [ ] Run Lighthouse performance audit (target: 95+)
- [ ] Test on slow 3G connection
- [ ] Check Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Verify images are optimized and lazy loaded
- [ ] Check bundle size is reasonable

#### Responsive Testing

- [ ] Test on real devices (iPhone, iPad, Android)
- [ ] Test in Chrome DevTools device mode
- [ ] Verify layouts at all breakpoints
- [ ] Test touch interactions on mobile/tablet
- [ ] Check landscape and portrait orientations

### Lighthouse Audits

Run Lighthouse from Chrome DevTools:

1. Open Chrome DevTools (F12)
2. Navigate to "Lighthouse" tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Select device: Desktop or Mobile
5. Click "Analyze page load"

**Target Scores**: 95+ for all categories

### Automated Testing (Future Enhancement)

Consider adding:
- **Unit tests**: Jest + React Testing Library
- **E2E tests**: Playwright or Cypress
- **Visual regression**: Percy or Chromatic
- **Accessibility tests**: jest-axe

---

## Troubleshooting

### Common Issues and Solutions

#### Build Fails

**Symptom**: Build command fails with errors

**Solutions**:
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules dist
npm install
npm run build

# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint
```

#### Mobile Menu Issues

**Symptom**: Mobile menu not positioned correctly or overlay covering menu

**Solution**: The menu uses dynamic header height calculation. If issues persist:
1. Check that `--header-offset` CSS variable is being set
2. Verify z-index stacking (menu should be higher than overlay)
3. Ensure scrollbar compensation is working

#### Layout Shift When Menu Opens

**Symptom**: Content moves or reflows when mobile menu opens

**Solution**: This is prevented by scrollbar width compensation in `Header.tsx`. If issue persists:
1. Verify `body` and `header` are getting `padding-right` when menu opens
2. Check that overflow is being set to hidden
3. Ensure scrollbar width calculation is correct

#### Styling Not Updating

**Symptom**: SASS changes don't reflect in browser

**Solutions**:
```bash
# Restart dev server
npm run dev

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev

# Check SASS syntax is correct (no @import, use @use)
```

#### Images Not Loading

**Symptom**: Images show broken or don't appear

**Solutions**:
1. Verify image path is correct (relative to `public/` or imported)
2. Check image file exists in `public/assets/images/`
3. For imported images, use: `import imgSrc from '@/assets/image.jpg'`
4. For public images, use: `/assets/images/image.jpg`

#### TypeScript Errors

**Symptom**: TypeScript compilation errors

**Solutions**:
1. Check interface definitions match component props
2. Verify all required props are provided
3. Use proper type annotations
4. Run `npm run type-check` to see all errors
5. Check `tsconfig.json` settings

#### Environment Variables Not Working

**Symptom**: `import.meta.env.VITE_*` returns undefined

**Solutions**:
1. Verify variable is prefixed with `VITE_`
2. Check variable is defined in `.env.local`
3. Restart dev server after adding variables
4. For production, verify variables are set in hosting platform

#### Form Validation Not Working

**Symptom**: Form submits without validation or errors don't show

**Solutions**:
1. Verify `register` function is passed to inputs
2. Check validation rules are defined
3. Ensure error messages are displayed: `{errors.fieldName?.message}`
4. Verify form is using `handleSubmit` wrapper

#### Routing Issues (404s)

**Symptom**: Direct URLs result in 404 errors on deployed site

**Solutions**:
1. Verify SPA redirect is configured in hosting platform
2. Check `netlify.toml` or `vercel.json` has redirect rules
3. Ensure all routes are defined in `App.tsx`
4. For manual hosting, configure server to redirect all routes to `index.html`

#### Performance Issues

**Symptom**: Slow page load or poor Lighthouse scores

**Solutions**:
```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer

# Check for large dependencies
npm list --depth=0

# Optimize images
# - Use WebP format
# - Compress images
# - Use appropriate sizes

# Enable lazy loading for below-fold images
<img loading="lazy" src="..." alt="..." />

# Code split large dependencies
# Already configured in vite.config.ts
```

#### Accessibility Violations

**Symptom**: axe DevTools reports violations

**Common Fixes**:
1. Add alt text to images
2. Ensure proper heading hierarchy (H1 → H2 → H3)
3. Add aria-labels to icon buttons
4. Verify form labels are associated with inputs
5. Check color contrast ratios
6. Add keyboard support to custom interactive elements

---

## Additional Resources

### Documentation

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [SASS Documentation](https://sass-lang.com/documentation)
- [React Router Documentation](https://reactrouter.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com)

### Design System

See `surepoint_design_system.html` for complete design specifications including:
- Color palette and usage guidelines
- Typography scales and font families
- Spacing system
- Component specifications
- Breakpoint definitions
- Animation timing and easing

### Accessibility

See `ACCESSIBILITY.md` for full accessibility audit and compliance details.

### Responsive Design

See `RESPONSIVE_OPTIMIZATION.md` for detailed responsive design specifications.

### Deployment

See `DEPLOYMENT.md` for comprehensive deployment instructions.

---

## Support

For questions or issues:
1. Check this documentation first
2. Review existing code for patterns
3. Consult design system specifications
4. Check troubleshooting section

---

**Last Updated**: January 2025
**Version**: 1.0.0
