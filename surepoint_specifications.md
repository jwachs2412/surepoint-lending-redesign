# SurePoint Equity - Design Specifications

## Project Overview
Modern, accessible redesign for SurePoint Equity's real estate investment lending website.

---

## Brand Identity

### Color Palette

**Primary Colors**
- Primary Navy: `#0A2463` - Main brand color, headers, navigation
- Primary Blue: `#1E5EAA` - Gradients, hover states
- Accent Teal: `#00A8CC` - Focus states, highlights, secondary CTAs
- Accent Orange: `#FF6B35` - Primary CTAs, important highlights

**Neutral Colors**
- White: `#FFFFFF`
- Neutral 200: `#F7F9FC` - Light backgrounds
- Neutral 300: `#E8EDF5` - Borders, dividers
- Neutral 400: `#C5D0E3` - Inactive states
- Neutral 700: `#3D4C63` - Body text
- Neutral 900: `#1A2332` - Dark backgrounds, footer

**Semantic Colors**
- Success Green: `#10B981`
- Warning Amber: `#F59E0B`

### Typography

**Display Font: Syne**
- Weights: 400, 600, 700, 800
- Usage: Headlines, hero text, navigation, buttons
- Source: Google Fonts
- Fallback: system-ui, sans-serif

**Body Font: IBM Plex Sans**
- Weights: 300, 400, 500, 600
- Usage: Body text, form inputs, descriptions
- Source: Google Fonts
- Fallback: system-ui, sans-serif

**Type Scale**
- Display: 56px / 3.5rem (mobile: 32px / 2rem)
- H1: 40px / 2.5rem (mobile: 28px / 1.75rem)
- H2: 32px / 2rem (mobile: 24px / 1.5rem)
- H3: 24px / 1.5rem (mobile: 20px / 1.25rem)
- Body Large: 18px / 1.125rem
- Body: 16px / 1rem
- Small: 14px / 0.875rem

**Line Heights**
- Display/Headlines: 1.1 - 1.2
- Body Text: 1.6 - 1.8

---

## Spacing System

**Base Unit: 8px**
- XS: 8px / 0.5rem
- SM: 16px / 1rem
- MD: 24px / 1.5rem
- LG: 40px / 2.5rem
- XL: 64px / 4rem
- 2XL: 96px / 6rem

---

## Border Radius

- Small: 8px (buttons, inputs)
- Medium: 12px (cards, form fields)
- Large: 20px (feature cards, sections)
- XLarge: 32px (device mockups, special containers)

---

## Breakpoints

```css
/* Mobile First Approach */
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+

/* Media Queries */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

---

## Component Specifications

### Buttons

**Primary Button (CTA)**
- Background: Linear gradient `#FF6B35` to `#FF8556`
- Text: White, Syne Bold, 16px
- Padding: 16px 32px (mobile: 12px 24px)
- Border Radius: 20px
- Shadow: `0 4px 20px rgba(255, 107, 53, 0.3)`
- Hover: Transform Y -2px, Shadow `0 6px 28px rgba(255, 107, 53, 0.4)`
- Minimum Touch Target: 44px x 44px

**Secondary Button**
- Background: `#0A2463`
- Text: White, Syne Bold, 16px
- Padding: 16px 32px
- Border Radius: 20px
- Hover: Background `#1E5EAA`, Transform Y -2px

**Outline Button**
- Background: Transparent
- Border: 2px solid `#0A2463`
- Text: `#0A2463`, Syne Bold, 16px
- Padding: 14px 30px (accounts for border)
- Hover: Background `#0A2463`, Text White

### Navigation

**Desktop Navigation**
- Height: 80px
- Background: White
- Border Bottom: 1px solid `#E8EDF5`
- Logo: Syne Bold, 28px
- Nav Links: Syne Semibold, 16px, Color `#3D4C63`
- Nav Link Hover: Color `#0A2463`, Background `#F7F9FC`
- Sticky positioning at top

