Explorer.Footer = function Footer() {
  return (
    <div>
      <footer className="footer">
        <div>
          <div className="footer-paper-label">Paper I</div>
          <div className="footer-paper-title">AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work</div>
          <div className="footer-paper-authors">Choudhuri, Badea, Bird, Butler, DeLine, Houck (2026)</div>
          <a href="paper1.pdf" className="footer-paper-link">Download PDF →</a>
        </div>
        <div>
          <div className="footer-paper-label">Paper II</div>
          <div className="footer-paper-title">To Copilot and Beyond: 22 AI Systems Developers Want Built</div>
          <div className="footer-paper-authors">Choudhuri, Bird, Badea, Sarma (2026)</div>
          <a href="paper2.pdf" className="footer-paper-link">Download PDF →</a>
        </div>
      </footer>
      <div className="footer-report-link">
        <a href="report.html" target="_blank" rel="noopener noreferrer">
          Methodology &amp; thematic analysis report — codebook, IRR, pipeline, and supporting quotes →
        </a>
      </div>
      <div className="footer-bottom">
        Microsoft Research · Oregon State University · Survey of 860 professional developers · July 2025
      </div>
    </div>
  );
};
