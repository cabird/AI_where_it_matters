# Interactive Research Dashboard - Technical Specification

## Project Overview

**Project Name:** Developer AI Preferences - Research Dashboard

**Purpose:** An interactive web-based visualization dashboard that presents qualitative research findings about developer preferences for AI support across software engineering tasks. The system displays 20 software engineering tasks plotted on a scatter chart, allowing users to explore detailed qualitative reports for each task category.

**Target Audience:** Researchers, product designers, developers, and stakeholders interested in understanding where and how developers want AI assistance in their daily work.

---

## System Architecture

### Application Type
- **Type:** Single-page application (SPA)
- **Framework:** React 18 (vanilla, no build tools)
- **Rendering:** Client-side rendering with CDN-delivered libraries
- **Hosting:** Static site (compatible with GitHub Pages, Netlify, Vercel, or any static hosting service)

### Technology Stack

#### Core Libraries
- **React 18** - UI framework (loaded via unpkg CDN)
- **ReactDOM 18** - React rendering (loaded via unpkg CDN)
- **Babel Standalone** - JSX transpilation in-browser
- **Recharts 2.5.0** - Data visualization library for scatter plots
- **PropTypes** - Runtime type checking for React components
- **markdown-it 13** - Markdown parsing engine
- **markdown-it-anchor 8** - Anchor plugin for table of contents generation

#### Development
- No build process required
- No package manager (npm/yarn) required
- Simple HTTP server for local testing

---

## Application Structure

### File Organization

```
/
├── index.html                    # Main HTML entry point
├── chartData.js                  # Data source with z-scores and metadata
├── paper.pdf                     # Research paper (external link)
├── components/                   # React component modules
│   ├── App.jsx                   # Root application component
│   ├── Modal.jsx                 # Reusable modal dialog
│   ├── VisualizationPage.jsx    # Landing page with scatter plot
│   ├── ScatterPlot.jsx          # Interactive scatter plot visualization
│   ├── WelcomePage.jsx          # About/welcome content
│   ├── ReportViewer.jsx         # Markdown report renderer (unused in current version)
│   ├── Sidebar.jsx              # Navigation sidebar (unused in current version)
│   └── TableOfContents.jsx      # Auto-generated TOC from markdown headings
├── styles/
│   └── main.css                 # Complete application styling
└── manually_coded_reports/      # Markdown reports for each task
    └── report-data_*.md         # 20 qualitative analysis reports
```

---

## Component Architecture

### Component Hierarchy

```
App (root)
├── VisualizationPage
│   └── ScatterPlot
└── Modal (x2 instances)
    ├── WelcomePage (About modal)
    └── Report Content (Report modal)
        └── TableOfContents (rendered within markdown content)
```

### Component Specifications

#### 1. App.jsx
**Purpose:** Root application controller managing global state and modal orchestration

**State Management:**
- `config` - Configuration object (loaded from config.json, currently unused)
- `loading` - Initial loading state
- `error` - Error message state
- `reportModalOpen` - Boolean for report modal visibility
- `aboutModalOpen` - Boolean for about modal visibility
- `selectedReport` - Currently selected task data object
- `reportContent` - Rendered HTML content for selected report
- `reportLoading` - Loading state for report fetch

**Key Functions:**
- `handleDataPointClick(taskData)` - Opens report modal and loads markdown report
- `handleAboutClick()` - Opens about modal
- `handleCloseReportModal()` - Closes report modal and resets state
- `handleCloseAboutModal()` - Closes about modal

**Data Flow:**
1. Attempts to load `config.json` on mount (graceful failure if missing)
2. Renders VisualizationPage with click handlers
3. Passes click events to modal handlers
4. Fetches markdown reports from `taskData.manualReportPath`
5. Parses markdown to HTML using markdown-it
6. Renders HTML in modal with dangerouslySetInnerHTML

**Dependencies:**
- VisualizationPage
- Modal (2 instances)
- WelcomePage
- markdown-it with markdown-it-anchor plugin

---

#### 2. VisualizationPage.jsx
**Purpose:** Main landing page displaying study information and scatter plot

**Props:**
- `onDataPointClick(taskData)` - Callback when scatter plot point is clicked
- `onAboutClick()` - Callback when About button is clicked

**Visual Elements:**
1. **Header Section:**
   - Robot icon in gradient background box
   - Title: "AI Where It Matters"
   - Subtitle: "Where, Why, and How Developers Want AI Support in Daily Work"
   - Author list: "Rudrajit Choudhuri, Carmen Badea, Christian Bird, Jenna L. Butler, Robert DeLine, Brian Houck"

