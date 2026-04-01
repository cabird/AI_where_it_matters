const { useState } = React;
const { NavBar, Hero, PaperOneWing, SystemsCatalog, ChatSection, Footer, Modal } = Observatory;

Observatory.App = function App() {
  const [highlightedCategory, setHighlightedCategory] = useState(null);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportContent, setReportContent] = useState('');
  const [reportLoading, setReportLoading] = useState(false);

  const handleDataPointClick = (taskData) => {
    setSelectedReport(taskData);
    setReportLoading(true);
    setReportModalOpen(true);

    // Reports are in the parent directory relative to v2
    const reportPath = '../' + taskData.manualReportPath;

    fetch(reportPath)
      .then(response => {
        if (!response.ok) throw new Error('Report not available');
        return response.text();
      })
      .then(markdown => {
        const md = window.markdownit({
          html: true,
          linkify: true,
          typographer: true
        }).use(window.markdownItAnchor.default, {
          permalink: false,
          slugify: (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'))
        });
        const html = md.render(markdown);
        setReportContent(html);
        setReportLoading(false);
      })
      .catch(err => {
        setReportContent('<p>Error loading report: ' + err.message + '</p>');
        setReportLoading(false);
      });
  };

  const handleCloseReport = () => {
    setReportModalOpen(false);
    setSelectedReport(null);
    setReportContent('');
  };

  const handleCategoryHover = (category) => {
    setHighlightedCategory(category);
  };

  const meta = window.categoryMeta;

  return (
    <div>
      <NavBar />
      <Hero />

      <PaperOneWing
        onPointClick={handleDataPointClick}
        onCategoryHover={handleCategoryHover}
        highlightedCategory={highlightedCategory}
      />

      <div className="section-divider">
        <div className="section-divider-line" />
      </div>

      <ChatSection />

      <div className="section-divider" style={{ background: 'var(--cream)' }}>
        <div className="section-divider-line" />
      </div>

      <SystemsCatalog highlightedCategory={highlightedCategory} />

      <Footer />

      {/* Report Modal for Paper 1 tasks */}
      <Modal
        isOpen={reportModalOpen}
        onClose={handleCloseReport}
        title={selectedReport?.fullName || selectedReport?.task}
        categoryBadge={selectedReport ? (meta[selectedReport.category]?.label || selectedReport.category) : ''}
      >
        {reportLoading ? (
          <div className="modal-loading">Loading report...</div>
        ) : (
          <div className="report-content" dangerouslySetInnerHTML={{ __html: reportContent }} />
        )}
      </Modal>
    </div>
  );
};