**Mobile Navigation**
- Height: 72px
- Hamburger menu (optional - can use simplified nav)
- Logo: Syne Bold, 24px
- CTA Button prominently displayed

### Feature Cards

**Card Container**
- Background: White
- Padding: 40px (mobile: 32px)
- Border Radius: 20px
- Border: 1px solid `#E8EDF5`
- Shadow: `0 8px 32px rgba(10, 36, 99, 0.08)`
- Hover: Transform Y -8px, Shadow `0 16px 48px rgba(10, 36, 99, 0.12)`

**Card Icon**
- Size: 64px x 64px
- Background: Linear gradient `#00A8CC` to `#1E5EAA`
- Border Radius: 12px
- Centered emoji/icon, 32px

**Card Title**
- Font: Syne Bold, 24px
- Color: `#0A2463`
- Margin Bottom: 16px

**Card Description**
- Font: IBM Plex Sans, 16px
- Color: `#3D4C63`
- Line Height: 1.6

### Form Elements

**Input Fields**
- Width: 100%
- Height: 56px (minimum)
- Padding: 16px
- Border: 2px solid `#E8EDF5`
- Border Radius: 12px
- Background: `#F7F9FC`
- Font: IBM Plex Sans, 16px
- Focus: Border `#00A8CC`, Background White, Box Shadow `0 0 0 4px rgba(0, 168, 204, 0.1)`

**Labels**
- Font: Syne Semibold, 15px
- Color: `#0A2463`
- Margin Bottom: 8px
- Required indicator: * in `#FF6B35`

**Textarea**
- Same styling as input
- Min Height: 120px
- Resize: Vertical only

**Select Dropdown**
- Same styling as input
- Include down arrow icon

**Help Text**
- Font: IBM Plex Sans, 14px
- Color: `#3D4C63`
- Margin Top: 8px

### Hero Section

**Desktop Hero**
- Background: Linear gradient 135deg, `#0A2463` to `#1E5EAA`
- Padding: 96px 24px
- Text Align: Center
- Overlay: Radial gradients for depth

**Mobile Hero**
- Padding: 64px 24px
- Maintains gradient and overlay

**Hero Eyebrow**
- Font: Syne Semibold, 14px (mobile: 12px)
- Text Transform: Uppercase
- Letter Spacing: 2px
- Color: `#00A8CC`

**Hero Title**
- Font: Syne Extrabold, 56px (mobile: 32px)
- Color: White
- Line Height: 1.1
- Max Width: 1000px

**Hero Subtitle**
- Font: IBM Plex Sans, 20px (mobile: 16px)
- Color: rgba(255, 255, 255, 0.9)
- Line Height: 1.6
- Max Width: 700px

---

## Accessibility Requirements (WCAG 2.1 AA)

### Color Contrast
- Normal Text: Minimum 4.5:1 contrast ratio
- Large Text (18px+): Minimum 3:1 contrast ratio
- UI Components: Minimum 3:1 contrast ratio
- All color combinations tested and compliant

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus indicators: 3px solid `#00A8CC` with 2px offset
- Logical tab order following visual layout

### Forms
- All inputs have associated labels
- Required fields marked with aria-required="true"
- Error states clearly indicated
- Help text linked with aria-describedby

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Landmark regions (<header>, <nav>, <main>, <footer>)
- Lists for navigation and grouped content
- Button vs. link distinction maintained

### Touch Targets
- Minimum size: 44px x 44px
- Adequate spacing between targets: 8px minimum

### Motion & Animation
- Respects prefers-reduced-motion
- Transitions for enhancement, not required functionality
- Animation duration: 0.3s standard

### Screen Readers
- Alt text for all images
- ARIA labels where needed
- Skip navigation link (implementation ready)
- Descriptive link text (avoid "click here")

---

## Image Assets Required

