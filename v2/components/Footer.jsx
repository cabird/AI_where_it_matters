Observatory.Footer = function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-paper">
          <div className="footer-paper-label">Paper I</div>
          <div className="footer-paper-title">AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work</div>
          <div className="footer-paper-authors">Choudhuri, Badea, Bird, Butler, DeLine, Houck (2026)</div>
          <a href="../paper.pdf" className="footer-paper-link">
            Download PDF →
          </a>
        </div>
        <div className="footer-paper">
          <div className="footer-paper-label">Paper II</div>
          <div className="footer-paper-title">What's Beyond Copilot? 22 AI Systems Developers Want Built</div>
          <div className="footer-paper-authors">Choudhuri, Bird, Badea, Sarma (2026)</div>
          <a href="../paper2.pdf" className="footer-paper-link">
            Download PDF →
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Microsoft Research · Oregon State University · Survey of 860 professional developers · July 2025</p>
        <p style={{ marginTop: '8px' }}>Data availability: <a href="https://aka.ms/AI-Where-It-Matters" style={{ color: '#c2722a', textDecoration: 'none' }}>https://aka.ms/AI-Where-It-Matters</a></p>
      </div>
    </footer>
  );
};
