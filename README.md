# AI Where It Matters — Developer Research Dashboard

An interactive visualization dashboard exploring how and where developers use AI tools.

## Contents

- **index.html** - Main HTML file (entry point)
- **chartData.js** - Chart data with z-scores and label positioning
- **systemsData.js** - AI systems catalog data
- **paper.pdf** - Research paper PDF
- **components/** - React components (loaded via Babel standalone)
  - App.jsx, NavBar.jsx, Hero.jsx, ScatterPlot.jsx, TaskList.jsx
  - SystemCard.jsx, SystemsCatalog.jsx, PaperReader.jsx
  - ChatPanel.jsx, Modal.jsx, Footer.jsx, Icon.jsx
- **styles/** - CSS styling
  - main.css
- **manually_coded_reports/** - Markdown report files
- **papers/** - Additional paper source files
- **v1/, v2/, v3/** - Previous versions of the dashboard

## Running Locally

> **Why a local server is required:** The app uses `fetch()` to load `.jsx` components and markdown reports at runtime. Browsers block these requests when opening `index.html` directly from the filesystem (`file://` protocol) due to CORS restrictions. You must serve the files through a local HTTP server.

### Option 1 — Python (no installation needed)

```bash
# From the repository root:
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

### Option 2 — Node.js `serve` (via npx, no global install needed)

```bash
# From the repository root:
npx serve .
```

Then open the URL printed in the terminal (usually **http://localhost:3000**).

### Option 3 — VS Code Live Server extension

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.
2. Open the repository folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.

The browser will open automatically and reload on file changes.

### Option 4 — Node.js `http-server`

```bash
npm install -g http-server
http-server . -p 8000
```

Then open **http://localhost:8000**.

## Deployment

This is a static site (no build step required) that can be deployed to any static hosting service:

- **GitHub Pages** — enable in repo settings, point to the root or `/docs` folder
- **Netlify** — drag-and-drop the repository folder or connect via Git
- **Vercel** — connect the repository; no configuration needed for static sites
- Any other static hosting service

Simply upload all files maintaining the directory structure.