### Logo
- SVG format preferred
- Horizontal lockup: Full color, white version
- Icon only: For mobile/favicon
- Maintain "SurePoint" brand with orange "Point" accent

### Hero Images
- Desktop: 1920x1080px minimum
- Mobile: 750x1334px minimum
- Professional real estate/construction imagery
- Format: WebP with JPEG fallback

### Feature Icons
- Can use emoji (as demonstrated) or custom SVG icons
- Size: 64x64px
- Style: Line icons or solid fills matching brand

### Background Textures (Optional)
- Subtle noise/grain overlay
- Geometric patterns for sections
- Format: PNG with transparency

---

## Animation & Interactions

### Hover States
- Buttons: Transform Y -2px, enhanced shadow
- Cards: Transform Y -8px, enhanced shadow
- Links: Color change, underline appear

### Page Load
- Hero content: Fade in + slide up
- Cards: Staggered fade in (0.1s delay between)
- Images: Lazy load with fade in

### Transitions
- Standard duration: 0.3s
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1)

---

## Grid System

### Desktop (1440px container)
- 12 column grid
- Column width: 80px
- Gutter: 32px
- Margin: 120px

### Tablet (768px - 1023px)
- 8 column grid
- Gutter: 24px
- Margin: 48px

### Mobile (320px - 767px)
- 4 column grid
- Gutter: 16px
- Margin: 24px

---

## Performance Considerations

### Images
- Use WebP format with fallbacks
- Lazy load below-the-fold images
- Responsive images with srcset
- Maximum file size: 200KB per image

### Fonts
- Preload critical fonts
- Use font-display: swap
- Subset fonts to used characters

### CSS
- Critical CSS inlined
- Non-critical CSS deferred
- Minified in production

### JavaScript
- Defer non-critical scripts
- Minified and bundled
- Progressive enhancement approach

---

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

---

## File Naming Conventions

### Images
- Format: `component-description-variant.ext`
- Example: `hero-background-desktop.webp`
- Lowercase, hyphens for spaces

### CSS
- BEM methodology for classes
- Example: `.feature-card__icon--primary`

### Components
- PascalCase for React components
- Example: `FeatureCard.jsx`

---

## Export Guidelines for Zeplin

### Artboards
1. Mobile - Home (375px width)
2. Tablet - Home (768px width)
3. Desktop - Home (1440px width)
4. Mobile - Contact Form
5. Desktop - Contact Form
6. Component Library

### Assets
- Export all icons as SVG
- Export images at 2x for retina
- Include color palette swatches
- Include typography specimens
- Export button states (normal, hover, active, disabled)
- Export form states (empty, filled, focused, error)

### Annotations
- Include spacing measurements
- Note color values and typography
- Mark interactive elements
- Specify animation details
- Include accessibility notes

---

## Notes for Developers

1. **Mobile-First**: Start with mobile styles, use min-width media queries to enhance for larger screens
2. **CSS Custom Properties**: Use CSS variables for all colors, spacing, and typography
3. **Semantic HTML**: Use proper HTML5 elements for better accessibility and SEO
4. **Performance**: Lazy load images, defer non-critical CSS/JS
5. **Testing**: Test with screen readers, keyboard only, and various devices
6. **Forms**: Implement proper validation with clear error messages
7. **Analytics**: Add event tracking to CTAs and form submissions

---

## Future Enhancements

- Dark mode option
- Multi-language support
- Advanced calculator tools
- Customer portal integration
- Live chat widget
- Blog/resources section
- Testimonials carousel
- Interactive loan calculator

---

## Brand Voice & Tone

**Professional yet Approachable**
- Use "you" and "we" language
- Active voice over passive
- Industry expertise without jargon
- Confident but not arrogant
- Solution-focused messaging

**Key Messages**
- Speed and efficiency
- Common sense approach
- Partnership mindset
- Investor-focused
- Proven track record

---

End of Specifications Document
