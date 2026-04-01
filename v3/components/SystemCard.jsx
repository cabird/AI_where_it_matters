Explorer.SystemCard = function SystemCard({ system, onClick }) {
  const meta = window.categoryMeta[system.category];
  return (
    <div className="sys-card" onClick={() => onClick(system)}>
      <div className="sys-card-top">
        <span className="sys-card-badge" style={{ color: meta?.color, background: meta?.light }}>{meta?.label}</span>
        <div style={{ textAlign: 'right' }}>
          <span className="sys-card-pct">{system.prevalence}%</span>
          <span className="sys-card-pct-sub"> of {system.respondents}</span>
        </div>
      </div>
      <h3 className="sys-card-name">{system.shortName}</h3>
      <p className="sys-card-desc">{system.problem}</p>
      <span className="sys-card-arrow">→</span>
    </div>
  );
};
