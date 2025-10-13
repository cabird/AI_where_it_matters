// Modal component for displaying reports and about page
window.Modal = function Modal({ isOpen, onClose, title, categoryBadge, children }) {
  const { useEffect, useRef } = React;

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Detect if device is mobile based on screen width
  const isActuallyMobile = typeof window !== 'undefined' ? window.screen.width < 768 : false;

  // Manage viewport for mobile - make report non-zoomable
  useEffect(() => {
    if (!isActuallyMobile || !isOpen) return;

    const viewport = document.querySelector('meta[name="viewport"]');
    const originalContent = viewport.content;

    // Set viewport to normal, non-zoomable for reading reports
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

    return () => {
      // When closing, check if we should restore zoomable viewport
      // If the chart modal is still open (has elements with high z-index), restore zoomable viewport
      const chartModal = document.querySelector('[style*="z-index: 9999"]');
      if (chartModal) {
        // Restore zoomable viewport for chart
        viewport.content = 'width=900, initial-scale=1.0, minimum-scale=0.3, maximum-scale=3.0, user-scalable=yes';
      } else {
        // Otherwise restore original viewport
        viewport.content = originalContent;
      }
    };
  }, [isActuallyMobile, isOpen]);

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

  // Handle overlay click (click outside modal) - disabled on mobile
  const handleOverlayClick = (e) => {
    if (!isActuallyMobile && e.target === e.currentTarget) {
      onClose();
    }
  };

  // Mobile: full-screen modal
  if (isActuallyMobile) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'white',
          borderBottom: '2px solid #e0e0e0',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10
        }}>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              border: 'none',
              background: 'transparent',
              color: '#4a5568',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            {title && <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a202c', margin: 0 }}>{title}</h2>}
            {categoryBadge && (
              <span style={{
                display: 'inline-block',
                marginTop: '4px',
                padding: '4px 10px',
                background: '#667eea',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
                borderRadius: '12px'
              }}>{categoryBadge}</span>
            )}
          </div>
        </div>
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px',
          WebkitOverflowScrolling: 'touch'
        }}>
          {children}
        </div>
      </div>
    );
  }

  // Desktop: centered modal with overlay
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
