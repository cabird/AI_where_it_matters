const { useState, useEffect } = React;

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Modal state
    const [reportModalOpen, setReportModalOpen] = useState(false);
    const [aboutModalOpen, setAboutModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);
    const [reportContent, setReportContent] = useState('');
    const [reportLoading, setReportLoading] = useState(false);

    // Initialize app
    useEffect(() => {
        setLoading(false);
    }, []);

    // Handle data point click from visualization
    const handleDataPointClick = (taskData) => {
        setSelectedReport(taskData);
        setReportLoading(true);
        setReportModalOpen(true);

        // Load manual report only
        fetch(taskData.manualReportPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Report not available');
                }
                return response.text();
            })
            .then(markdown => {
                // Render markdown
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
                setReportContent(`<p>Error loading report: ${err.message}</p>`);
                setReportLoading(false);
            });
    };

    // Handle About button click
    const handleAboutClick = () => {
        setAboutModalOpen(true);
    };

    // Close modals and return to visualization
    const handleCloseReportModal = () => {
        setReportModalOpen(false);
        setSelectedReport(null);
        setReportContent('');
    };

    const handleCloseAboutModal = () => {
        setAboutModalOpen(false);
    };

    if (loading) {
        return (
            <div className="app-container">
                <div className="loading">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app-container">
                <div className="error">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="app-container">
            <div className="main-content">
                <div className="content-wrapper">
                    <window.VisualizationPage
                        onDataPointClick={handleDataPointClick}
                        onAboutClick={handleAboutClick}
                    />
                </div>
            </div>

            {/* Report Modal */}
            <window.Modal
                isOpen={reportModalOpen}
                onClose={handleCloseReportModal}
                title={selectedReport?.task}
                categoryBadge={selectedReport?.category}
            >
                {reportLoading ? (
                    <div className="modal-loading">Loading report...</div>
                ) : (
                    <div
                        className="report-content"
                        dangerouslySetInnerHTML={{ __html: reportContent }}
                    />
                )}
            </window.Modal>

            {/* About Modal */}
            <window.Modal
                isOpen={aboutModalOpen}
                onClose={handleCloseAboutModal}
                title="About This Dashboard"
            >
                <window.WelcomePage />
            </window.Modal>
        </div>
    );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
