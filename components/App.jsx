const { useState, useRef } = React;
const { Icon, NavBar, Hero, ScatterPlot, TaskList, SystemsCatalog, PaperReader, ChatPanel, ChatBanner, Footer, Modal, ReportModal } = Explorer;

Explorer.App = function App() {
  const [activeTab, setActiveTab] = useState('systems');
  const [highlightedCategory, setHighlightedCategory] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportContent, setReportContent] = useState('');
  const [reportLoading, setReportLoading] = useState(false);
  const chatRef = useRef(null);

  const meta = window.categoryMeta;

  const handlePointClick = (taskData) => {
    setSelectedReport(taskData);
    setReportLoading(true);
    setReportOpen(true);

    fetch(taskData.manualReportPath)
      .then(r => { if (!r.ok) throw new Error('Not available'); return r.text(); })
      .then(md => {
        const renderer = window.markdownit({ html: true, linkify: true, typographer: true })
          .use(window.markdownItAnchor.default, { permalink: false, slugify: s => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-')) });
        setReportContent(renderer.render(md));
        setReportLoading(false);
      })
      .catch(err => { setReportContent('<p>Error: ' + err.message + '</p>'); setReportLoading(false); });
  };

  const closeReport = () => { setReportOpen(false); setSelectedReport(null); setReportContent(''); };

  return (
    <div>
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      <ChatBanner onChatOpen={() => {
        const fab = document.querySelector('.chat-fab');
        if (fab) fab.click();
      }} />
      <Hero />

      <div className="exhibit-area">
        <div className="exhibit-tab-bar">
          <button className={`exhibit-tab${activeTab === 'systems' ? ' exhibit-tab-active' : ''}`} onClick={() => setActiveTab('systems')}>
            <Icon name="LayoutGrid" size={15} style={{ marginRight: 6 }} />
            22 Systems Catalog
          </button>
          <button className={`exhibit-tab${activeTab === 'map' ? ' exhibit-tab-active' : ''}`} onClick={() => setActiveTab('map')}>
            <Icon name="ScatterChart" size={15} style={{ marginRight: 6 }} />
            AI Opportunity Space
          </button>
          <button className={`exhibit-tab${activeTab === 'papers' ? ' exhibit-tab-active' : ''}`} onClick={() => setActiveTab('papers')}>
            <Icon name="BookOpen" size={15} style={{ marginRight: 6 }} />
            Browse Papers Inline
          </button>
        </div>

        {activeTab === 'systems' && <SystemsCatalog />}

        {activeTab === 'map' && (
          <div className="map-two-panel">
            <div className="map-two-panel-chart">
              <ScatterPlot
                onPointClick={handlePointClick}
                highlightedCategory={highlightedCategory}
                onCategoryHover={setHighlightedCategory}
                hoveredTask={hoveredTask}
              />
            </div>
            <TaskList
              onTaskClick={handlePointClick}
              hoveredTask={hoveredTask}
              onTaskHover={setHoveredTask}
            />
          </div>
        )}

        {activeTab === 'papers' && <PaperReader />}
      </div>

      <Footer />
      <ChatPanel />

      <ReportModal
        isOpen={reportOpen}
        onClose={closeReport}
        title={selectedReport?.fullName || selectedReport?.task}
        badge={selectedReport ? meta[selectedReport.category]?.label : ''}
        content={reportContent}
        loading={reportLoading}
      />
    </div>
  );
};
