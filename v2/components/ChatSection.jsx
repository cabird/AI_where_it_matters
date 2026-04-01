const { useState, useRef, useEffect } = React;

Observatory.ChatSection = function ChatSection() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Configurable
  const BACKEND_URL = 'https://cabird.com';
  const PAPER_ID = 'Choudhuri2026AIWhere';
  const MAX_MESSAGES = 10;

  const suggestedQuestions = [
    "What are the top 3 systems developers want built?",
    "Which tasks have the biggest gap between desire and actual AI usage?",
    "What constraints do developers place on AI across all 22 systems?",
    "How do developers feel about AI doing code review?",
    "What makes these systems hard to build — is it model quality?",
    "What is the division of labor argument from the second paper?",
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const getOrCreateSession = () => {
    if (sessionId) return sessionId;
    const id = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    setSessionId(id);
    return id;
  };

  const sendMessage = async (text) => {
    if (!text.trim() || loading || messageCount >= MAX_MESSAGES) return;

    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const sid = getOrCreateSession();

    try {
      const response = await fetch(`${BACKEND_URL}/api/papers/${PAPER_ID}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, session_id: sid })
      });

      if (!response.ok) throw new Error('Chat request failed');

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let aiContent = '';
      let aiMessageIndex = null;

      setMessages(prev => {
        aiMessageIndex = prev.length;
        return [...prev, { role: 'assistant', content: '' }];
      });

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                aiContent += parsed.content;
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: 'assistant', content: aiContent };
                  return updated;
                });
              }
            } catch (e) {
              // Not JSON, might be raw text
              aiContent += data;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: 'assistant', content: aiContent };
                return updated;
              });
            }
          }
        }
      }

      setMessageCount(prev => prev + 1);
    } catch (err) {
      setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: 'Sorry, I couldn\'t reach the server. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const renderMarkdown = (text) => {
    if (!window.marked || !window.DOMPurify) return text;
    const html = window.marked.parse(text);
    return window.DOMPurify.sanitize(html);
  };

  return (
    <section className="chat-wing" id="chat">
      <div className="chat-container">
        <div className="chat-header">
          <span className="section-number">Ask the Research</span>
          <h2 className="section-title" style={{ color: '#faf8f5' }}>Chat with Both Papers</h2>
          <p className="section-description" style={{ color: '#6b7280', margin: '0 auto' }}>
            Ask questions about either paper. This AI has read both studies and can connect findings across them.
          </p>
        </div>

        <div className="chat-interface">
          <div className="chat-messages" ref={messagesContainerRef}>
            {messages.length === 0 && !loading && (
              <div className="chat-empty">
                <p style={{ marginBottom: '24px' }}>Ask me anything about the research</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      style={{
                        padding: '8px 14px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '2px',
                        color: '#9ca3af',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        transition: 'all 0.15s ease',
                        textAlign: 'left'
                      }}
                      onMouseEnter={e => { e.target.style.borderColor = 'rgba(194,114,42,0.4)'; e.target.style.color = '#d1d5db'; }}
                      onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.color = '#9ca3af'; }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`chat-message chat-message-${msg.role === 'user' ? 'user' : 'ai'}`}>
                {msg.role === 'assistant' && (
                  <div className="chat-message-avatar" style={{ background: '#353a47', color: '#d4943c' }}>AI</div>
                )}
                <div className="chat-message-bubble">
                  {msg.role === 'assistant' ? (
                    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content || '') }} />
                  ) : (
                    msg.content
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="chat-message-avatar" style={{ background: '#c2722a', color: 'white' }}>You</div>
                )}
              </div>
            ))}

            {loading && messages[messages.length - 1]?.content === '' && (
              <div className="chat-message chat-message-ai">
                <div className="chat-message-avatar" style={{ background: '#353a47', color: '#d4943c' }}>AI</div>
                <div className="chat-message-bubble">
                  <div className="typing-indicator">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <div className="chat-input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder="Ask a question about the research..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading || messageCount >= MAX_MESSAGES}
              />
            </div>
            <button
              className="chat-send"
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading || messageCount >= MAX_MESSAGES}
            >
              Send
            </button>
          </div>

          {messageCount > 0 && (
            <div className="chat-status">
              {messageCount}/{MAX_MESSAGES} messages &middot; {MAX_MESSAGES - messageCount} remaining this session
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