2. **Study Info Panel:**
   - Participants: 860 developers
   - Organization: Microsoft
   - Tasks Analyzed: 20 SE task categories
   - Study Date: July 2025

3. **Action Buttons:**
   - "About This Dashboard" button (opens about modal)
   - "Read the Full Paper" link (opens paper.pdf)

4. **Chart Instructions:**
   - Explanatory text about the visualization
   - Guides users on how to interact with the scatter plot

5. **Visualization Container:**
   - Embedded ScatterPlot component

**Styling:**
- White rounded card on gradient purple background
- Centered layout with max-width 1000px
- Professional academic presentation style

---

#### 3. ScatterPlot.jsx
**Purpose:** Interactive scatter plot visualization using Recharts

**Props:**
- `onPointClick(data)` - Callback when a data point is clicked

**State Management:**
- `isTooltipActive` - Whether tooltip should be shown
- `activePayload` - Current tooltip data
- `activeCoordinate` - Tooltip position
- `isInteractionLocked` - Prevents tooltip from reappearing after click

**Data Structure:**
```javascript
{
  task: "Coding",                    // Short label
  fullName: "Coding/Programming",    // Full task name
  category: "Development",           // Category for color/shape
  z_support: 0.72,                   // X-axis value (openness to AI)
  z_usage: 1.52,                     // Y-axis value (current AI usage)
  labelOffset: { dx: 0, dy: -16 },  // Label positioning offset
  manualReportPath: "...",          // Path to markdown report
  aiReportPath: "..."               // Alternative report path (unused)
}
```

**Chart Configuration:**
- **Fixed dimensions:** 900px × 900px
- **X-axis:** Openness to AI support (z-score, domain: -2 to 2)
- **Y-axis:** Current AI usage (z-score, domain: -2 to 2)
- **Reference lines:** Dashed lines at x=0 and y=0

**Category Styling:**
```javascript
Categories = {
  'Development': { color: '#4A90E2', shape: 'circle' },
  'Quality-Risk': { color: '#50C878', shape: 'square' },
  'Design-Planning': { color: '#F5A623', shape: 'triangle' },
  'Infra-Ops': { color: '#9B59B6', shape: 'diamond' },
  'Meta-work': { color: '#E74C3C', shape: 'pentagon' }
}
```

**Quadrant Labels:**
- Top-left: "SUSTAIN" (low openness, high usage)
- Top-right: "IMPROVE" (high openness, high usage)
- Bottom-left: "DE-PRIORITIZE" (low openness, low usage)
- Bottom-right: "BUILD" (high openness, low usage)

**Point Rendering:**
- Custom `PointWithLabel` component renders shape + text label
- Point size: 8px radius/width
- Shapes: circle, square, triangle, diamond, pentagon
- Labels offset from points using `labelOffset` values
- White stroke on shapes for visibility

**Interaction Behavior:**
1. **Hover:** Displays tooltip with task name, category, and z-scores
2. **Click:**
   - Hides tooltip immediately
   - Locks interaction to prevent tooltip reactivation
   - Triggers `onPointClick` callback
   - Unlocks on re-entering chart area

**Legend:**
- Fixed position top-left within chart
- Shows all 5 categories with color and shape
- Semi-transparent white background

**Custom Tooltip:**
- White background with border and shadow
- Displays full task name, category, and both z-scores
- Auto-positioned near cursor

---

#### 4. Modal.jsx
**Purpose:** Reusable modal dialog component

**Props:**
- `isOpen` - Boolean controlling visibility
- `onClose` - Callback to close modal
- `title` - Modal title text
- `categoryBadge` - Optional category badge text
- `children` - Modal content

**Features:**
- **Escape key support:** Closes modal when Escape is pressed
- **Click-outside-to-close:** Clicking overlay closes modal
- **Keyboard focus:** Automatically focuses close button when opened
- **Animations:** Fade-in animation on open

**Dimensions:**
- Max-width: 900px
- Height: 90vh (90% of viewport height)
- Responsive padding: 20px

**Layout:**
- Fixed position overlay covering entire viewport
- Centered modal container
- Header with title, optional badge, and close button
- Scrollable content area

---

#### 5. WelcomePage.jsx
**Purpose:** About page content explaining the dashboard and study

