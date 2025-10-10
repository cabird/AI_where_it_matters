// Visualization landing page with scatter plot and About button
window.VisualizationPage = function VisualizationPage({ onDataPointClick, onAboutClick }) {
  const ScatterPlot = window.ScatterPlot;

  return (
    <div className="visualization-page">
      <div className="visualization-content">
        <div className="page-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4H8"/>
            <rect width="16" height="12" x="4" y="8" rx="2"/>
            <path d="M2 14h2"/>
            <path d="M20 14h2"/>
            <path d="M15 13v2"/>
            <path d="M9 13v2"/>
          </svg>
        </div>

        <h1 className="page-title">AI Where It Matters</h1>
        <p className="page-subtitle">Where, Why, and How Developers Want AI Support in Daily Work</p>
        <p className="page-authors">
          Rudrajit Choudhuri, Carmen Badea, Christian Bird, Jenna L. Butler, Robert DeLine, Brian Houck
        </p>

        <div className="study-info">
          <div className="info-row">
            <span className="info-label">Participants</span>
            <span className="info-value">860 developers</span>
          </div>
          <div className="info-row">
            <span className="info-label">Organization</span>
            <span className="info-value">Microsoft</span>
          </div>
          <div className="info-row">
            <span className="info-label">Tasks Analyzed</span>
            <span className="info-value">20 SE task categories</span>
          </div>
          <div className="info-row">
            <span className="info-label">Study Date</span>
            <span className="info-value">July 2025</span>
          </div>
        </div>

        <div className="action-buttons">
          <button className="about-button" onClick={onAboutClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            About This Dashboard
          </button>
          <a href="paper.pdf" className="paper-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Read the Full Paper
          </a>
        </div>

        <div className="chart-instructions">
          This chart visualizes developer attitudes toward AI tools across 20 different software engineering tasks. The horizontal axis shows openness to AI support, while the vertical axis shows current AI usage levels. Click any point to read detailed analysis of developer preferences, concerns, and recommendations for that specific task.
        </div>

        <div className="visualization-chart-container">
          <ScatterPlot onPointClick={onDataPointClick} />
        </div>
      </div>
    </div>
  );
};
