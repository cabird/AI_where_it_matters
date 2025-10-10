// Modal component for displaying reports and about page
window.Modal = function Modal({ isOpen, onClose, title, categoryBadge, children }) {
  const { useEffect, useRef } = React;

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Focus the close button when modal opens
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle overlay click (click outside modal)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" ref={modalRef}>
        <div className="modal-header">
          <div className="modal-title-wrapper">
            {title && <h2 className="modal-title">{title}</h2>}
            {categoryBadge && (
              <span className="modal-category-badge">{categoryBadge}</span>
            )}
          </div>
          <button
            ref={closeButtonRef}
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};
