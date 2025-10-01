window.WelcomePage = function WelcomePage() {
    return (
        <div className="welcome-page">
            <h1>Developer AI Preferences Research Dashboard</h1>

            <p>
                This dashboard presents qualitative analysis of developer preferences for AI support
                across all aspects of their daily work. The findings are based on a
                research study involving 860 professional software developers.
            </p>

            <h2>About the Study</h2>
            <p>
                This research examines where, why, and how developers want AI support across 21
                different software engineering tasks, organized into 5 main categories:
            </p>
            <ul>
                <li><strong>Design &amp; Planning</strong> - Requirements, architecture, and project planning tasks</li>
                <li><strong>Development</strong> - Coding, debugging, refactoring, and optimization</li>
                <li><strong>Quality &amp; Risk</strong> - Testing, code review, and security</li>
                <li><strong>Infrastructure &amp; Operations</strong> - DevOps, deployment, and monitoring</li>
                <li><strong>Meta Work</strong> - Documentation, learning, communication, and mentoring</li>
            </ul>

            <h2>How to Use This Dashboard</h2>
            <p>
                Navigate through the categories and tasks using the sidebar on the left. Each task
                report provides detailed qualitative insights into:
            </p>
            <ul>
                <li>How developers currently use AI for that task</li>
                <li>Preferred interaction patterns and workflows</li>
                <li>Common concerns and limitations</li>
                <li>Opportunities for improvement</li>
            </ul>

            <h2>Research Paper</h2>
            <p>
                For the full study methodology and quantitative findings, please refer to the
                research paper: <a href="paper.pdf" target="_blank" rel="noopener noreferrer">
                    "Understanding Developer Preferences for AI-Powered Coding Assistance Across Software Engineering Tasks"
                </a>
            </p>

            <p>
                <em>Select a task from the sidebar to begin exploring the findings.</em>
            </p>
        </div>
    );
};