**Content Sections:**
1. **Introduction:** Study overview and participant count
2. **About the Study:** Task categories and research scope
3. **How to Use This Dashboard:** Interaction instructions
4. **Understanding the Visualization:** Axis explanations and z-scores
5. **Research Paper:** Link to full paper PDF

**Task Categories Listed:**
- Design & Planning
- Development
- Quality & Risk
- Infrastructure & Operations
- Meta Work

**Styling:**
- Typography-focused layout
- Bulleted lists for readability
- Gradient text for headings
- Links styled in brand colors

---

#### 6. TableOfContents.jsx
**Purpose:** Auto-generated table of contents from markdown headings

**Props:**
- `htmlContent` - Rendered HTML string from markdown

**Functionality:**
1. Parses HTML to extract h2 and h3 elements
2. Extracts heading IDs (generated by markdown-it-anchor)
3. Renders clickable TOC with smooth scroll behavior
4. Indents h3 headings under h2 parents

**Rendering:**
- Only renders if headings exist
- Sticky positioning (top: 40px)
- Nested list structure with indentation
- Smooth scroll on link click

**Note:** Currently unused in the modal view but included for potential sidebar implementation.

---

#### 7. Sidebar.jsx & ReportViewer.jsx
**Status:** Included in codebase but **not used** in current application flow

**Original Purpose:**
- Sidebar: Hierarchical navigation of tasks by category
- ReportViewer: Full-page report display with TOC

**Reason for Exclusion:**
Current design uses modal-based navigation instead of sidebar navigation. These components remain for potential future features or alternative layouts.

---

## Data Management

### Chart Data Structure

**File:** `chartData.js`

**Format:** Array of 20 task objects exported as `window.chartData`

**Data Source:** Extracted from research paper figure using WebPlotDigitizer

**Fields:**
```javascript
{
  task: string,              // Short label for chart
  fullName: string,          // Full descriptive name
  category: string,          // One of 5 categories
  z_support: number,         // X-axis: openness z-score (-2 to 2)
  z_usage: number,           // Y-axis: usage z-score (-2 to 2)
  labelOffset: {             // Pixel offsets to prevent label overlap
    dx: number,
    dy: number
  },
  manualReportPath: string,  // Path to human-coded report
  aiReportPath: string       // Path to AI-generated report (unused)
}
```

**Z-Score Interpretation:**
- **Positive z-score:** Above average for that metric
- **Negative z-score:** Below average for that metric
- **Range:** Typically -2 to +2 (2 standard deviations)

---

### Report Data

**Location:** `/manually_coded_reports/`

**Format:** Markdown (.md files)

**Naming Convention:** `report-data_{category}_{task_name}.md`

**Content Structure (example):**
```markdown
# Report of Qualitative Analysis for {Task} (Category: {Category})

## 1) Core Themes

### A. Where AI is Wanted
#### Theme: {Theme Name}
{Description}
**Representative quotes:**
- *"Quote"* (Participant X)

### B. Where AI is Not Wanted
...

## 2) Cross-Cutting Patterns
...

## 3) Outliers and Edge Cases
...

## 4) Implications for AI Tool Design
#### Key "Must Haves"
...
#### Key "Must Not Haves"
...

## Executive Summary
...
```

**Total Reports:** 20 (one per task)

**Size:** Varies, typically 3000-8000 words per report

---

## Styling and Design System

### Visual Design Principles
- **Academic professionalism:** Clean, readable, research-focused
- **Data-driven:** Visualization-first approach
- **Accessible:** High contrast, clear typography
- **Modern:** Gradients, shadows, smooth transitions

### Color Palette

**Brand Gradients:**
- Primary: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

**Category Colors:**
- Development: `#4A90E2` (blue)
- Quality-Risk: `#50C878` (green)
- Design-Planning: `#F5A623` (orange)
- Infra-Ops: `#9B59B6` (purple)
- Meta-work: `#E74C3C` (red)

**Grays:**
- Dark text: `#1a202c`
- Medium text: `#4a5568`
- Light text: `#718096`
- Background gray: `#f8f9fa`
- Border gray: `#e2e8f0`

### Typography

