# Report Viewer Website Specification

## Project Overview

A static, front-end only website to display qualitative analysis reports from the research study "Understanding Developer Preferences for AI-Powered Coding Assistance Across Software Engineering Tasks". The site presents both AI-generated and manually-coded reports organized by task categories and types, allowing researchers and interested parties to explore developer preferences for AI support across different software engineering tasks.

---

## Technical Architecture

### Technology Stack
- **Framework**: React 18 (in-browser, no build step)
- **Transpilation**: Babel Standalone for JSX and ES6+
- **Markdown Rendering**: markdown-it with markdown-it-anchor plugin
- **Styling**: Plain CSS with modern gradient-based design
- **Deployment**: Static files suitable for GitHub Pages
- **Browser Support**: Modern browsers only (Chrome, Firefox, Safari, Edge - latest versions)

### In-Browser React Setup
- Uses window globals instead of UMD transform (simpler approach)
- All React components in separate `.jsx` files
- Load scripts in dependency order in `index.html`
- Use `type="text/babel"` with `data-type="module"`
- Components exported to `window` object (e.g., `window.Sidebar`)

### Project Structure
```
project-root/
├── index.html                    # Main HTML file
├── config.json                   # Configuration file defining report groups
├── paper.pdf                     # Research paper PDF
├── reports/                      # AI-generated markdown reports (21 files)
│   ├── report-design_planning-requirements_gathering_analysis.md
│   ├── report-development-bug_fixing_debugging.md
│   └── ...                      # Additional AI report files
├── manually_coded_reports/       # Manually-coded markdown reports (18 files)
│   ├── report-data_design_planning_task_project_planning_management.md
│   ├── report-data_development_bug_fixing_debugging.md
│   └── ...                      # Additional manual report files
├── components/                   # React components
│   ├── App.jsx                  # Main app component
│   ├── Sidebar.jsx              # Navigation sidebar with category groups
│   ├── WelcomePage.jsx          # Landing/welcome page
│   ├── ReportViewer.jsx         # Markdown report display
│   └── TableOfContents.jsx      # Auto-generated TOC from headings
└── styles/
    └── main.css                 # All styles with gradient theme
```

---

## Configuration File

### Format: JSON
**File**: `config.json`

### Structure
The configuration uses a two-level hierarchy with **category groups** (AI Generated vs Manual Coded) containing **categories** (Design & Planning, Development, etc.), which contain **tasks**:

```json
{
  "categoryGroups": [
    {
      "id": "ai_generated",
      "name": "AI Generated Reports",
      "categories": [
        {
          "id": "design_planning",
          "name": "Design & Planning",
          "tasks": [
            {
              "id": "requirements_gathering_analysis",
              "name": "Requirements Gathering & Analysis",
              "reportFile": "reports/report-design_planning-requirements_gathering_analysis.md"
            }
          ]
        },
        {
          "id": "development",
          "name": "Development",
          "tasks": [
            {
              "id": "bug_fixing_debugging",
              "name": "Bug Fixing & Debugging",
              "reportFile": "reports/report-development-bug_fixing_debugging.md"
            }
          ]
        }
      ]
    },
    {
      "id": "manual_coded",
      "name": "Manual Coded Reports",
      "categories": [
        {
          "id": "development_manual",
          "name": "Development",
          "tasks": [
            {
              "id": "bug_fixing_debugging_manual",
              "name": "Bug Fixing & Debugging",
              "reportFile": "manually_coded_reports/report-data_development_bug_fixing_debugging.md"
            }
          ]
        }
      ]
    }
  ]
}
```

### Configuration Notes
- Configuration defines two separate report groups: AI Generated and Manual Coded
- Each group contains the same category structure (5 categories)
- Categories: Design & Planning, Development, Quality & Risk, Infrastructure & Operations, Meta Work
- 21 tasks total across the categories
- File paths in `reportFile` are relative to the project root
- Manual report IDs have `_manual` suffix to avoid conflicts with AI reports

### Five Main Categories
1. **Design & Planning** - Requirements, architecture, and project planning tasks
2. **Development** - Coding, debugging, refactoring, and optimization
3. **Quality & Risk** - Testing, code review, and security
4. **Infrastructure & Operations** - DevOps, deployment, and monitoring
5. **Meta Work** - Documentation, learning, communication, and mentoring

