const { useState, useEffect } = React;

window.ReportViewer = function ReportViewer({ reportFile }) {
    const [content, setContent] = useState('');
    const [htmlContent, setHtmlContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!reportFile) {
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(reportFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load report: ${response.statusText}`);
                }
                return response.text();
            })
            .then(markdown => {
                setContent(markdown);

                // Initialize markdown-it with anchor plugin for heading IDs
                const md = window.markdownit({
                    html: true,
                    linkify: true,
                    typographer: true
                }).use(window.markdownItAnchor.default, {
                    permalink: false,
                    slugify: (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'))
                });

                const html = md.render(markdown);
                setHtmlContent(html);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [reportFile]);

    if (loading) {
        return <div className="loading">Loading report...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!reportFile) {
        return null;
    }

    return (
        <div className="report-viewer">
            <div className="report-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            <window.TableOfContents htmlContent={htmlContent} />
        </div>
    );
};
