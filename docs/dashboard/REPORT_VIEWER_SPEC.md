# Report Viewer Website Specification

## Project Overview

A static, front-end only website to display qualitative analysis reports from the research study "AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work". The site will present reports organized by task categories and types, allowing researchers and interested parties to explore developer preferences for AI support across different software engineering tasks.

---

## Technical Architecture

### Technology Stack
- **Framework**: React 18 (in-browser, no build step)
- **Transpilation**: Babel Standalone for JSX and ES6+
- **Markdown Rendering**: Any standard markdown-to-HTML library (developer's choice)
- **Styling**: Plain CSS
- **Deployment**: Static files suitable for GitHub Pages
- **Browser Support**: Modern browsers only (Chrome, Firefox, Safari, Edge - latest versions)

### In-Browser React Setup
Follow the pattern described in `IN_BROWSER_REACT_GUIDE.md`:
- Use UMD transform for module loading
- All React components in separate `.jsx` files
- Load scripts in dependency order in `index.html`
- Use `type="text/babel"` with `data-type="module"` and `data-plugins="transform-modules-umd"`

### Project Structure
```
project-root/
├── index.html                    # Main HTML file
├── config.json                   # Configuration file defining reports
├── paper.pdf                     # Research paper PDF
├── reports/                      # Directory containing all markdown reports
│   ├── report-development-bug_fixing_debugging.md
│   ├── report-development-coding_programming.md
│   └── ...                      # Additional report files
├── components/                   # React components
│   ├── App.jsx                  # Main app component
│   ├── Sidebar.jsx              # Navigation sidebar
│   ├── WelcomePage.jsx          # Landing/welcome page
│   ├── ReportViewer.jsx         # Markdown report display
│   └── TableOfContents.jsx      # Auto-generated TOC from headings
├── utils/
│   └── markdown.js              # Markdown parsing utilities
└── styles/
    └── main.css                 # All styles
```

---

## Configuration File

### Format: JSON
**File**: `config.json`

### Structure
```json
{
  "study": {
    "title": "AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work",
    "authors": [
      "Rudrajit Choudhuri",
      "Carmen Badea",
      "Christian Bird",
      "Jenna L. Butler",
      "Robert DeLine",
      "Brian Houck"
    ],
    "paperUrl": "paper.pdf"
  },
  "categories": [
    {
      "id": "development",
      "displayName": "Development",
      "tasks": [
        {
          "id": "bug_fixing_debugging",
          "displayName": "Bug Fixing/Debugging",
          "reportFile": "report-development-bug_fixing_debugging.md"
        },
        {
          "id": "coding_programming",
          "displayName": "Coding/Programming",
          "reportFile": "report-development-coding_programming.md"
        }
      ]
    },
    {
      "id": "quality_risk",
      "displayName": "Quality & Risk Management",
      "tasks": [
        {
          "id": "testing_qa",
          "displayName": "Testing & QA",
          "reportFile": "report-quality_risk-testing_qa.md"
        }
      ]
    }
  ]
}
```

### Configuration Notes
- The configuration file defines all available reports
- Reports are organized by category, with tasks nested under each category
- File paths in `reportFile` are relative to the `reports/` directory
- The structure is extensible for future additions (metadata, descriptions, etc.)

---

## User Interface Design

### Layout
**Single-page application** with:
- Fixed sidebar navigation (left side, ~250-300px wide)
- Main content area (remaining width)
- No header or footer bars

### Visual Style
- **Aesthetic**: Modern, clean, academic/research-oriented
- **Typography**:
  - Readable serif or sans-serif font for body text
  - Clear heading hierarchy
  - Adequate line height and spacing for readability
- **Colors**:
  - Neutral, professional color scheme
  - Subtle backgrounds
  - Good contrast for text readability
- **Responsiveness**: Not required (desktop-focused)

---

## Components Specification

### 1. App.jsx (Main Component)
**Purpose**: Root component managing application state and routing

**State**:
- `currentView`: String - either "welcome" or a task ID
- `config`: Object - loaded configuration data
- `reports`: Object - cache of loaded report markdown

**Functionality**:
- Load `config.json` on mount
- Manage view switching between welcome page and reports
- Pass necessary data to child components

**Props**: None (root component)

---

### 2. Sidebar.jsx
**Purpose**: Navigation panel showing categories and tasks

**Props**:
- `config`: Configuration object with categories and tasks
- `currentView`: Currently selected view/report ID
- `onNavigate`: Callback function when user selects a report or welcome page

**UI Elements**:
- "Home" or "Welcome" button at top (navigates to welcome page)
- Collapsible category sections (or always expanded, developer's choice)
- List of tasks under each category
- Visual indication of currently selected report

**Behavior**:
- Clicking a task name calls `onNavigate` with the task ID
- Currently selected task is visually highlighted
- Clean, scannable list format

---

### 3. WelcomePage.jsx
**Purpose**: Landing page with study information and instructions

**Props**:
- `study`: Study metadata from config (title, authors, paperUrl)

**Content Structure**:
1. **Study Title** (large, prominent heading)
2. **Authors** (listed clearly, formatted nicely)
3. **Brief Introduction**:
   - Explanation that this site contains qualitative analyses of developer preferences for AI support across different software engineering tasks
   - Brief description of the study (N=860 developers, mixed-methods analysis)
   - Context that reports analyze where developers want/don't want AI help and why
4. **Link to Full Paper**:
   - Prominent button or link to download/view the paper PDF
5. **Instructions**:
   - "Use the sidebar to explore reports by task category and type"
   - Simple, clear navigation guidance

**Styling**: Clean, centered layout with adequate whitespace

---

### 4. ReportViewer.jsx
**Purpose**: Display markdown reports with table of contents

**Props**:
- `reportFile`: Filename of the report to load
- `taskDisplayName`: Friendly name of the task (for header)

**Functionality**:
- Fetch markdown file from `/reports/{reportFile}` when report changes
- Parse markdown to HTML
- Extract headings (h1, h2, h3) to generate table of contents
- Display rendered report

**Layout**:
- **Report Header**: Task display name at the top
- **Two-column layout**:
  - **Left column** (~200-250px): Table of contents (sticky/fixed position)
  - **Right column**: Rendered markdown content

**Markdown Features**:
- Support standard markdown: headings, lists, bold, italic, blockquotes, code blocks, horizontal rules
- Preserve participant quotes formatting (currently shown as blockquotes with italic text)
- Proper rendering of the report metadata (task category, date, participant count)

---

### 5. TableOfContents.jsx
**Purpose**: Auto-generated, clickable table of contents from report headings

**Props**:
- `headings`: Array of heading objects `[{ id, level, text }]`
- `onHeadingClick`: Callback when user clicks a TOC item (for smooth scrolling)

**Functionality**:
- Display hierarchical list of headings (h2, h3 levels)
- Skip h1 (typically the main report title)
- Make each item clickable to jump to that section
- Implement smooth scrolling to target heading

**Styling**:
- Indentation to show heading hierarchy
- Clean, minimal list style
- Highlight current section (optional, but nice to have)

**Heading Extraction**:
- Parse the rendered HTML or markdown AST to extract headings
- Generate unique IDs for each heading if not present (for anchor links)
- Format: `{ id: "auto-generated-id", level: 2, text: "Heading Text" }`

---

## Data Flow

### Initial Load
1. App loads and fetches `config.json`
2. App displays Sidebar and WelcomePage by default
3. Sidebar renders category/task navigation from config

### Navigation Flow
1. User clicks a task in Sidebar
2. Sidebar calls `onNavigate(taskId)`
3. App updates `currentView` state to taskId
4. App renders ReportViewer with appropriate report file
5. ReportViewer fetches markdown file
6. ReportViewer parses markdown and generates TOC
7. Report is displayed with TOC in sidebar

### Report Caching (Optional but Recommended)
- Cache fetched markdown in App state to avoid re-fetching
- Check cache before fetching from server

---

## Markdown Rendering Requirements

### Standard Markdown Support
- **Headings**: H1-H6
- **Text formatting**: Bold, italic, strikethrough
- **Lists**: Ordered and unordered
- **Blockquotes**: For participant quotes
- **Code blocks**: Inline code and fenced code blocks
- **Horizontal rules**: `---`
- **Links**: Standard markdown links

### Special Handling
- **Participant Quotes**: Currently formatted as blockquotes with italic text and participant IDs, e.g.:
  ```markdown
  - *"Quote text here"* (Participant 57)
  ```
  Should render clearly and be visually distinguishable

### Table of Contents Generation
- Extract all h2 and h3 headings from the markdown
- Generate anchor IDs from heading text (slugify)
- Insert anchor IDs into rendered HTML
- Create clickable TOC that scrolls to sections

---

## File Naming Conventions

### Reports
- Pattern: `report-{category_id}-{task_id}.md`
- Example: `report-development-bug_fixing_debugging.md`
- All stored in `/reports/` directory

### Categories & Task IDs
- Use lowercase with underscores
- Match the IDs in `config.json`

### Display Names
- Defined in `config.json`
- Use proper capitalization and spacing
- Example: "Bug Fixing/Debugging", "Quality & Risk Management"

---

## Styling Guidelines

### General Principles
- Clean, academic aesthetic
- High readability for long-form text content
- Professional color scheme
- Adequate whitespace and padding
- Clear visual hierarchy

### Sidebar Styling
- Fixed position, scrollable if content overflows
- Clear category/task hierarchy
- Hover states for interactive elements
- Visual indicator for selected task (background color, border, etc.)
- Clean typography

### Report Content Styling
- Readable font size (16-18px for body text)
- Line height ~1.6 for body text
- Max width for text content (~800px) for optimal readability
- Clear heading sizes (decreasing h1 → h6)
- Styled blockquotes (left border, padding, subtle background)
- Code blocks with monospace font and distinct background
- Adequate margins between sections

### Table of Contents Styling
- Sticky/fixed positioning within the report viewer
- Indented hierarchy
- Subtle hover effects
- Clean, minimal list style
- Link styling that matches the overall theme

---

## Implementation Notes

### Script Loading Order (in index.html)
```html
<!-- 1. React and React DOM -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- 2. Babel Standalone -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- 3. Markdown library (choose one, e.g., marked.js) -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<!-- 4. Application modules (in dependency order) -->
<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" src="utils/markdown.js"></script>
<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" src="components/TableOfContents.jsx"></script>
<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" src="components/WelcomePage.jsx"></script>
<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" src="components/ReportViewer.jsx"></script>
<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" src="components/Sidebar.jsx"></script>
<script type="text/babel" data-type="module" data-plugins="transform-modules-umd" src="components/App.jsx"></script>
```

### Markdown Library Suggestions
- **marked.js**: Simple, widely used, CDN available
- **markdown-it**: Feature-rich, extensible
- **showdown**: Easy to use, good browser support

Developer can choose based on preference.

### Heading ID Generation
Generate IDs by:
1. Converting heading text to lowercase
2. Replacing spaces with hyphens
3. Removing special characters
4. Example: "Core Themes" → "core-themes"

### Smooth Scrolling
Use `element.scrollIntoView({ behavior: 'smooth' })` when TOC item is clicked.

---

## Future Extensibility

The specification is designed to be extensible for future enhancements:

- **Search functionality**: Add search across reports
- **Filters**: Filter tasks by certain criteria
- **Metadata display**: Show report generation date, participant count, etc.
- **Export features**: Download reports as PDF or other formats
- **Comparison view**: Side-by-side comparison of multiple reports
- **Cross-references**: Link between related reports

The configuration file structure supports adding additional fields without breaking existing functionality.

---

## Deliverables

### For the Developer
1. **index.html**: Main HTML file with proper script loading
2. **config.json**: Configuration file with all categories and tasks
3. **React Components**: All components as separate .jsx files
   - App.jsx
   - Sidebar.jsx
   - WelcomePage.jsx
   - ReportViewer.jsx
   - TableOfContents.jsx
4. **Utilities**: markdown.js for markdown parsing helpers
5. **Styles**: main.css with all styling
6. **README**: Instructions for adding new reports and updating config

### Testing Requirements
- Verify all reports load correctly
- Test navigation between reports
- Confirm table of contents links work
- Check styling across different report sizes
- Test with different markdown features in reports
- Verify PDF link works

---

## Maintenance Notes

### Adding New Reports
1. Place the markdown file in `/reports/` directory following naming convention
2. Add entry to `config.json` under appropriate category
3. Update config with friendly display name
4. No code changes required

### Updating Configuration
- Edit `config.json` to add categories, tasks, or update display names
- Changes take effect on page reload (no build step)

### Updating Study Metadata
- Edit the `study` section in `config.json` to update title, authors, or paper URL

---

## Example Report Metadata

Each report markdown file should have metadata at the top (as seen in the example):
```markdown
# Report: Bug Fixing/Debugging

**Task Category:** development

**Generated:** 2025-09-30 22:31:20

**Number of Participants:** 123

---
```

This metadata should be rendered as part of the report content.

---

## Summary

This specification defines a static, single-page React application for displaying qualitative research reports. The site uses in-browser React (no build step), is fully static for GitHub Pages deployment, and provides an intuitive navigation experience with auto-generated table of contents for each report. The design prioritizes readability, simplicity, and ease of maintenance.