**Font Stack:**
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif
```

**Hierarchy:**
- Page title: 2.5rem (40px), weight 700
- Modal title: 24px, weight 600
- Section headings: 28px, weight 600
- Subsection headings: 22px, weight 600
- Body text: 16px, line-height 1.8
- Small text: 13-14px

**Special Treatments:**
- Gradient text for main headings (webkit-background-clip)
- Code: Courier New, pink color (#d53f8c), gray background

### Layout System

**Container Max-widths:**
- Visualization page: 1000px
- Modal content: 900px
- Report content: 800px (centered within modal)

**Spacing Scale:**
- Padding: 20px, 24px, 40px, 60px
- Margins: 10px, 16px, 24px, 32px, 40px
- Gaps: 8px, 12px, 15px, 40px

**Border Radius:**
- Cards: 12px
- Buttons: 8px
- Small elements: 4px, 6px
- Icon boxes: 20px

**Shadows:**
- Subtle: `0 4px 6px rgba(0, 0, 0, 0.07)`
- Medium: `0 10px 30px rgba(0, 0, 0, 0.1)`
- Strong: `0 20px 60px rgba(0, 0, 0, 0.3)`
- Button hover: `0 10px 25px rgba(102, 126, 234, 0.4)`

### Component-Specific Styles

**Buttons:**
- Gradient background
- White text
- 14px font, weight 600
- Padding: 14px 32px
- Hover: translateY(-2px) + shadow increase
- Icon + text inline-flex layout

**Modal:**
- Fixed overlay with rgba(0, 0, 0, 0.5) background
- White container with 12px border radius
- Header with border-bottom
- Scrollable content area
- Close button (36x36px, transparent background)
- Fade-in animation (0.2s)

**Tooltip (Chart):**
- White background
- 1px gray border
- 6px border radius
- Box shadow for depth
- 12-14px text

**Scrollbars:**
- Width: 10px
- Gradient thumb matching brand colors
- Hover effect reverses gradient direction

---

## Interaction Patterns

### Navigation Flow

1. **Initial Load:**
   - User lands on VisualizationPage
   - Sees scatter plot with 20 data points
   - Reads instructions and study info

2. **Exploring Data:**
   - User hovers over points → tooltip appears
   - User clicks point → modal opens with report
   - User reads report with auto-generated TOC

3. **Accessing Information:**
   - User clicks "About" → modal with WelcomePage
   - User clicks "Read the Full Paper" → opens PDF in new tab

4. **Closing Modals:**
   - Click X button
   - Press Escape key
   - Click outside modal area

### State Transitions

```
[Landing Page]
    → hover point → [Tooltip Visible]
    → click point → [Report Modal Open] → [Loading] → [Report Displayed]
    → close → [Landing Page]

[Landing Page]
    → click About → [About Modal Open]
    → close → [Landing Page]
```

### Error Handling

**Config Load Failure:**
- Application continues to function
- Config is optional (currently unused)
- Sets error state but doesn't block UI

**Report Load Failure:**
- Displays error message in modal
- Message: "Error loading report: {error}"
- User can close modal and try another task

**Missing Dependencies:**
- Chart library check: displays "Loading chart library..." if Recharts not loaded
- Graceful degradation for unsupported browsers

---

## Performance Considerations

### Loading Strategy
- All JavaScript loaded synchronously from CDN
- React components loaded in dependency order via `<script type="text/babel">`
- Reports loaded on-demand (fetched only when clicked)

### Optimization Opportunities (Current Implementation)

**Pros:**
- No build step complexity
- Easy to host and deploy
- Instant updates (no compilation)
- CDN caching of libraries

**Cons:**
- Babel transpilation happens in browser (slower)
- All components loaded upfront
- No code splitting
- No bundle optimization

**Recommended for Production:**
If this were to be optimized for production, consider:
1. Build process with Vite or Create React App
2. Pre-compiled JSX
3. Code splitting for reports
4. Image optimization
5. Service worker for offline access

---

## Accessibility Considerations

### Implemented Features
- **Keyboard Navigation:**
  - Escape key closes modals
  - Focus management (close button auto-focused on modal open)
  - Tab navigation through interactive elements

- **Semantic HTML:**
  - Proper heading hierarchy (h1 → h2 → h3)
  - ARIA labels on close buttons
  - Meaningful link text

- **Visual Accessibility:**
  - High contrast ratios
  - Color not sole indicator (shapes + colors for categories)
  - Clear focus states
  - Readable font sizes (16px minimum for body)

### Areas for Improvement
- Add ARIA roles for modal (role="dialog")
- Add aria-hidden management for background content
- Trap focus within modal when open
- Add alt text for SVG icons
- Keyboard navigation for chart data points
- Screen reader announcements for tooltip content
- Skip-to-content link

---

## Browser Compatibility

### Target Browsers
- Chrome/Edge (Chromium) 90+
- Firefox 88+
- Safari 14+

### Required Features
- ES6+ JavaScript (arrow functions, destructuring, template literals)
- CSS Grid and Flexbox
- CSS custom properties (not used currently)
- Fetch API
- React 18 features (concurrent features, automatic batching)

### Polyfills Needed for Older Browsers
- None included currently
- For IE11 support would need: React polyfills, Fetch polyfill, Promise polyfill

---

## Deployment Specification

### Static Hosting Requirements
- **Web server:** Any HTTP server (Apache, Nginx, Python SimpleHTTPServer)
- **HTTPS:** Recommended for CDN resource loading
- **CORS:** Not required (all resources same-origin or public CDN)

### File Structure (Production)
```
/
├── index.html
├── chartData.js
├── paper.pdf
├── components/
│   └── *.jsx (8 files)
├── styles/
│   └── main.css
└── manually_coded_reports/
    └── *.md (20 files)
