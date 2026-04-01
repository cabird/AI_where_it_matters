const { useState } = React;
const { SystemCard, Modal } = Explorer;

Explorer.SystemsCatalog = function SystemsCatalog() {
  const [filter, setFilter] = useState(null);
  const [sortBy, setSortBy] = useState('prevalence');
  const [selected, setSelected] = useState(null);
  const systems = window.systemsData || [];
  const meta = window.categoryMeta;
  const categories = ['Development', 'Quality-Risk', 'Design-Planning', 'Infra-Ops', 'Meta-work'];

  let filtered = filter ? systems.filter(s => s.category === filter) : [...systems];
  if (sortBy === 'prevalence') filtered.sort((a, b) => b.prevalence - a.prevalence);
  else if (sortBy === 'alpha') filtered.sort((a, b) => a.shortName.localeCompare(b.shortName));

  return (
    <div>
      <div className="catalog-header">
        <div>
          <h3>22 Systems Developers Want Built</h3>
          <p>Click any card for full details, constraints, and developer quotes.</p>
        </div>
        <select className="catalog-sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="prevalence">Sort by prevalence</option>
          <option value="alpha">Sort alphabetically</option>
        </select>
      </div>

      <div className="catalog-filters">
        <button className={`catalog-pill${!filter ? ' catalog-pill-active' : ''}`} style={!filter ? { background: '#44403c', color: '#fff' } : {}} onClick={() => setFilter(null)}>
          All ({systems.length})
        </button>
        {categories.map(c => (
          <button key={c} className={`catalog-pill${filter === c ? ' catalog-pill-active' : ''}`}
            style={filter === c ? { background: meta[c]?.color } : {}}
            onClick={() => setFilter(filter === c ? null : c)}>
            {meta[c]?.label} ({systems.filter(s => s.category === c).length})
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {filtered.map(s => <SystemCard key={s.id} system={s} onClick={setSelected} />)}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.name} badge={selected ? meta[selected.category]?.label : ''}>
        {selected && (
          <div>
            <div className="detail-bar">
              <div className="detail-bar-fill" style={{ width: `${selected.prevalence}%`, background: meta[selected.category]?.color }} />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-400)', marginBottom: 28 }}>
              {selected.prevalence}% of {selected.respondents} respondents in {meta[selected.category]?.label}
            </div>
            <div className="detail-section">
              <span className="detail-label">The Problem</span>
              <p className="detail-text">{selected.problem}</p>
            </div>
            <div className="detail-section">
              <span className="detail-label">What It Would Do</span>
              <p className="detail-text">{selected.capabilities}</p>
            </div>
            <div className="detail-section">
              <span className="detail-label">Constraints & Guardrails</span>
              <p className="detail-text">{selected.constraints}</p>
            </div>
            <div className="detail-section">
              <span className="detail-label">Developer Voice</span>
              <div className="detail-quote">
                "{selected.quote}"
                <span className="detail-quote-author">— {selected.quoteAuthor}</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
