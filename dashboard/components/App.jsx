const { useState, useEffect } = React;

function App() {
    const [config, setConfig] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('config.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load configuration');
                }
                return response.json();
            })
            .then(data => {
                setConfig(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleTaskSelect = (task) => {
        setSelectedTask(task);
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
            <window.Sidebar
                config={config}
                selectedTask={selectedTask}
                onTaskSelect={handleTaskSelect}
            />
            <div className="main-content">
                <div className="content-wrapper">
                    {selectedTask ? (
                        <window.ReportViewer reportFile={selectedTask.reportFile} />
                    ) : (
                        <window.WelcomePage />
                    )}
                </div>
            </div>
        </div>
    );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
