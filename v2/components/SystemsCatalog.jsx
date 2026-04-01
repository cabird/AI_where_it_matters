const { useState } = React;
const { SystemCard, Modal } = Observatory;

Observatory.SystemsCatalog = function SystemsCatalog({ highlightedCategory }) {
  const [filter, setFilter] = useState(null);
  const [selectedSystem, setSelectedSystem] = useState(null);
  const systems = window.systemsData || [];
  const meta = window.categoryMeta;
  const categories = ['Development', 'Quality-Risk', 'Design-Planning', 'Infra-Ops', 'Meta-work'];

  const activeFilter = highlightedCategory || filter;
  const filtered = activeFilter ? systems.filter(s => s.category === activeFilter) : systems;

  const handleSystemClick = (system) => {
    setSelectedSystem(system);
  };

  const closeModal = () => {
    setSelectedSystem(null);
  };

  return (
    <section className="section" id="paper-two">
      <div className="section-header">
        <span className="section-number">Paper II</span>
        <h2 className="section-title">22 Systems Developers Want Built</h2>
        <p className="section-description">
          From the same 860 developers: concrete descriptions of AI systems that don't yet exist,
          each with the problem it solves, what makes it hard, and the constraints developers insist on.
        </p>
      </div>

      <div className="catalog-controls">
        <button
          className={`catalog-filter${!filter && !highlightedCategory ? ' active' : ''}`}
          onClick={() => setFilter(null)}
        >
          All 22 Systems
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`catalog-filter${activeFilter === cat ? ' active' : ''}`}
            onClick={() => setFilter(filter === cat ? null : cat)}
            style={activeFilter === cat ? { background: meta[cat]?.color, borderColor: meta[cat]?.color } : {}}
          >
            {meta[cat]?.label} ({systems.filter(s => s.category === cat).length})
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {filtered.map(system => (
          <SystemCard
            key={system.id}
            system={system}
            highlighted={highlightedCategory && highlightedCategory === system.category}
            onClick={handleSystemClick}
          />
        ))}
      </div>

      {/* System detail modal */}
      <Modal
        isOpen={!!selectedSystem}
        onClose={closeModal}
        title={selectedSystem?.name}
        categoryBadge={selectedSystem ? (meta[selectedSystem.category]?.label || selectedSystem.category) : ''}
      >
        {selectedSystem && (
          <div>
            <div className="system-prevalence-bar">
              <div
                className="system-prevalence-fill"
                style={{
                  width: `${selectedSystem.prevalence}%`,
                  background: meta[selectedSystem.category]?.color
                }}
              />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-400)', marginBottom: '32px' }}>
              {selectedSystem.prevalence}% of {selectedSystem.respondents} respondents in {meta[selectedSystem.category]?.label}
            </div>

            <div className="system-detail-section">
              <span className="system-detail-label">The Problem</span>
              <p className="system-detail-text">{selectedSystem.problem}</p>
            </div>

            <div className="system-detail-section">
              <span className="system-detail-label">What It Would Do</span>
              <p className="system-detail-text">{selectedSystem.capabilities}</p>
            </div>

            <div className="system-detail-section">
              <span className="system-detail-label">Constraints & Guardrails</span>
              <p className="system-detail-text">{selectedSystem.constraints}</p>
            </div>

            <div className="system-detail-section">
              <span className="system-detail-label">Developer Voice</span>
              <div className="system-detail-quote">
                "{selectedSystem.quote}"
                <span className="system-detail-quote-author">— {selectedSystem.quoteAuthor}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
