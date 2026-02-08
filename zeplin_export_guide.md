# Zeplin Project Setup Guide
## SurePoint Equity Website Redesign

---

## Project Structure

### Recommended Zeplin Organization

```
SurePoint Equity Redesign/
├── 📱 Mobile Screens (375px)
│   ├── 01 - Home - Mobile
│   ├── 02 - Our Process - Mobile
│   ├── 03 - About - Mobile
│   ├── 04 - FAQs - Mobile
│   └── 05 - Contact - Mobile
│
├── 💻 Desktop Screens (1440px)
│   ├── 01 - Home - Desktop
│   ├── 02 - Our Process - Desktop
│   ├── 03 - About - Desktop
│   ├── 04 - FAQs - Desktop
│   └── 05 - Contact - Desktop
│
├── 📊 Tablet Screens (768px) [Optional]
│   └── Key screens at tablet breakpoint
│
└── 🎨 Components & Styleguide
    ├── Design System Overview
    ├── Color Palette
    ├── Typography
    ├── Buttons & CTAs
    ├── Form Elements
    ├── Cards & Containers
    ├── Navigation
    ├── Footer
    └── Icons & Imagery
```

---

## Screen Specifications

### Mobile Artboards
- **Width**: 375px (iPhone standard)
- **Height**: Variable (scroll page)
- **Density**: 2x (@2x for Retina)

**Screens to Create:**
1. Home - Hero + Features + CTA
2. Our Process - Step-by-step flow
3. About - Team & company info
4. FAQs - Accordion layout
5. Contact - Form + info

### Desktop Artboards
- **Width**: 1440px (standard desktop)
- **Height**: Variable (scroll page)
- **Density**: 2x

**Screens to Create:**
1. Home - Full homepage layout
2. Our Process - Detailed process view
3. About - Team grid + story
4. FAQs - Two-column layout
5. Contact - Side-by-side form + info

### Tablet Artboards (Optional)
- **Width**: 768px (iPad portrait)
- Create only key screens with unique layouts

---

## Assets to Export

### 1. Logo Assets
Export in multiple formats and variations:

```
Exports/
├── logo/
│   ├── surepoint-logo-full-color.svg
│   ├── surepoint-logo-full-color@2x.png
│   ├── surepoint-logo-white.svg
│   ├── surepoint-logo-white@2x.png
│   ├── surepoint-icon-only.svg
│   └── surepoint-favicon.ico (16x16, 32x32, 48x48)
```

