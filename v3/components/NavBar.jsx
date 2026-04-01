const { Icon } = Explorer;

Explorer.NavBar = function NavBar({ activeTab, onTabChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          AI Research Explorer
        </a>
        <div className="navbar-tabs">
          <button className={`navbar-tab${activeTab === 'map' ? ' navbar-tab-active' : ''}`} onClick={() => onTabChange('map')}>
            The Map
          </button>
          <button className={`navbar-tab${activeTab === 'systems' ? ' navbar-tab-active' : ''}`} onClick={() => onTabChange('systems')}>
            22 Systems
          </button>
          <button className={`navbar-tab${activeTab === 'papers' ? ' navbar-tab-active' : ''}`} onClick={() => onTabChange('papers')}>
            Papers
          </button>
        </div>
        <div className="navbar-actions">
          <a href="../paper.pdf" className="navbar-pdf-link" target="_blank" rel="noopener noreferrer">
            <Icon name="FileDown" size={13} style={{ marginRight: 3 }} /> PDF I
          </a>
          <a href="../paper2.pdf" className="navbar-pdf-link" target="_blank" rel="noopener noreferrer">
            <Icon name="FileDown" size={13} style={{ marginRight: 3 }} /> PDF II
          </a>
        </div>
      </div>
    </nav>
  );
};
