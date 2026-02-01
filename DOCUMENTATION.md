# Ruobing Chen Portfolio Website - Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Site Structure](#site-structure)
3. [Design System](#design-system)
4. [UI/UX Decisions](#uiux-decisions)
5. [File Organization](#file-organization)
6. [Content Guidelines](#content-guidelines)
7. [Quick Rebuild Guide](#quick-rebuild-guide)

---

## Project Overview

**Website Purpose**: Senior UX designer portfolio showcasing design work and case studies

**Key Information**:
- Name: Ruobing Chen
- Role: Senior UX Designer at AWS
- Focus: Cloud Services, FinTech, Enterprise tools, Agentic AI services
- Location: Boston (Originally Shanghai)
- Contact: rchen02@risd.edu
- LinkedIn: https://www.linkedin.com/in/ruobing-chen/

---

## Site Structure

### Pages (4 total)

1. **index.html** - Homepage / Work
   - Hero section with typing animation
   - Navigation tabs (fixed)
   - Selected works showcase (3 projects)
   - Footer

2. **about.html** - About Page
   - Hero section with "About Me" title
   - Personal introduction section with circular headshot
   - Skills & Expertise section
   - Experience timeline
   - Resume download link

3. **sql-server.html** - SQL Server Modernization Project Case Study
   - Project hero with title and description
   - Back to work link
   - Large project image
   - Project metadata (Timeline, Role, Scope)
   - Detailed project content

4. **code-assessment.html** - Code Assessment Project Case Study
   - Same structure as sql-server.html
   - Different content

### Additional Files
- **styles.css** - Global styles and design system
- **auth.js** - Authentication logic
- **login.html** - Password protected login
- **work.html** - Alternative work page (not currently in use)

---

## Design System

### Color Palette

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| Primary Accent | #d4a373 | Links, hover states, buttons, underlines |
| Text Dark | #2d2d2d | Headings |
| Text Medium | #3a3a3a | Body text, links |
| Text Light | #6a6a6a | Secondary text |
| Text Lighter | #8a8a8a | Disabled/inactive text |
| Background | #fefcf9 | Page background (warm cream) |
| Border Subtle | rgba(61, 61, 61, 0.08) | Subtle borders |
| Overlay Dark | rgba(0, 0, 0, 0.8) | Project image overlay |

### Typography

**Font Families**:
- **Headlines**: 'Rethink Sans' (serif alternative, weights: 400, 500, 600, 700)
- **Body**: 'Geist' (system fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue')
- **Fallback**: Sans-serif

**Font Sizing**:
- Hero H1: 3.5rem (62px)
- Section H2: 1.5rem (24px)
- Project Title H3: 1.1rem (18px)
- Body text: 1.15rem (18px)
- Small text: 0.95rem (15px)
- Meta text: 0.85-0.9rem (13-14px)

**Font Weights**:
- Headings: 600-700 (bold)
- Navigation: 500 (medium)
- Body: 400 (regular)

**Line Heights**:
- Body text: 1.8
- Project descriptions: 1.6
- Meta text: 1.5

### Spacing System

**Key Measurements**:
- Container max-width: 70% on desktop
- Hero padding: 8rem top, 4rem bottom, 2rem sides
- Section padding: 4rem top/bottom, 2rem sides
- Gap between projects: 6rem
- Footer margin-top: 6rem

**Gaps/Margins**:
- Tab gap: 4rem
- Hero content gap: 0.75rem
- Project info gap: 1.5rem
- Project overlay gap: 2rem padding

### Border Radius
- Project images: 12px
- Buttons: 25px (pill-shaped)
- General elements: 8px

### Shadows
- Project images: `0 4px 12px rgba(0, 0, 0, 0.1)` (default)
- Buttons: `0 4px 12px rgba(0, 0, 0, 0.2)` (hover)

### Cursor
Custom cursor: Black circle (16x16px SVG)

---

## UI/UX Decisions

### 1. Hero Section
**Decision**: Animated typing effect on page load
- **Rationale**: Creates engaging, personal first impression
- **Implementation**: JavaScript animates text character-by-character at 40ms intervals
- **Content reveal**: Hero content (bio, location) fades in after typing completes

### 2. Fixed Navigation Tabs
**Decision**: Navigation stays at top of page
- **Rationale**: Always accessible, modern pattern, clear page context
- **Styling**: 
  - Position: fixed, z-index: 1000
  - Active tab has gold underline (#d4a373)
  - Hover state darkens text
  - Subtle bottom border on nav container

### 3. Project Card Design
**Decision**: Image-first with overlay info reveal on hover
- **Rationale**: 
  - Visual-first experience appropriate for design portfolio
  - Hover reveals project details without cluttering initial view
  - Professional, minimal aesthetic
- **Interactions**:
  - Image scales 1.05x on hover
  - Overlay and info fade to opacity: 0 on hover to show image
  - Info positioned absolutely, centered

### 4. Project Card Structure
**Components**:
- Title + Year (pipe-separated)
- Description
- "View Project" button
- All text white/light on dark overlay

### 5. Button Styling
- **Color**: Gold/tan (#d4a373)
- **Shape**: Pill-shaped (border-radius: 25px)
- **Hover**: Lighter shade (#e8b88d) + 1.05x scale
- **Padding**: 12px 28px
- **Font**: 600 weight, 0.95rem

### 6. Color Choice for Accent
**Gold/Tan (#d4a373)**:
- Warm, professional, premium feel
- Complements warm cream background
- Good contrast for accessibility
- Associated with sophistication and quality

### 7. Warm Background
**#fefcf9** (Off-white/cream):
- Softer than pure white
- Reduces eye strain
- Warm, inviting aesthetic
- Premium feel aligned with portfolio

### 8. Container Constraint
**70% max-width**:
- Readable line lengths (not too wide)
- Professional whitespace
- Focuses attention on content
- Scales well on different screens

### 9. Project Images
**Aspect Ratio**: 16:9
- **Rationale**: Standard widescreen format, looks professional
- **Sizing**: 100% width × aspect-ratio (responsive)
- **Background**: Cover + center positioning

### 10. Animations & Transitions
**Applied to**:
- Projects: slideUp (0.5s, opacity + translateY)
- Selected works heading: fadeIn (0.6s, 0.8s delay)
- Hover states: 0.3s transitions
- Cursor: Custom SVG circle

---

## File Organization

### Directory Structure
```
portfolio-website/
├── index.html              # Homepage
├── about.html              # About page
├── sql-server.html         # Project 1: SQL Server case study
├── code-assessment.html    # Project 2: Code Assessment case study
├── work.html               # Alternative work page (legacy)
├── login.html              # Password protected login
├── styles.css              # Global styles
├── auth.js                 # Authentication logic
├── DOCUMENTATION.md        # This file
├── favicon.svg             # Browser tab icon
├── aws-logo.png            # AWS logo (in hero text)
├── sql-server-hero.jpg     # Project 1 hero image
├── code-assessment-hero.jpg # Project 2 hero image
├── placeholder.jpg         # Project 3 placeholder
├── headshot.jpeg           # Profile photo (about page)
├── Resume_Ruobing_Chen_2025.pdf # Resume file
└── icons/                  # Icon folder (if needed)
```

### File Relationships

**Navigation Flow**:
- index.html → about.html (via tabs)
- index.html → sql-server.html (via project card)
- index.html → code-assessment.html (via project card)
- sql-server.html → index.html#selected-work (back link)
- code-assessment.html → index.html#selected-work (back link)
- All pages → Footer links (index.html, about.html)

---

## Content Guidelines

### Homepage (index.html)

**Hero Section**:
- Headline: "Hi, I'm Ruobing" (animated)
- Subheading text 1: "I'm a senior UX designer at [AWS logo]"
- Subheading text 2: "My work involves simplifying complex workflows across Cloud Services, FinTech, and Enterprise tools."
- Subheading text 3: "Currently pioneering the first Agentic AI services designed to accelerate server migration and app modernization."
- Location: "📍 Originally from Shanghai and now based in Boston."

**Projects Section** (3 total):
1. **SQL Server Modernization**
   - Title: "AWS Transform"
   - Year: Dec 2025
   - Image: sql-server-hero.jpg
   - Link: sql-server.html
   - Description: "AI-powered workflow for modernizing SQL Server databases and .NET applications to AWS, combining chat-driven guidance with human-in-the-loop controls for faster, more reliable cloud migration."

2. **Code Assessment**
   - Title: "AWS Transform"
   - Year: Dec 2025
   - Image: code-assessment-hero.jpg
   - Link: code-assessment.html
   - Description: "AI-powered workflow for modernizing SQL Server databases and .NET applications to AWS, combining chat-driven guidance with human-in-the-loop controls for faster, more reliable cloud migration."

3. **Placeholder Project**
   - Title: "AWS Transform"
   - Year: Dec 2025
   - Image: placeholder.jpg
   - Link: sql-server.html (currently)
   - Description: "AI-powered workflow for modernizing SQL Server databases and .NET applications to AWS, combining chat-driven guidance with human-in-the-loop controls for faster, more reliable cloud migration."

### About Page (about.html)

**Sections**:
1. Personal intro + circular headshot (headshot.jpeg)
2. Skills & Expertise (bulleted list)
3. Experience timeline (grid layout)

**Skills Listed**:
- User Research & User Testing
- Wireframing & Prototyping
- Design Systems & Component Libraries
- Interaction Design & Animations
- Information Architecture
- Usability Testing & Analytics
- Figma, Adobe XD, Sketch
- HTML, CSS, Basic JavaScript

**Experience**:
- AWS — Senior UX Designer, 2022–current
- Citizens Bank — UX Designer, 2021–2022
- Infosys — Senior UX Designer, 2018–2021
- Kohler — Industrial Designer, 2016–2018

### Project Pages (sql-server.html, code-assessment.html)

**Structure**:
- Back to work link (anchors to #selected-work on index.html)
- Hero image (16:9 aspect ratio)
- Project metadata (3 columns: Timeline, Role, Scope)
- Project content sections with headings and paragraphs

---

## Quick Rebuild Guide

### If You Need to Recreate the Site:

#### 1. Basic Setup
```bash
# Create directory
mkdir portfolio-website
cd portfolio-website

# Create essential files
touch index.html about.html sql-server.html code-assessment.html styles.css auth.js
```

#### 2. Import Fonts (in HTML head)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;600;700&family=Geist:wght@400;500;600&display=swap" rel="stylesheet">
```

#### 3. Color Palette to Copy-Paste
```
Primary Accent: #d4a373
Text Dark: #2d2d2d
Text Medium: #3a3a3a
Text Light: #6a6a6a
Background: #fefcf9
```

#### 4. Key CSS Classes to Remember
- `.hero` - Main intro section
- `.tabs` - Fixed navigation bar
- `.projects` - Project grid container
- `.project` - Individual project card
- `.project-image` - Image container with overlay
- `.project-info` - Text overlay on projects
- `footer` - Footer styling

#### 5. JavaScript Functions
- `typeText()` - Character-by-character text animation (40ms per char)
- Triggered on page load with 200ms delay

#### 6. Navigation Structure
- Fixed tabs at top (z-index: 1000)
- Active tab has gold underline
- All pages linked in footer

#### 7. Image Requirements
- Hero images: 16:9 aspect ratio
- All project images should be same aspect ratio
- Headshot: Circular crop recommended

#### 8. Important Classes for Modifying
- Change `.tabs a.active` color to modify active tab underline
- Change `.view-project-btn` background color for button color
- Change `background: #fefcf9` in `body` for page background
- Change `#d4a373` (primary accent) throughout for theme color

---

## Recent Changes (2025-01-31)

1. **Consolidated pages**:
   - Deleted duplicate `home.html`
   - All references updated to use `index.html` as homepage

2. **Renamed project files**:
   - `project1.html` → `sql-server.html`
   - `project1-alt.html` → `code-assessment.html`
   - All links updated accordingly

3. **Project image assignments**:
   - Project 1 (SQL Server): sql-server-hero.jpg
   - Project 2 (Code Assessment): code-assessment-hero.jpg
   - Project 3 (Placeholder): placeholder.jpg

---

## Maintenance Notes

### To Update Project Information:
1. Edit project card in `index.html` (title, year, description, link)
2. Create/update project HTML file (sql-server.html or code-assessment.html)
3. Add hero image to project directory
4. Update links if page names change

### To Update Colors Globally:
Use Find & Replace in VS Code:
- Find: `#d4a373` → Replace for accent color change
- Find: `#3a3a3a` → Replace for text color change
- Find: `#fefcf9` → Replace for background color change

### To Add New Projects:
1. Create new HTML file (e.g., `project3.html`)
2. Add project card to `index.html` projects section
3. Link to new file in href attribute
4. Add hero image file
5. Follow existing project page structure

### Browser Compatibility:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS Grid, Flexbox
- Custom cursor may not work on all devices

---

## Performance Considerations

- Typing animation: 40ms interval keeps it snappy
- CSS animations: 0.3-0.8s for smooth transitions
- Images: Recommend optimizing JPGs (sql-server-hero, code-assessment-hero)
- Font loading: Google Fonts linked externally (slight performance hit, good UX)

---

## Testing Checklist Before Launch

- [ ] All links working (internal and external)
- [ ] Images loading correctly
- [ ] Typing animation plays on page load
- [ ] Hover states working on projects
- [ ] Navigation tabs active state correct
- [ ] Footer links functional
- [ ] Mobile responsive (70% width constraint)
- [ ] Resume PDF downloads properly
- [ ] Email link (rchen02@risd.edu) opens email client
- [ ] LinkedIn link opens in new tab
- [ ] Custom cursor displays

---

Last updated: 2025-01-31