```

### Hosting Services

**GitHub Pages:**
```bash
# Enable GitHub Pages in repo settings
# Point to root or /docs folder
# Automatic deployment on push to main
```

**Netlify:**
```toml
# netlify.toml (optional)
[build]
  publish = "."
```

**Vercel:**
```json
{
  "version": 2,
  "builds": [{ "src": "index.html", "use": "@vercel/static" }]
}
```

**Python Local Server:**
```bash
python3 -m http.server 8000
# Navigate to http://localhost:8000
```

---

## Testing Strategy

### Manual Testing Checklist

**Functional Testing:**
- [ ] Page loads without errors
- [ ] Scatter plot renders with all 20 points
- [ ] Points display correct colors and shapes per category
- [ ] Hover shows tooltip with correct data
- [ ] Click on point opens report modal
- [ ] Report loads and displays correctly
- [ ] Modal close button works
- [ ] Escape key closes modal
- [ ] Click outside modal closes it
- [ ] About button opens about modal
- [ ] Paper link opens PDF in new tab
- [ ] All 20 reports load successfully

**Visual Testing:**
- [ ] Layout responsive (test at 1920px, 1366px, 768px)
- [ ] Chart labels don't overlap
- [ ] Gradients render correctly
- [ ] Shadows and transparency effects work
- [ ] Fonts load and display properly
- [ ] Icons render correctly
- [ ] Modal animations smooth

**Browser Testing:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

**Error Scenarios:**
- [ ] Missing report file shows error message
- [ ] Slow network shows loading states
- [ ] CDN failure degrades gracefully

### Automated Testing (Recommendations)

**Unit Tests (if implemented):**
- Component rendering (React Testing Library)
- State management logic
- Event handlers
- Data transformations

**Integration Tests:**
- Modal opening/closing flow
- Report loading and rendering
- User interaction sequences

**E2E Tests (Playwright/Cypress):**
- Full user journeys
- Cross-browser testing
- Visual regression testing

---

## Future Enhancement Opportunities

### Feature Additions

1. **Search and Filter:**
   - Search tasks by keyword
   - Filter by category
   - Filter by quadrant (IMPROVE, BUILD, etc.)

2. **Comparison Mode:**
   - Select multiple tasks to compare reports
   - Side-by-side report view
   - Highlight differences in themes

3. **Data Export:**
   - Download chart as PNG/SVG
   - Export report as PDF
   - Download all reports as ZIP

4. **Interactivity Enhancements:**
   - Zoom and pan on scatter plot
   - Highlight related tasks
   - Filter points by z-score ranges
   - Animated transitions between views

5. **Responsive Design:**
   - Mobile-optimized layout
   - Touch-friendly interactions
   - Collapsible sections on small screens

6. **Analytics Integration:**
   - Track which reports are most viewed
   - Measure time spent on tasks
   - A/B test different visualizations

7. **Collaboration Features:**
   - Share specific report links
   - Annotation tools
   - Comment threads

### Technical Improvements

1. **Build Pipeline:**
   - Migrate to Vite or Next.js
   - TypeScript for type safety
   - ESLint and Prettier for code quality

2. **Performance:**
   - Lazy load reports
   - Image optimization
   - Service worker for offline support
   - Pre-render static content

3. **Testing:**
   - Comprehensive test suite
   - CI/CD integration
   - Visual regression tests
   - Accessibility audits

4. **Data Management:**
   - CMS integration for reports
   - Dynamic data loading from API
   - Version control for research data
   - Multiple dataset support

---

## Security Considerations

### Current Implementation

**Vulnerabilities:**
- `dangerouslySetInnerHTML` used for markdown rendering
  - **Mitigation:** Markdown is static, controlled content
  - **Risk:** Low (no user-generated content)

- CDN dependencies
  - **Risk:** CDN compromise could inject malicious code
  - **Mitigation:** Use Subresource Integrity (SRI) hashes

**Safe Practices:**
- No user input or authentication
- No backend or database
- No cookies or local storage
- Static content only
- HTTPS recommended

### Recommended Improvements

1. **Content Security Policy (CSP):**
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net;
               style-src 'self' 'unsafe-inline';">
```