---

## User Interface Design

### Layout
**Single-page application** with:
- Fixed sidebar navigation (left side, 300px wide)
- Main content area (remaining width)
- Purple gradient background theme
- No header or footer bars

### Visual Style
- **Aesthetic**: Modern, clean, with professional gradients
- **Color Scheme**:
  - Background: Purple gradient (from #667eea to #764ba2)
  - Sidebar: Dark gradient (from #2d3748 to #1a202c)
  - Content: White cards with shadow and rounded corners
  - Accents: Purple/blue gradients for interactive elements
- **Typography**:
  - Sans-serif system font stack
  - Clear heading hierarchy with gradient text on main headings
  - Line height 1.7-1.8 for readability
- **Responsiveness**: Not required (desktop-focused)

---

## Components Specification

### 1. App.jsx (Main Component)
**Purpose**: Root component managing application state

**State**:
- `config`: Object - loaded configuration data
- `selectedTask`: Object - currently selected task (or null for welcome page)
- `loading`: Boolean - loading state
- `error`: String - error message if config fails to load

**Functionality**:
- Load `config.json` on mount
- Manage task selection (null = welcome page, task object = report viewer)
- Pass config and selection state to child components

**Props**: None (root component)

---

### 2. Sidebar.jsx
**Purpose**: Hierarchical navigation with category groups, categories, and tasks

**Props**:
- `config`: Configuration object with categoryGroups
- `selectedTask`: Currently selected task object
- `onTaskSelect`: Callback function when user selects a task or clicks home

**UI Elements**:
- **Clickable Header**: "Developer AI Preferences / Research Dashboard" - returns to welcome page
- **Category Groups**: Top-level sections (AI Generated Reports, Manual Coded Reports)
- **Categories**: Second-level sections under each group
- **Tasks**: Individual reports listed under categories
- All sections are collapsible/expandable
- Visual indication of currently selected task

**Behavior**:
- Clicking header calls `onTaskSelect(null)` to show welcome page
- Clicking group headers toggles group expansion
- Clicking category headers toggles category expansion
- Clicking task calls `onTaskSelect(task)` with full task object
- Currently selected task is visually highlighted with active state
- Initial state: all groups and categories expanded

**Styling**:
- Group headers: Bold, prominent, with purple background tint
- Category headers: Uppercase, indented, lighter text
- Tasks: Further indented, with left border on active item
- Smooth hover transitions on all interactive elements

---

### 3. WelcomePage.jsx
**Purpose**: Landing page with study information

**Props**: None (static content)

**Content Structure**:
1. **Page Title**: "Developer AI Preferences Research Dashboard"
2. **Introduction**:
   - Explains the dashboard shows qualitative analysis of developer preferences for AI support
   - Notes 860 professional software developers participated
   - Describes scope: AI support across all aspects of daily work
3. **About the Study**:
   - Lists the 5 main categories
   - Explains what's examined: where, why, and how developers want AI support
4. **How to Use**:
   - Navigation instructions
   - What each report provides (usage patterns, workflows, concerns, opportunities)
5. **Research Paper**:
   - Link to `paper.pdf` (not arxiv URL)
   - Full paper title as link text

**Styling**:
- White card with rounded corners and shadow
- Gradient heading text
- Spacious padding and margins
- Professional, academic appearance

---

### 4. ReportViewer.jsx
**Purpose**: Display markdown reports with integrated TOC

**Props**:
- `reportFile`: Path to the markdown file to load

**Functionality**:
- Fetch markdown file when reportFile changes
- Parse markdown to HTML using markdown-it
- Configure markdown-it with anchor plugin for heading IDs
- Extract headings for TOC generation
- Handle loading and error states

**Layout**:
- **Grid layout**: Two columns
  - **Left column** (main content): Rendered markdown in white card
  - **Right column** (280px): Sticky table of contents
- No separate report header (title comes from markdown h1)

**Markdown Configuration**:
- Uses markdown-it with these options:
  - `html: true` - Allow HTML tags
  - `linkify: true` - Auto-link URLs
  - `typographer: true` - Smart quotes and typography
- Uses markdown-it-anchor plugin for heading IDs
- Slugify function: encodeURIComponent with lowercase and hyphen replacement

---

### 5. TableOfContents.jsx
**Purpose**: Auto-generated, clickable navigation from report headings

**Props**:
- `htmlContent`: Rendered HTML string from markdown

**Functionality**:
- Parse HTML to extract h2 and h3 headings (not h4)
- Extract heading IDs, text, and levels
- Display hierarchical clickable list
- Implement smooth scrolling to headings on click
- Returns null if no headings found

**Behavior**:
- Clicking a TOC item smoothly scrolls to that heading in the report
- Uses `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`

**Styling**:
- White card with shadow and rounded corners
- Sticky positioning (stays visible while scrolling)
- Hierarchical indentation (h2 at left, h3 indented)
- Hover effects with border accent
- Max height with scroll if TOC is very long

---

## Data Flow

### Initial Load
1. App loads and fetches `config.json`
2. App displays loading state
3. On success: renders Sidebar and WelcomePage
4. Sidebar renders hierarchical navigation from categoryGroups

### Navigation Flow
1. User clicks a task in Sidebar
2. Sidebar calls `onTaskSelect(taskObject)`
3. App updates `selectedTask` state
4. App renders ReportViewer with task's reportFile
5. ReportViewer fetches markdown from file path
6. ReportViewer parses markdown with markdown-it and anchor plugin
7. Report HTML is rendered in main column
8. TableOfContents extracts headings and renders in right column

### Home Navigation
1. User clicks sidebar header
2. Sidebar calls `onTaskSelect(null)`
3. App sets `selectedTask` to null
4. App renders WelcomePage instead of ReportViewer

---

## Markdown Rendering

### Library Used
- **markdown-it** (v13) - Full-featured markdown parser
- **markdown-it-anchor** (v8) - Auto-generates heading IDs for TOC

### Standard Markdown Support
- **Headings**: H1-H6 (styled with gradient for h1, bold for h2-h3)
- **Text formatting**: Bold, italic, strikethrough
- **Lists**: Ordered and unordered with proper spacing
- **Blockquotes**: Styled with left border, background, and padding
- **Code blocks**: Dark theme for code blocks, inline code with pink background
- **Horizontal rules**: `---`
- **Links**: Purple accent color matching theme

### Table of Contents Generation
- Extract h2 and h3 headings only (h4+ excluded)
- Anchor IDs generated automatically by markdown-it-anchor
- Slugify: lowercase, spaces to hyphens, URL encoded
- Smooth scroll behavior on click

---

## File Naming Conventions

### AI-Generated Reports
- Directory: `/reports/`
- Pattern: `report-{category_id}-{task_id}.md`
- Example: `report-development-bug_fixing_debugging.md`
- Total: 21 reports

### Manual Coded Reports
- Directory: `/manually_coded_reports/`
- Pattern: `report-data_{category_id}_{task_id}.md`
- Example: `report-data_development_bug_fixing_debugging.md`
- Total: 18 reports (3 missing from Design & Planning)

### Task IDs
- Use lowercase with underscores
- Must be unique within config
- Manual report task IDs have `_manual` suffix in config

---

## Styling Guidelines

### Color Palette
- **Background Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Sidebar Dark**: `linear-gradient(180deg, #2d3748 0%, #1a202c 100%)`
- **Sidebar Header**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Content Cards**: White (#ffffff) with shadow
- **Text**: Dark gray (#1a202c to #4a5568)
- **Accents**: Purple (#667eea, #764ba2)

### Typography
- **Font Stack**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif
- **Line Height**: 1.7-1.8 for readability
- **Heading Gradients**: H1 uses gradient text with background-clip
- **Font Sizes**:
  - Body: 16px
  - H1: 36-42px
  - H2: 24-28px
  - H3: 22px

### Sidebar Styling
- Width: 300px fixed
- Scrollable with custom gradient scrollbar
- Three-level hierarchy with visual depth:
  - Group headers: Bold, prominent, purple tint background
  - Category headers: Uppercase, indented 40px
  - Tasks: Indented 56px, left border on active
- Smooth transitions on all interactive elements

### Content Cards
- White background
- Border radius: 12px
- Shadow: Multi-layer for depth
- Padding: 50-60px for spacious feel
- Max width: 1400px for content wrapper

### Table of Contents
- Sticky positioning (top: 40px)
- Width: 280px
- White card with shadow
- Max height with scroll if needed
- Indented hierarchy (h3 indented from h2)
- Interactive hover states with border animation

---

## Implementation Details

### Script Loading Order (index.html)
```html
<!-- 1. React and React DOM -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- 2. Babel Standalone -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- 3. Markdown-it and anchor plugin -->
<script src="https://cdn.jsdelivr.net/npm/markdown-it@13/dist/markdown-it.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/markdown-it-anchor@8/dist/markdownItAnchor.umd.js"></script>

<!-- 4. React components (in dependency order) -->
<script type="text/babel" data-type="module" src="components/TableOfContents.jsx"></script>
<script type="text/babel" data-type="module" src="components/WelcomePage.jsx"></script>
<script type="text/babel" data-type="module" src="components/ReportViewer.jsx"></script>
<script type="text/babel" data-type="module" src="components/Sidebar.jsx"></script>
<script type="text/babel" data-type="module" src="components/App.jsx"></script>
```

### Component Exports
Components are exported to the `window` object:
```javascript
window.TableOfContents = function TableOfContents({ htmlContent }) { ... }
window.WelcomePage = function WelcomePage() { ... }
window.ReportViewer = function ReportViewer({ reportFile }) { ... }
window.Sidebar = function Sidebar({ config, selectedTask, onTaskSelect }) { ... }
// App.jsx renders directly without exporting
```

### Development Server
For local development, use Python's built-in HTTP server:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`

---

## Key Features Implemented

### Two Report Types
- **AI Generated Reports**: 21 reports from AI-assisted qualitative coding
- **Manual Coded Reports**: 18 reports from traditional manual coding
- Side-by-side organization in separate collapsible sections

### Hierarchical Navigation
- Three-level sidebar hierarchy (Group → Category → Task)
- All levels collapsible/expandable
- Visual depth with indentation and styling
- Clickable header to return home

### Modern Visual Design
- Purple gradient theme throughout
- Dark sidebar with light content cards
- Smooth transitions and hover effects
- Professional, academic aesthetic
- Custom gradient scrollbars

### Table of Contents
- Auto-generated from h2/h3 headings
- Sticky positioning on right side
- Smooth scroll navigation
- Hierarchical display

### Responsive Content
- Grid layout for report + TOC
- Sticky TOC stays visible while scrolling
- Max width content for readability
- Adequate spacing and padding

---

## Maintenance Notes

### Adding New Reports

**For AI-Generated Reports:**
1. Add markdown file to `/reports/` directory
2. Follow naming: `report-{category_id}-{task_id}.md`
3. Add task entry to appropriate category under `ai_generated` group in config.json
4. No code changes required

**For Manual Coded Reports:**
1. Add markdown file to `/manually_coded_reports/` directory
2. Follow naming: `report-data_{category_id}_{task_id}.md`
3. Add task entry to appropriate category under `manual_coded` group in config.json
4. Use `_manual` suffix in task ID
5. No code changes required

### Updating Configuration
- Edit `config.json` to add/modify category groups, categories, or tasks
- Changes take effect on page reload (no build step)
- Maintain the categoryGroups → categories → tasks hierarchy

### Styling Updates
- All styles in single `styles/main.css` file
- Uses CSS custom properties for easy color scheme updates
- Gradient values defined inline (can be extracted to variables)

---

## Browser Compatibility

### Tested Browsers
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

### Required Features
- ES6+ JavaScript support
- CSS Grid and Flexbox
- Fetch API
- Smooth scrolling behavior

---

## Summary

This specification documents a completed static single-page React application for displaying qualitative research reports. The site uses in-browser React (no build step), is fully static for easy deployment, and provides an intuitive hierarchical navigation experience with auto-generated table of contents for each report. The design features a modern gradient-based visual theme, supports both AI-generated and manually-coded reports in separate sections, and prioritizes readability and ease of maintenance.

**Current Status**: Fully implemented with 21 AI-generated reports and 18 manually-coded reports across 5 task categories. Missing 3 manual reports from the Design & Planning category.