**Logo Specifications:**
- Full logo: Minimum width 180px
- Icon only: 64x64px square
- Clear space: Minimum 20px around logo
- Colors: Primary Navy (#0A2463) with Orange accent (#FF6B35)

### 2. Icons
Export all UI icons as SVG:

```
Exports/
├── icons/
│   ├── icon-menu.svg (hamburger menu)
│   ├── icon-close.svg (close/X)
│   ├── icon-phone.svg
│   ├── icon-email.svg
│   ├── icon-location.svg
│   ├── icon-arrow-right.svg
│   ├── icon-arrow-down.svg
│   ├── icon-checkmark.svg
│   ├── icon-money.svg (feature icon)
│   ├── icon-speed.svg (feature icon)
│   ├── icon-handshake.svg (feature icon)
│   └── [social media icons as needed]
```

**Icon Specifications:**
- Format: SVG (scalable)
- Viewbox: 24x24 or 32x32
- Stroke width: 2px
- Fill: None (use currentColor for flexibility)

### 3. Images
Export hero and section images:

```
Exports/
├── images/
│   ├── hero-background-desktop.webp
│   ├── hero-background-desktop@2x.jpg (fallback)
│   ├── hero-background-mobile.webp
│   ├── hero-background-mobile@2x.jpg (fallback)
│   ├── feature-section-bg.webp
│   ├── about-team-photo.webp
│   └── [additional content images]
```

**Image Specifications:**
- Primary format: WebP (90% quality)
- Fallback format: JPEG (85% quality)
- Desktop hero: 1920x1080px minimum
- Mobile hero: 750x1334px minimum
- Export @2x for retina displays

### 4. Component States

Export all interactive states for:

**Buttons:**
- Normal state
- Hover state
- Active/Pressed state
- Disabled state
- Focus state (keyboard navigation)

**Form Elements:**
- Empty state
- Placeholder state
- Filled state
- Focus state
- Error state
- Success state
- Disabled state

**Cards:**
- Default state
- Hover state
- Active/Selected state

---

## Color Swatches for Zeplin

Create color swatches with exact values:

### Primary Colors
- **Primary Navy**: #0A2463 (RGB: 10, 36, 99)
- **Primary Blue**: #1E5EAA (RGB: 30, 94, 170)
- **Accent Teal**: #00A8CC (RGB: 0, 168, 204)
- **Accent Orange**: #FF6B35 (RGB: 255, 107, 53)

### Neutral Colors
- **White**: #FFFFFF
- **Neutral 200**: #F7F9FC
- **Neutral 300**: #E8EDF5
- **Neutral 400**: #C5D0E3
- **Neutral 700**: #3D4C63
- **Neutral 900**: #1A2332

### Semantic Colors
- **Success**: #10B981
- **Warning**: #F59E0B
- **Error**: #EF4444

---

## Typography Styles for Zeplin

### Text Styles to Define

1. **Display / Hero Title**
   - Font: Syne ExtraBold
   - Size: 56px / 3.5rem (Desktop), 32px / 2rem (Mobile)
   - Line Height: 1.1
   - Color: Primary Navy or White (on dark)

2. **H1 - Main Heading**
   - Font: Syne Bold
   - Size: 40px / 2.5rem (Desktop), 28px / 1.75rem (Mobile)
   - Line Height: 1.2
   - Color: Primary Navy

3. **H2 - Section Heading**
   - Font: Syne Bold
   - Size: 32px / 2rem (Desktop), 24px / 1.5rem (Mobile)
   - Line Height: 1.3
   - Color: Primary Navy

4. **H3 - Card Title**
   - Font: Syne Bold
   - Size: 24px / 1.5rem
   - Line Height: 1.4
   - Color: Primary Navy

5. **Body Large**
   - Font: IBM Plex Sans Regular
   - Size: 18px / 1.125rem
   - Line Height: 1.7
   - Color: Neutral 700

6. **Body Regular**
   - Font: IBM Plex Sans Regular
   - Size: 16px / 1rem
   - Line Height: 1.6
   - Color: Neutral 700

7. **Small / Helper Text**
   - Font: IBM Plex Sans Regular
   - Size: 14px / 0.875rem
   - Line Height: 1.5
   - Color: Neutral 700

8. **Button Text**
   - Font: Syne Bold
   - Size: 16px / 1rem
   - Line Height: 1.2
   - Color: White or Primary Navy

9. **Label / Form Label**
   - Font: Syne SemiBold
   - Size: 15px / 0.9375rem
   - Line Height: 1.4
   - Color: Primary Navy

---

## Component Specifications for Annotations

### Buttons

**Primary Button (CTA)**
```
Padding: 16px 32px
Border Radius: 20px
Background: Linear Gradient 135deg (#FF6B35 → #FF8556)
Text: Syne Bold 16px, White
Shadow: 0 4px 20px rgba(255,107,53,0.3)
Min Height: 44px (touch target)
Hover: Transform Y -2px, Shadow 0 6px 28px rgba(255,107,53,0.4)
Transition: 300ms ease
```

**Secondary Button**
```
Padding: 16px 32px
Border Radius: 20px
Background: #0A2463
Text: Syne Bold 16px, White
Shadow: 0 4px 20px rgba(10,36,99,0.2)
Min Height: 44px
Hover: Background #1E5EAA, Transform Y -2px
Transition: 300ms ease
```

**Outline Button**
```
Padding: 14px 30px (accounts for 2px border)
Border: 2px solid #0A2463
Border Radius: 20px
Background: Transparent
Text: Syne Bold 16px, #0A2463
Min Height: 44px
Hover: Background #0A2463, Text White
Transition: 300ms ease
```

### Form Elements

**Input Field**
```
Width: 100%
Height: 56px
Padding: 16px
Border: 2px solid #E8EDF5
Border Radius: 12px
Background: #F7F9FC
Font: IBM Plex Sans 16px
Focus: Border #00A8CC, Background #FFFFFF, Box Shadow 0 0 0 4px rgba(0,168,204,0.1)
Transition: 300ms ease
```

**Textarea**
```
Width: 100%
Min Height: 120px
Padding: 16px
Border: 2px solid #E8EDF5
Border Radius: 12px
Background: #F7F9FC
Font: IBM Plex Sans 16px
Resize: Vertical
Same focus states as input
```

**Label**
```
Font: Syne SemiBold 15px
Color: #0A2463
Margin Bottom: 8px
Required indicator (*): Orange #FF6B35
```

### Feature Cards

**Card Container**
```
Padding: 40px (Desktop), 32px (Mobile)
Border: 1px solid #E8EDF5
Border Radius: 20px
Background: #FFFFFF
Shadow: 0 8px 32px rgba(10,36,99,0.08)
Hover: Transform Y -8px, Shadow 0 16px 48px rgba(10,36,99,0.12)
Transition: 300ms ease
```

**Card Icon**
```
Size: 64px × 64px
Border Radius: 12px
Background: Linear Gradient 135deg (#00A8CC → #1E5EAA)
Icon Size: 32px (emoji or SVG)
Margin Bottom: 24px
```

---

## Spacing Annotations

Mark these measurements clearly in Zeplin:

### Section Padding
- **Desktop**: 96px top/bottom, 24px sides
- **Mobile**: 64px top/bottom, 24px sides

### Component Spacing
- **Card Grid Gap**: 40px (Desktop), 24px (Mobile)
- **Button Group Gap**: 16px
- **Form Field Gap**: 24px

### Typography Spacing
- **Heading to Body**: 16px
- **Body Paragraphs**: 24px
- **Section Title to Content**: 40px

---

## Responsive Breakpoints to Note

Add breakpoint markers in Zeplin:

```
Mobile:   320px - 767px
Tablet:   768px - 1023px
Desktop:  1024px - 1439px
Wide:     1440px+
```

### Layout Changes Between Breakpoints

**Mobile → Desktop:**
- Navigation: Hamburger → Full menu
- Cards: 1 column → 3 columns
- Contact: Stacked → Side-by-side
- Hero: Vertical CTAs → Horizontal CTAs
- Stats: 2 columns → 4 columns

---

## Accessibility Annotations

Mark these in Zeplin comments:

### Color Contrast
- All text combinations tested for WCAG AA
- Minimum 4.5:1 for normal text
- Minimum 3:1 for large text (18px+)

### Touch Targets
- All interactive elements: Minimum 44px × 44px
- Spacing between targets: Minimum 8px

### Focus States
- Visible outline: 3px solid #00A8CC
- Outline offset: 2px
- Applied to all interactive elements

### Form Requirements
- All inputs have associated labels
- Required fields marked with aria-required
- Error states clearly indicated
- Help text linked with aria-describedby

---

## Developer Handoff Checklist

### Assets Delivered
- [ ] All screens exported at 1x and 2x
- [ ] Logo in SVG, PNG, and favicon formats
- [ ] All icons as SVG
- [ ] Hero images in WebP + JPEG fallback
- [ ] Color palette documented
- [ ] Typography styles defined
- [ ] Component states exported

### Documentation Provided
- [ ] Design specifications document
- [ ] CSS variables file
- [ ] Spacing system defined
- [ ] Responsive breakpoints noted
- [ ] Accessibility requirements documented
- [ ] Animation specifications included

### Zeplin Setup
- [ ] All artboards uploaded
- [ ] Screens organized by device
- [ ] Color swatches created
- [ ] Text styles defined
- [ ] Components annotated
- [ ] Spacing measurements added
- [ ] Responsive notes included

---

## Zeplin Project Settings

### Project Name
`SurePoint Equity - Website Redesign 2025`

### Project Type
Web Project

### Density
2x (Retina)

### Styleguide Sections
1. Colors
2. Typography
3. Text Styles
4. Spacing
5. Shadows
6. Components

### Team Permissions
- Designers: Full access
- Developers: View + Comment
- Stakeholders: View only

---

## Export Quality Settings

### For Zeplin Upload
- **Artboards**: PNG at 2x
- **Assets**: SVG when possible, PNG at 2x for raster
- **Quality**: 100% (Zeplin will optimize)

### For Final Assets Folder
- **SVG**: Optimize with SVGO
- **PNG**: Compress with TinyPNG/ImageOptim
- **WebP**: 90% quality
- **JPEG**: 85% quality

---

## Notes for Developers

When implementing from Zeplin:

1. **Use CSS Variables**: All colors and spacing in variables file
2. **Mobile First**: Write mobile CSS first, enhance for larger screens
3. **Semantic HTML**: Use proper HTML5 elements
4. **Accessibility**: Implement all ARIA attributes and focus states
5. **Performance**: Lazy load images, defer non-critical CSS
6. **Testing**: Test with screen readers and keyboard navigation

---

## Contact & Support

For questions about the design system:
- Review the main design system file
- Check the specifications document
- Reference the CSS variables file
- Contact design team for clarifications

---

End of Zeplin Export Guide
