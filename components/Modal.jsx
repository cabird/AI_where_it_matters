const { useEffect, useCallback, useState, useRef } = React;

Explorer.Modal = function Modal({ isOpen, onClose, title, badge, wide, children }) {
  const handleEscape = useCallback((e) => { if (e.key === 'Escape') onClose(); }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => { document.removeEventListener('keydown', handleEscape); document.body.style.overflow = ''; };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`modal-container${wide ? ' modal-container-wide' : ''}`}>
        <div className="modal-header">
          <div className="modal-title-area">
            {badge && <span className="modal-badge">{badge}</span>}
            <h2 className="modal-title">{title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

// Report modal with TOC sidebar
Explorer.ReportModal = function ReportModal({ isOpen, onClose, title, badge, content, loading }) {
  const bodyRef = useRef(null);
  const [toc, setToc] = useState([]);

  // Extract TOC from rendered HTML
  useEffect(() => {
    if (!content || !bodyRef.current) { setToc([]); return; }

    // Wait a tick for DOM to update
    setTimeout(() => {
      if (!bodyRef.current) return;
      const headings = bodyRef.current.querySelectorAll('h1, h2, h3, h4');
      const items = [];
      headings.forEach((h, i) => {
        const id = 'toc-heading-' + i;
        h.setAttribute('id', id);
        // Truncate at open parenthesis for cleaner TOC
        let text = h.textContent;
        const parenIdx = text.indexOf('(');
        if (parenIdx > 0) text = text.substring(0, parenIdx).trim();

        items.push({
          id,
          text,
          level: parseInt(h.tagName.charAt(1)),
        });
      });
      setToc(items);
    }, 50);
  }, [content]);

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el && bodyRef.current) {
      bodyRef.current.scrollTo({ top: el.offsetTop - bodyRef.current.offsetTop - 20, behavior: 'smooth' });
    }
  };

  const handleEscape = useCallback((e) => { if (e.key === 'Escape') onClose(); }, [onClose]);
  useEffect(() => {
    if (isOpen) { document.addEventListener('keydown', handleEscape); document.body.style.overflow = 'hidden'; }
    return () => { document.removeEventListener('keydown', handleEscape); document.body.style.overflow = ''; };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-container modal-container-wide">
        <div className="modal-header">
          <div className="modal-title-area">
            {badge && <span className="modal-badge">{badge}</span>}
            <h2 className="modal-title">{title}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-body-with-toc">
          {/* TOC sidebar */}
          {toc.length > 0 && (
            <nav className="modal-toc">
              <div className="modal-toc-title">Outline</div>
              {toc.map((item) => (
                <button
                  key={item.id}
                  className={`modal-toc-item modal-toc-h${item.level}`}
                  onClick={() => scrollToHeading(item.id)}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          )}
          {/* Content */}
          <div className="modal-body-main" ref={bodyRef}>
            {loading ? (
              <div className="modal-loading">Loading report...</div>
            ) : (
              <div className="report-content" dangerouslySetInnerHTML={{ __html: content }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
