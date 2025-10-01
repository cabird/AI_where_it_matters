const { useState, useEffect } = React;

window.TableOfContents = function TableOfContents({ htmlContent }) {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        if (!htmlContent) {
            setHeadings([]);
            return;
        }

        // Parse HTML to extract headings (only h2 and h3)
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        const headingElements = tempDiv.querySelectorAll('h2, h3');
        const headingData = Array.from(headingElements).map(heading => ({
            id: heading.id,
            text: heading.textContent,
            level: heading.tagName.toLowerCase()
        }));

        setHeadings(headingData);
    }, [htmlContent]);

    if (headings.length === 0) {
        return null;
    }

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="toc">
            <h2>Table of Contents</h2>
            <ul>
                {headings.map((heading, index) => (
                    <li key={index} className={`toc-${heading.level}`}>
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => handleClick(e, heading.id)}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
