const { useState, useRef, useEffect } = React;
const { Icon } = Explorer;

Explorer.ChatPanel = function ChatPanel() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  const BACKEND_URL = 'https://cabird.com';
  const CHAT_ENDPOINT = `${BACKEND_URL}/api/chat/ai-where-it-matters`;
  const MAX = 10;
  const sessionId = useRef('s_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9));

  const suggestions = [
    "Summarize both papers in 3 sentences",
    "What are the top 3 systems developers want built?",
    "What constraints recur across all 22 systems?",
    "Compare the findings of Paper 1 and Paper 2",
  ];

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 200);
    }
  }, [open]);

  const send = async (text) => {
    if (!text.trim() || loading || msgCount >= MAX) return;
    if (!open) setOpen(true);
    setMessages(p => [...p, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(CHAT_ENDPOINT, {
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) send(input);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        className={`chat-fab${open ? ' chat-fab-hidden' : ''}`}
        onClick={() => setOpen(true)}
        title="Chat with the papers"
      >
        <Icon name="MessageCircle" size={24} color="#fff" />
        <span className="chat-fab-label">Ask AI</span>
        <span className="chat-fab-pulse" />
      </button>

      {/* Overlay */}
      {open && <div className="chat-overlay" onClick={() => setOpen(false)} />}

      {/* Slide-up panel */}
      <div className={`chat-panel${open ? ' chat-panel-open' : ''}`}>
        <div className="chat-panel-header">
          <div className="chat-panel-header-left">
            <Icon name="MessageCircle" size={18} color="var(--sage-700)" />
            <span className="chat-panel-title">Chat with Both Papers</span>
          </div>
          <div className="chat-panel-header-right">
            {messages.length > 0 && (
              <button className="chat-panel-reset" onClick={() => {
                setMessages([]);
                setMsgCount(0);
                setInput('');
                sessionId.current = 's_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
              }} title="New conversation">
                <Icon name="RotateCcw" size={14} color="var(--sage-600)" />
                <span>New chat</span>
              </button>
            )}
            <button className="chat-panel-close" onClick={() => setOpen(false)}>
              <Icon name="X" size={18} color="var(--sage-500)" />
            </button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 && !loading && (
            <div className="chat-empty">
              <div className="chat-empty-icon">
                <Icon name="BookOpen" size={32} color="var(--sage-400)" />
              </div>
              <p className="chat-empty-title">Ask anything about the research</p>
              <p className="chat-empty-sub">This AI has read both papers and can answer questions, summarize findings, and compare results.</p>
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

        <div className="chat-input-bar">
          <input
            ref={inputRef}
            className="chat-input"
            placeholder="Ask about the research..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading || msgCount >= MAX}
          />
          <button
            className="chat-send-btn"
            onClick={() => { if (input.trim()) send(input); }}
            disabled={loading || !input.trim()}
          >
            <Icon name="Send" size={16} color="#fff" />
          </button>
        </div>
      </div>
    </>
  );
};

// Dismissable banner component
Explorer.ChatBanner = function ChatBanner({ onChatOpen }) {
  const [dismissed, setDismissed] = useState(false);
  const { Icon } = Explorer;

  if (dismissed) return null;

  return (
    <div className="chat-banner">
      <div className="chat-banner-inner">
        <Icon name="MessageCircle" size={16} color="var(--sage-700)" />
        <span className="chat-banner-text">
          <strong>This website is interactive</strong> — ask the AI anything about the papers or the research
        </span>
        <button className="chat-banner-try" onClick={onChatOpen}>Try it →</button>
        <button className="chat-banner-dismiss" onClick={() => setDismissed(true)}>
          <Icon name="X" size={14} color="var(--sage-500)" />
        </button>
      </div>
    </div>
  );
};
