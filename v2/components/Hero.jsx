Observatory.Hero = function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-eyebrow">Research Observatory</div>
        <h1 className="hero-title">
          What Developers <em>Actually</em> Want from AI
        </h1>
        <p className="hero-subtitle">
          Two companion studies from the same survey of 860 professional developers at Microsoft.
          The first maps <strong>where</strong> developers want AI support across 20 tasks.
          The second describes <strong>what</strong> to build: 22 concrete systems, each with the constraints developers placed on how it should behave.
        </p>
        <div className="hero-authors">
          Rudrajit Choudhuri &middot; Carmen Badea &middot; Christian Bird &middot; Jenna L. Butler &middot; Robert DeLine &middot; Brian Houck &middot; Anita Sarma
        </div>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="hero-meta-value">860</span>
            <span className="hero-meta-label">Developers</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-value">20</span>
            <span className="hero-meta-label">SE Tasks</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-value">22</span>
            <span className="hero-meta-label">Systems Described</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-value">5</span>
            <span className="hero-meta-label">Task Categories</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="#paper-one" className="btn-outline">Explore the Map</a>
          <a href="#paper-two" className="btn-outline">View the Systems</a>
          <a href="#chat" className="btn-outline">Ask a Question</a>
        </div>
      </div>
      <div className="hero-scroll-hint">Scroll to explore</div>
    </section>
  );
};
