Observatory.SystemCard = function SystemCard({ system, highlighted, onClick }) {
  const meta = window.categoryMeta[system.category];
  const cardClass = `system-card${highlighted ? ' highlighted' : ''}`;

  return (
    <div
      className={cardClass}
      style={{ '--card-accent': meta?.color || '#6b7280' }}
      onClick={() => onClick(system)}
    >
      <div className="system-card-header">
        <span className="system-card-category">{meta?.label || system.category}</span>
        <div style={{ textAlign: 'right' }}>
          <span className="system-card-prevalence">{system.prevalence}%</span>
          <span className="system-card-prevalence-label">of {system.respondents} devs</span>
        </div>
      </div>
      <h3 className="system-card-name">{system.shortName}</h3>
      <p className="system-card-problem">{system.problem}</p>
    </div>
  );
};
