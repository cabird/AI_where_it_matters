window.WelcomePage = function WelcomePage() {
    return (
        <div className="welcome-page">
            <h1>AI Where It Matters Data Explorer</h1>

            <p>
                This data explorer presents qualitative analysis of developer preferences for AI support
                across all aspects of their daily work. The findings are based on a
                research study involving 860 professional software developers.
            </p>

            <h2>About the Study</h2>

            <h3></h3>
            <p>
            This research examines where, why, and how software developers want AI support across 20 different software engineering tasks, 
            showing that developers' task appraisals predict AI adoption and shape context-sensitive Responsible AI priorities, organized into 5 main categories:
            </p>
            <ul>
                <li><strong>Design &amp; Planning</strong> - Requirements, architecture, and project planning tasks</li>
                <li><strong>Development</strong> - Coding, debugging, refactoring, and optimization</li>
                <li><strong>Quality &amp; Risk</strong> - Testing, code review, and security</li>
                <li><strong>Infrastructure &amp; Operations</strong> - DevOps, deployment, and monitoring</li>
                <li><strong>Meta Work</strong> - Documentation, learning, communication, and mentoring</li>
            </ul>

            <h2>Key Insights</h2>
            <ul>
            <li>Task appraisals predict AI adoption: higher perceived value, accountability, and task demands increase openness to and use of AI, 
                while identity alignment reduces openness but can increase selective, complementary use. </li>
	        <li>Tasks cluster into distinct groups (Core work; People & AI-building; Ops & Coordination) and fall into four zones 
            (Build, Improve, Sustain, De-prioritize), revealing where need outpaces current use and where AI should focus on 
            augmentation versus abstention.</li>
	        <li>Responsible-AI priorities are context-dependent: systems-facing work demands reliability, safety, privacy/security, 
            transparency, goal maintenance, and steerability, while human-facing tasks elevate fairness and inclusiveness and often 
            remain human-led.</li>
	        <li>Individual differences matter: juniors and AI-experienced, risk-tolerant, and technophilic developers are more receptive 
            to AI, and experience shifts priorities toward steerability, reliability, and transparency.</li>
            </ul>

            <h2>How to Use This Data Explorer</h2>
            <p>
                This data explorer features an interactive visualization showing the relationship between
                developers' openness to AI support and their current AI usage across all 20 tasks.
            </p>
            <p><strong>Explore the visualization:</strong> Hover over data points to see task details, or click any point to read the full qualitative report for that task
            </p>
            <p>
                Each report provides detailed qualitative insights into:
            </p>
            <ul>
                <li>How developers currently use AI for that task</li>
                <li>Preferred interaction patterns and workflows</li>
                <li>Common concerns and limitations</li>
                <li>Opportunities for improvement</li>
            </ul>

            <h2>Understanding the Visualization</h2>
            <p>
                The scatter plot shows each task positioned by two key metrics:
            </p>
            <ul>
                <li><strong>X-axis (Openness to AI support):</strong> How receptive developers are to using AI assistance for this task</li>
                <li><strong>Y-axis (Current AI usage):</strong> How frequently developers currently use AI for this task</li>
            </ul>
            <p>
                Both axes display z-scores, indicating how far each task deviates from the average.
                Tasks in the upper-right quadrant have both high openness and high current usage,
                while tasks in the lower-left have low openness and low usage. Tasks with a large
                gap between openness and usage may represent untapped opportunities for AI tooling.
            </p>

            <h2>Research Paper</h2>
            <p>
                For the full study methodology, findings, and implications, please refer to the
                research paper: <a href="paper.pdf" target="_blank" rel="noopener noreferrer">
                    " AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work"
                </a>
            </p>

            <p>
                <em>Click any data point on the visualization to explore the findings.</em>
            </p>
        </div>
    );
};
