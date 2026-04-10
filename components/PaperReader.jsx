const { useState, useEffect, useRef } = React;
const { Icon, Modal } = Explorer;

Explorer.PaperReader = function PaperReader() {
  const [activePaper, setActivePaper] = useState('paper1');
  const [content, setContent] = useState('');
  const [rawMd, setRawMd] = useState({});
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState({});
  const [copied, setCopied] = useState(false);
  const [bibtexOpen, setBibtexOpen] = useState(false);
  const [bibtexCopied, setBibtexCopied] = useState(false);

  const papers = {
    paper1: {
      label: 'Paper I: AI Where It Matters',
      shortLabel: 'Paper I',
      file: 'papers/paper1.md',
      pdf: 'paper1.pdf',
      authors: 'Choudhuri, Badea, Bird, Butler, DeLine, Houck (2026)',
      subtitle: 'Where, Why, and How Developers Want AI Support in Daily Work',
      bibtex: `@inproceedings{choudhuri2026aiwhere,
  title={AI Where It Matters: Where, Why, and How Developers Want AI Support in Daily Work},
  author={Choudhuri, Rudrajit and Badea, Carmen and Bird, Christian and Butler, Jenna L. and DeLine, Robert and Houck, Brian},
  year={2026},
  booktitle={Proceedings of the ACM on Software Engineering},
  publisher={ACM},
  address={New York, NY, USA}
}`,
    },
    paper2: {
      label: 'Paper II: To Copilot and Beyond',
      shortLabel: 'Paper II',
      file: 'papers/paper2.md',
      pdf: 'paper2.pdf',
      authors: 'Choudhuri, Bird, Badea, Sarma (2026)',
      subtitle: '22 AI Systems Developers Want Built',
      bibtex: `@article{choudhuri2026beyondcopilot,
  title={To Copilot and Beyond: 22 AI Systems Developers Want Built},
  author={Choudhuri, Rudrajit and Bird, Christian and Badea, Carmen and Sarma, Anita},
  year={2026},
  eprint={2604.07830},
  archivePrefix={arXiv},
  primaryClass={cs.SE},
  url={https://arxiv.org/abs/2604.07830}
}`,
    },
  };

  useEffect(() => {
    if (loaded[activePaper]) {
      setContent(loaded[activePaper]);
      return;
    }

    setLoading(true);
    fetch(papers[activePaper].file)
      .then(r => { if (!r.ok) throw new Error('Could not load paper'); return r.text(); })
      .then(md => {
        // Store raw markdown for copy
        setRawMd(prev => ({ ...prev, [activePaper]: md }));

        const imageDir = activePaper === 'paper1' ? 'papers/paper1-images/' : 'papers/paper2-images/';
        const fixedMd = md.replace(/!\[([^\]]*)\]\(([^/)][^)]*\.png)\)/g, (match, alt, src) => {
          return '![' + alt + '](' + imageDir + src + ')';
        });

        const renderer = window.markdownit({ html: true, linkify: true, typographer: true });
        const html = renderer.render(fixedMd);
        const sanitized = window.DOMPurify ? window.DOMPurify.sanitize(html, { ADD_TAGS: ['img'], ADD_ATTR: ['src', 'alt'] }) : html;
        setContent(sanitized);
        setLoaded(prev => ({ ...prev, [activePaper]: sanitized }));
        setLoading(false);
      })
      .catch(err => {
        setContent('<p style="color: #c2493b;">Error loading paper: ' + err.message + '</p>');
        setLoading(false);
      });
  }, [activePaper]);

  const handleCopy = async () => {
    const md = rawMd[activePaper];
    if (!md) return;
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = md;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const info = papers[activePaper];

  return (
    <div className="paper-reader">
      <div className="paper-reader-toggle">
        {Object.entries(papers).map(([key, p]) => (
          <button key={key} className={`paper-reader-tab${activePaper === key ? ' paper-reader-tab-active' : ''}`} onClick={() => setActivePaper(key)}>
            {p.shortLabel}
          </button>
        ))}
      </div>

      <div className="paper-reader-header">
        <div>
          <h3 className="paper-reader-title">{info.subtitle}</h3>
          <p className="paper-reader-authors">{info.authors}</p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <button className="paper-reader-copy-btn" onClick={handleCopy} title="Copy markdown to clipboard">
            <Icon name={copied ? 'Check' : 'Copy'} size={14} style={{ marginRight: 5 }} />
            {copied ? 'Copied' : 'Copy Markdown'}
          </button>
          <button className="paper-reader-copy-btn" onClick={() => setBibtexOpen(true)} title="Show BibTeX citation">
            <Icon name="Quote" size={14} style={{ marginRight: 5 }} />
            BibTeX
          </button>
          <a href={info.pdf} className="paper-reader-pdf-btn" target="_blank" rel="noopener noreferrer">
            <Icon name="FileDown" size={14} style={{ marginRight: 5 }} />
            Download PDF
          </a>
        </div>
      </div>

      <div className="paper-reader-body">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-400)' }}>Loading paper...</div>
        ) : (
          <div className="paper-reader-content" dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </div>

      <Modal isOpen={bibtexOpen} onClose={() => { setBibtexOpen(false); setBibtexCopied(false); }} title="BibTeX Citation" badge={info.shortLabel}>
        <div>
          <pre style={{
            background: 'var(--text-100)',
            padding: '20px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            lineHeight: 1.7,
            color: 'var(--text-800)',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {info.bibtex}
          </pre>
          <button
            className="paper-reader-copy-btn"
            style={{ marginTop: 16 }}
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(info.bibtex);
              } catch {
                const ta = document.createElement('textarea');
                ta.value = info.bibtex;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
              }
              setBibtexCopied(true);
              setTimeout(() => setBibtexCopied(false), 2000);
            }}
          >
            <Icon name={bibtexCopied ? 'Check' : 'Copy'} size={14} style={{ marginRight: 5 }} />
            {bibtexCopied ? 'Copied' : 'Copy to Clipboard'}
          </button>
        </div>
      </Modal>
    </div>
  );
};
