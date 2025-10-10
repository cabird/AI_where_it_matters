# Rudy Dashboard - Site Files

This directory contains all the files needed to deploy the interactive visualization dashboard.

## Contents

- **index.html** - Main HTML file
- **chartData.js** - Chart data with z-scores and label positioning
- **config.json** - Configuration for sidebar navigation
- **paper.pdf** - Research paper PDF
- **components/** - React components (8 files)
  - App.jsx
  - Modal.jsx
  - ReportViewer.jsx
  - ScatterPlot.jsx
  - Sidebar.jsx
  - TableOfContents.jsx
  - VisualizationPage.jsx
  - WelcomePage.jsx
- **styles/** - CSS styling
  - main.css
- **manually_coded_reports/** - Manual coded reports (18 markdown files)

## Deployment

This is a static site that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files maintaining the directory structure.

## Local Testing

Run a local server:
```bash
cd site
python3 -m http.server 8000
```

Then navigate to http://localhost:8000
