const { ScatterPlot } = Observatory;

Observatory.PaperOneWing = function PaperOneWing({ onPointClick, onCategoryHover, highlightedCategory }) {
  return (
    <section className="section" id="paper-one">
      <div className="section-header">
        <span className="section-number">Paper I</span>
        <h2 className="section-title">Where Developers Want AI</h2>
        <p className="section-description">
          An openness-vs-usage map of 20 software engineering tasks. Tasks in the upper-right are both highly used and highly wanted.
          Tasks in the lower-right represent unmet demand — developers want AI there but aren't using it yet.
        </p>
      </div>

      <div className="scatter-container">
        <div className="scatter-instructions">
          Click any data point to read a detailed qualitative analysis of developer preferences for that task.
          Hover over legend items to highlight categories across both visualizations.
        </div>
        <ScatterPlot
          onPointClick={onPointClick}
          onCategoryHover={onCategoryHover}
          highlightedCategory={highlightedCategory}
        />
      </div>
    </section>
  );
};