2. **Subresource Integrity:**
```html
<script
  src="https://unpkg.com/react@18/umd/react.production.min.js"
  integrity="sha384-..."
  crossorigin="anonymous">
</script>
```

3. **Sanitize Markdown:**
- Use DOMPurify library before rendering HTML
- Restrict allowed HTML tags
- Strip potentially dangerous attributes

---

## Known Limitations

1. **No Backend:**
   - All data is static
   - No dynamic updates without redeployment
   - No personalization or user accounts

2. **Browser Rendering:**
   - Babel transpilation in browser adds overhead
   - Slower initial load vs. pre-compiled code
   - Requires JavaScript enabled

3. **Accessibility:**
   - Chart interactions not keyboard-accessible
   - Screen reader support limited
   - No ARIA live regions

4. **Mobile Experience:**
   - Not optimized for small screens
   - Chart may be difficult to interact with on mobile
   - Large modals on small viewports

5. **Report Format:**
   - Markdown only (no rich media)
   - No interactive elements within reports
   - Limited formatting options

6. **Browser Support:**
   - No IE11 support
   - Requires modern browser features
   - No graceful degradation for older browsers

---

## Documentation Requirements

### Developer Documentation

1. **Setup Guide:**
   - Prerequisites
   - Local development setup
   - File structure explanation

2. **Component API:**
   - Props and state for each component
   - Event handler signatures
   - Data format specifications

3. **Styling Guide:**
   - CSS class naming conventions
   - Color palette usage
   - Typography scale
   - Spacing system

4. **Data Format:**
   - Chart data schema
   - Report markdown structure
   - Metadata requirements

### User Documentation

1. **User Guide:**
   - How to navigate the dashboard
   - Understanding the visualization
   - Reading the reports
   - Interpreting z-scores

2. **Research Context:**
   - Study methodology
   - Participant demographics
   - Data collection process
   - Analysis approach

---

## Success Metrics

### Technical Metrics
- **Load time:** < 3 seconds on 3G
- **Time to Interactive:** < 5 seconds
- **Lighthouse Score:** 90+ across all categories
- **Zero console errors**
- **Cross-browser compatibility:** 100% for target browsers

### User Metrics
- **Engagement:** Average time on site > 5 minutes
- **Exploration:** Users click on average 5+ tasks
- **Completion:** Users read at least one full report
- **Paper downloads:** Track PDF link clicks

### Quality Metrics
- **Accessibility:** WCAG 2.1 AA compliance
- **Mobile usability:** Google Mobile-Friendly Test pass
- **SEO:** Metadata and semantic HTML best practices

---

## Maintenance and Updates

### Content Updates
- Reports stored as markdown files
- Edit `.md` files directly
- No rebuild required
- Git-based version control

### Data Updates
- Edit `chartData.js` to modify visualization data
- Adjust `labelOffset` values if labels overlap
- Update z-scores if research data changes

### Dependency Updates
- Review CDN versions periodically
- Test compatibility before updating version numbers
- Consider pinning to specific versions for stability

### Bug Fixes
- Monitor browser console for errors
- Test on new browser releases
- Address accessibility issues as discovered
- Fix responsive layout issues

---

## Conclusion

This specification provides a complete blueprint for recreating the Developer AI Preferences Research Dashboard. The application is built with simplicity and accessibility in mind, using modern web technologies without complex build processes. The modular React component architecture, clear data structures, and comprehensive styling system enable rapid development and easy maintenance.

Key strengths:
- **Simple deployment:** Static files, no server required
- **Clear architecture:** Well-separated concerns, reusable components
- **Rich visualization:** Interactive scatter plot with detailed reports
- **Academic presentation:** Professional, research-focused design

The specification includes all necessary information for a developer to rebuild the application from scratch, including component APIs, data formats, styling guidelines, and deployment instructions.
