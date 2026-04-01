const { useEffect, useCallback } = React;

Observatory.Modal = function Modal({ isOpen, onClose, title, categoryBadge, children }) {
  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title-wrapper">
            {categoryBadge && <span className="modal-category-badge">{categoryBadge}</span>}
            <h2 className="modal-title">{title}</h2>
          </div>
          <button className="modal-close-button" onClick={onClose} aria-label="Close modal">✕</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};
