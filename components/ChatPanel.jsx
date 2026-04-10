const { useState, useRef, useEffect } = React;
const { Icon } = Explorer;

Explorer.ChatPanel = function ChatPanel() {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  const placeholders = [
    "Explain this research to a fifth grader.",
    "Which tasks have the biggest AI demand gap?",
    "What do developers want AI to never do?",
    "What are the top 3 systems developers want built?",
    "How do developers feel about AI doing code review?",
    "What makes these 22 systems hard to build?",
    "Summarize both papers in 3 sentences",
  ];

  const [placeholderFading, setPlaceholderFading] = useState(false);

  // Rotate placeholder text with fade
  useEffect(() => {
    if (expanded || input) return;
    const interval = setInterval(() => {
      setPlaceholderFading(true);
      setTimeout(() => {
        setPlaceholderIdx(prev => (prev + 1) % placeholders.length);
        setPlaceholderFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [expanded, input]);

  const BACKEND_URL = 'https://cabird.com';
  const PAPER_ID = 'Choudhuri2026AIWhere';
  const MAX = 10;
  const sessionId = useRef('s_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9));

  const suggestions = [
    "Summarize Paper 1 (AI Where It Matters) in 3 sentences",
    "What are the top 3 systems from Paper 2 (Beyond Copilot)?",
    "What constraints recur across all 22 systems in Paper 2?",
    "Compare the findings of Paper 1 and Paper 2",
  ];

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  // Focus input when expanding
  useEffect(() => {
    if (expanded && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [expanded]);

  const send = async (text) => {
    if (!text.trim() || loading || msgCount >= MAX) return;
    if (!expanded) setExpanded(true);
    setMessages(p => [...p, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/api/papers/${PAPER_ID}/chat`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, session_id: sessionId.current })
      });
      if (!res.ok) throw new Error('Failed');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let content = '';
      setMessages(p => [...p, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split('\n')) {
          if (line.startsWith('data: ')) {
            const d = line.slice(6);
            if (d === '[DONE]') continue;
            try { const p = JSON.parse(d); if (p.content) content += p.content; }
            catch { content += d; }
            setMessages(p => { const u = [...p]; u[u.length - 1] = { role: 'assistant', content }; return u; });
          }
        }
      }
      setMsgCount(c => c + 1);
    } catch {
      setMessages(p => [...p.slice(0, -1), { role: 'assistant', content: 'Sorry, could not reach the server.' }]);
    } finally { setLoading(false); }
  };

  const renderMd = (t) => {
    if (!window.marked || !window.DOMPurify) return t;
    return window.DOMPurify.sanitize(window.marked.parse(t));
  };

  const handleDockInputKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        send(input);
      }
    }
  };

  const handleDockFocus = () => {
    if (!expanded) setExpanded(true);
  };

  return (
    <div className={`chat-dock${expanded ? ' chat-dock-expanded' : ''}`}>
      {/* Expanded: full chat panel above the dock */}
      {expanded && (
        <div className="chat-dock-panel">
          <div className="chat-dock-panel-header">
            <span className="chat-dock-panel-title">Chat with Both Papers</span>
            <button className="chat-dock-panel-close" onClick={() => setExpanded(false)}>
              ↓ Minimize
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && !loading && (
              <div className="chat-empty">
                <p>Ask about Paper 1 (AI Where It Matters) or Paper 2 (Beyond Copilot)</p>
                <div className="chat-suggestions">
                  {suggestions.map((q, i) => (
                    <button key={i} className="chat-suggestion" onClick={() => send(q)}>{q}</button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg-${m.role === 'user' ? 'user' : 'ai'}`}>
                <div className="chat-msg-bubble">
                  {m.role === 'assistant' ? <div dangerouslySetInnerHTML={{ __html: renderMd(m.content || '') }} /> : m.content}
                </div>
              </div>
            ))}

            {loading && messages[messages.length - 1]?.content === '' && (
              <div className="chat-msg chat-msg-ai">
                <div className="chat-msg-bubble">
                  <div className="typing-dots"><div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" /></div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
        </div>
      )}

      {/* Bottom dock bar — always visible */}
      <div className="chat-dock-bar">
        <div className="chat-dock-label">
          <Icon name="MessageCircle" size={13} color="var(--sage-600)" style={{ marginRight: 5 }} />
          Ask about Paper 1 (AI Where It Matters) or Paper 2 (Beyond Copilot) — this AI has read both
        </div>
        <div className="chat-dock-bar-inner">
          <div className="chat-dock-input-wrap">
            <input
              ref={inputRef}
              className="chat-dock-input"
              placeholder=""
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleDockInputKeyDown}
              onFocus={handleDockFocus}
              disabled={loading || msgCount >= MAX}
            />
            {!input && (
              <span className={`chat-dock-placeholder${placeholderFading ? ' chat-dock-placeholder-fade' : ''}`}>
                {placeholders[placeholderIdx]}
              </span>
            )}
          </div>
          <button
            className="chat-dock-send"
            onClick={() => { if (input.trim()) send(input); else if (!expanded) setExpanded(true); }}
            disabled={loading || msgCount >= MAX}
          >
            {input.trim() ? 'Send' : expanded ? 'Send' : 'Chat'}
          </button>
        </div>
      </div>
    </div>
  );
};
