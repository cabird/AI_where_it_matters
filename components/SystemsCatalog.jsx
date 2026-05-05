const { useState } = React;
const { SystemCard, SystemDetail, Modal } = Explorer;

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
  else if (sortBy === 'category') filtered.sort((a, b) => {
    const catOrder = categories.indexOf(a.category) - categories.indexOf(b.category);
    return catOrder !== 0 ? catOrder : b.prevalence - a.prevalence;
  });

  return (
    <div>
      <div className="catalog-header">
        <div>
          <h3>22 Systems Developers Want Built</h3>
          <p>Click any card for full details, constraints, and developer quotes.</p>
          <p className="catalog-cite">
            Each system, the methodology behind how it was identified, and the full thematic analysis are described in detail in the paper:{' '}
            <a href="https://arxiv.org/abs/2604.07830" target="_blank" rel="noopener noreferrer">
              <em>To Copilot and Beyond: 22 AI Systems Developers Want Built</em>
            </a>
            . If you build on this work, please cite it.
          </p>
          <details className="catalog-bibtex">
            <summary>BibTeX</summary>
            <pre>{`@article{choudhuri2026beyondcopilot,
  title={To Copilot and Beyond: 22 AI Systems Developers Want Built},
  author={Choudhuri, Rudrajit and Bird, Christian and Badea, Carmen and Sarma, Anita},
  year={2026},
  eprint={2604.07830},
  archivePrefix={arXiv},
  primaryClass={cs.SE},
  url={https://arxiv.org/abs/2604.07830}
}`}</pre>
          </details>
        </div>
        <select className="catalog-sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="prevalence">Sort by prevalence</option>
          <option value="category">Sort by category</option>
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

      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.name} badge={selected ? meta[selected.category]?.label : ''} wide>
        {selected && <SystemDetail system={selected} />}
      </Modal>
    </div>
  );
};
