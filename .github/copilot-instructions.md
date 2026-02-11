# Portfolio Website - AI Agent Instructions

## Project Overview
This is a static portfolio website for Ruobing Chen, a Senior UX Designer at AWS. The site showcases UX case studies with a focus on clean design, subtle animations, and responsive layouts. Built with vanilla HTML/CSS/JavaScript—no frameworks, no build tools.

## Design System & Conventions

### Color Palette (Consistent Across All Files)
- **Primary Accent**: `#d4a373` (warm tan/gold) - for links, buttons, hover states, underlines
- **Text Dark**: `#2d2d2d` - headings
- **Text Medium**: `#3a3a3a` - body text, navigation
- **Text Light**: `#6a6a6a` - secondary/descriptive text  
- **Background**: `#fefcf9` - warm cream (not pure white)

When modifying colors, use Find & Replace globally to maintain consistency.

### Typography
- **Headlines**: `'Rethink Sans'` (Google Font, weights: 400, 500, 600, 700)
- **Body**: `'Geist'` with system font fallbacks (`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue'`)
- **Hero H1**: 3.5rem (56px), weight 700
- **Section H2**: 1.5rem (24px), weight 600
- **Body text**: 1.15rem (18px), weight 400, line-height 1.8

### Spacing & Layout
- **Max container width**: 1000px (defined in most sections)
- **Section padding**: `4rem 2rem` (top/bottom, left/right)
- **Hero padding**: `8rem 2rem 4rem` + `margin-top: 60px` (accounts for fixed nav)
- **Project gaps**: 6rem between project sections

### Custom Cursor
All elements use a custom SVG cursor (black circle, 16x16px) defined in universal selector in [styles.css](styles.css#L1-L5).

## Architecture & File Structure

### Page Hierarchy
- [index.html](index.html) - Homepage with hero animation + project cards
- [about.html](about.html) - About page with skills, experience timeline, resume download
- [sql-server.html](sql-server.html) - Case study page (SQL Server Modernization project)
- [code-assessment.html](code-assessment.html) - Case study page (Code Assessment project)
- [robo-consulting.html](robo-consulting.html) - Case study page (Robo Consulting project)
- [login.html](login.html) - Password-protected login (currently disabled in auth.js)

### Navigation Pattern
**Fixed Navigation**: All pages use inline-styled `<nav>` with `position: fixed` at top:
- Left: Logo/name linking to [index.html](index.html)
- Right: "About" link to [about.html](about.html)
- Hover effect: text color changes to `#d4a373`

**Case Study Navigation**: Project pages include:
- Top nav: "← Work" link back to `index.html#project-<id>`
- Side nav: Vertical navigation for sections (implemented with scroll spy in [sql-server.html](sql-server.html#L386-L422))

### Inline Styles Convention
**Critical**: This project uses extensive inline styles for one-off positioning and layout. Do NOT extract these to external CSS unless explicitly asked. Examples:
- Navigation bars (position, padding, z-index)
- Individual section layouts (grid columns, gaps, margins)
- Hover effects via `onmouseover`/`onmouseout`

When adding new elements, follow this pattern: use inline styles for unique layouts, reference [styles.css](styles.css) for shared classes.

## Key Interactions & Animations

### Hero Typing Animation ([index.html](index.html#L120-L143))
On page load, "Hi, I'm Ruobing" types character-by-character (40ms intervals):
```javascript
function typeText() {
    if (index < fullText.length) {
        typingText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeText, 40);
    } else {
        heroContent.style.opacity = '1'; // Fade in bio after typing
    }
}
```
Content below fades in only after animation completes.

### Project Card Hover ([styles.css](styles.css#L300-L350))
- Image scales to 1.05x
- Dark overlay and text fade to `opacity: 0` to reveal full image
- "View Project" button scales slightly larger
- Transition duration: 0.3s

### Scroll Animations
- **About page**: Intersection Observer fades in sections as they scroll into view ([about.html](about.html#L114-L130))
- **Project pages**: Side nav active state updates based on scroll position with scroll spy

## Critical Files

### [DOCUMENTATION.md](DOCUMENTATION.md)
**Source of truth** for design decisions, UI rationale, color meanings, and rebuild instructions. Consult this before making design changes. Contains:
- Complete design system specification
- UI/UX decision rationale (why specific patterns were chosen)
- Content guidelines for each page
- Maintenance procedures

### [styles.css](styles.css)
1070 lines of global styles. Key sections:
- Universal reset & custom cursor (lines 1-5)
- Typography & headings (lines 7-17)
- Hero section styles (lines 47-75)
- Project card styles with hover states (lines ~300-400)
- Footer styles (lines ~450-550)
- Responsive breakpoints (various)

### [auth.js](auth.js)
Currently **disabled** (all logic commented out). Previously handled password protection via `sessionStorage`. Leave commented unless explicitly asked to re-enable.

## Development Workflow

### No Build Process
This is a **static site**—no npm, no bundlers, no compilation. To run:
1. Open [index.html](index.html) directly in browser, OR
2. Use local server: `python3 -m http.server 8000` or VS Code Live Server extension

### Image Assets
- Project hero images: **16:9 aspect ratio** (required for consistent layout)
- All images use `background-image` CSS property with `background-size: cover` and `background-position: center`
- Located in root directory (e.g., `sql-server-hero.jpg`) or subdirectories (e.g., `code-assessment-assets/`)

### Adding New Projects
1. Create new HTML file following [sql-server.html](sql-server.html) structure
2. Add project card to [index.html](index.html) in `.projects` section
3. Include 16:9 hero image in root or assets folder
4. Update navigation links and anchor IDs
5. Follow existing meta structure: Timeline, Role, Scope

### Updating Colors Globally
Use Find & Replace (case-sensitive):
- `#d4a373` → new accent color
- `#fefcf9` → new background color
- Update both [styles.css](styles.css) and inline styles in HTML files

## Common Pitfalls

1. **Don't break inline styles**: Many hover effects use inline `onmouseover`/`onmouseout`—preserve these
2. **Fixed nav overlap**: Hero sections need `margin-top: 60px` to account for fixed navigation
3. **Container widths**: Maintain `max-width: 1000px` for content consistency
4. **Font loading**: Always include Google Fonts preconnect links in `<head>`
5. **Aspect ratios**: Project images must be 16:9 or layout breaks

## Testing Checklist
Before finalizing changes:
- [ ] Typing animation plays correctly on [index.html](index.html)
- [ ] All hover states transition smoothly (links, project cards, buttons)
- [ ] Fixed navigation doesn't overlap content
- [ ] Scroll spy updates active link on project pages
- [ ] Images maintain aspect ratio and don't distort
- [ ] Colors match design system (`#d4a373` accent throughout)

## External Links
- Resume PDFs in root: `Resume_Ruobing_Chen_2025.pdf`, `Resume_Ruobing_Chen_2026.pdf`
- LinkedIn: https://www.linkedin.com/in/ruobing-chen/
- Email: rchen02@risd.edu
- Demo links in project pages (e.g., Storylane interactive demos)
