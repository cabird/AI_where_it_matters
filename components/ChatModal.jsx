// ChatModal component for chatting with the AI Where It Matters paper
window.ChatModal = function ChatModal({ isOpen, onClose }) {
  const { useState, useEffect, useRef } = React;
  const UserIcon = window.UserIcon;
  const BotIcon = window.BotIcon;
  const SendIcon = window.SendIcon;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [streamingMessage, setStreamingMessage] = useState('');
  const [remainingMessages, setRemainingMessages] = useState(null);
  const [messageCount, setMessageCount] = useState(0);
  const messagesEndRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Backend configuration
  const BACKEND_URL = 'https://cabird.com';
  const PAPER_ID = 'AI-Where-It_Matters.md';

  // Hardcoded canned questions
  const cannedQuestions = [
    "Explain this paper to a fifth grader",
    "What is the most surprising finding in this paper?",
    "What makes this paper novel or innovative?",
    "What is the main research question this paper addresses?",
    "What methodology did the authors use?",
    "What are the key findings or contributions?",
    "What are the limitations of this study?",
    "How does this work compare to prior research?",
    "What datasets or tools were used?",
    "What are the practical implications of this research?",
    "What future work do the authors suggest?",
    "What are the threats to validity?",
    "Can you summarize this paper in 3-5 sentences?"
  ];

  // Detect if device is mobile based on screen width
  const isActuallyMobile = typeof window !== 'undefined' ? window.screen.width < 768 : false;

  // Session management using localStorage
  const getSessionId = () => {
    let sessionId = localStorage.getItem('chat_session_id');
    if (!sessionId) {
      sessionId = Array.from(crypto.getRandomValues(new Uint8Array(16)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      localStorage.setItem('chat_session_id', sessionId);
    }
    return sessionId;
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingMessage]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Focus the close button when modal opens
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Cleanup on unmount - clear conversation
  useEffect(() => {
    return () => {
      if (messages.length > 0) {
        // Send DELETE request to clear conversation
        const sessionId = getSessionId();
        fetch(`${BACKEND_URL}/api/papers/${PAPER_ID}/chat`, {
          method: 'DELETE',
          headers: {
            'X-Session-ID': sessionId
          }
        }).catch(err => console.error('Failed to clear chat:', err));
      }
    };
  }, [messages.length]);

  const renderMarkdown = (text) => {
    if (!text) return '';

    const markedOptions = {
      breaks: true,
      gfm: true,
      headerIds: true,
      mangle: false
    };

    // Parse markdown then sanitize HTML
    const rawHtml = marked.parse(text, markedOptions);
    return DOMPurify.sanitize(rawHtml);
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setError(null);

    // Add user message to UI
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    setLoading(true);
    setStreamingMessage('');

    try {
      const sessionId = getSessionId();

      const response = await fetch(`${BACKEND_URL}/api/papers/${PAPER_ID}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-ID': sessionId
        },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Handle conversation expired error
        if (errorData.type === 'conversation_expired') {
          setMessages([]);
          setStreamingMessage('');
          setRemainingMessages(null);
          setMessageCount(0);
          setError(errorData.error);
          return; // Exit early, don't try to process stream
        }

        throw new Error(errorData.error || 'Failed to send message');
      }

      // Handle SSE stream
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop(); // Keep incomplete line in buffer

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = JSON.parse(line.substring(6));

            if (data.type === 'chat_chunk') {
              setStreamingMessage(prev => prev + data.content);
            } else if (data.type === 'chat_complete') {
              // Add complete assistant message - capture streamingMessage in closure
              setStreamingMessage(currentStreaming => {
                setMessages(prev => [...prev, {
                  role: 'assistant',
                  content: currentStreaming
                }]);
                return ''; // Clear streaming message
              });
              setRemainingMessages(data.remaining_messages);
              setMessageCount(data.message_count);
            } else if (data.type === 'error') {
              // Handle conversation expired separately
              if (data.error_type === 'conversation_expired') {
                // Clear chat state and show friendly message
                setMessages([]);
                setStreamingMessage('');
                setRemainingMessages(null);
                setMessageCount(0);
                setError(data.message);
                break; // Exit the stream processing loop
              } else {
                throw new Error(data.message);
              }
            }
          }
        }
      }

      // Handle any remaining streaming message
      if (streamingMessage) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: streamingMessage
        }]);
        setStreamingMessage('');
      }

    } catch (err) {
      console.error('Chat error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = async () => {
    try {
      const sessionId = getSessionId();
      await fetch(`${BACKEND_URL}/api/papers/${PAPER_ID}/chat`, {
        method: 'DELETE',
        headers: {
          'X-Session-ID': sessionId
        }
      });
      setMessages([]);
      setStreamingMessage('');
      setError(null);
      setRemainingMessages(null);
      setMessageCount(0);
    } catch (err) {
      console.error('Failed to clear chat:', err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  // Mobile: full-screen modal
  if (isActuallyMobile) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'white',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'white',
          borderBottom: '2px solid #e0e0e0',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10
        }}>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              border: 'none',
              background: 'transparent',
              color: '#4a5568',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1a202c', margin: 0 }}>Chat with Paper</h2>
            <p style={{ fontSize: '14px', color: '#718096', margin: '4px 0 0 0' }}>AI Where It Matters</p>
          </div>
        </div>

        {/* Status bar */}
        <div style={{
          padding: '12px 20px',
          background: '#f7fafc',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          color: '#718096'
        }}>
          <span>
            {messageCount > 0 && `${messageCount}/10 messages`}
            {remainingMessages !== null && ` • ${remainingMessages} remaining this hour`}
          </span>
          <button
            onClick={handleClearChat}
            disabled={messages.length === 0 && !streamingMessage}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              background: messages.length === 0 ? '#e0e0e0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: messages.length === 0 ? '#a0a0a0' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: messages.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            Clear
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px',
          WebkitOverflowScrolling: 'touch'
        }}>
          {messages.length === 0 && !streamingMessage && (
            <div style={{
              textAlign: 'center',
              color: '#a0aec0',
              padding: '40px 20px'
            }}>
              <p>Ask me anything about the paper</p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} style={{
              marginBottom: '16px',
              display: 'flex',
              gap: '12px',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: msg.role === 'user' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {msg.role === 'user' ? <UserIcon size={18} /> : <BotIcon size={18} />}
              </div>
              <div
                style={{
                  flex: 1,
                  background: msg.role === 'user' ? '#f7fafc' : '#e6fffa',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  lineHeight: '1.6',
                  color: '#2d3748'
                }}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
              />
            </div>
          ))}

          {streamingMessage && (
            <div style={{
              marginBottom: '16px',
              display: 'flex',
              gap: '12px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <BotIcon size={18} />
              </div>
              <div
                style={{
                  flex: 1,
                  background: '#e6fffa',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  lineHeight: '1.6',
                  color: '#2d3748'
                }}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(streamingMessage) }}
              />
            </div>
          )}

          {loading && !streamingMessage && (
            <div style={{
              marginBottom: '16px',
              display: 'flex',
              gap: '12px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <BotIcon size={18} />
              </div>
              <div style={{
                flex: 1,
                background: '#e6fffa',
                padding: '12px 16px',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ animation: 'pulse 1.4s ease-in-out infinite' }}>●</span>
                  <span style={{ animation: 'pulse 1.4s ease-in-out 0.2s infinite' }}>●</span>
                  <span style={{ animation: 'pulse 1.4s ease-in-out 0.4s infinite' }}>●</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Error display */}
        {error && (
          <div style={{
            margin: '0 20px 12px',
            padding: '12px',
            background: '#fff5f5',
            color: '#c53030',
            borderRadius: '8px',
            fontSize: '14px',
            borderLeft: '4px solid #fc8181'
          }}>
            {error}
          </div>
        )}

        {/* Canned questions dropdown */}
        {cannedQuestions.length > 0 && (
          <div style={{
            padding: '0 20px 12px',
            background: 'white'
          }}>
            <select
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                color: '#4a5568',
                background: 'white',
                outline: 'none'
              }}
              onChange={(e) => {
                if (e.target.value) {
                  setInput(e.target.value);
                  e.target.value = '';
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>Select a question or ask your own...</option>
              {cannedQuestions.map((question, idx) => (
                <option key={idx} value={question}>
                  {question}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Input */}
        <div style={{
          padding: '16px 20px',
          background: 'white',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          gap: '12px'
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question about this paper..."
            rows="2"
            disabled={loading}
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: 'inherit',
              resize: 'none',
              outline: 'none'
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            style={{
              padding: '12px 24px',
              background: (!input.trim() || loading) ? '#e0e0e0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: (!input.trim() || loading) ? '#a0a0a0' : 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: (!input.trim() || loading) ? 'not-allowed' : 'pointer',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <SendIcon size={16} />
            Send
          </button>
        </div>
      </div>
    );
  }

  // Desktop: centered modal with overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" style={{ maxWidth: '900px', height: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-wrapper">
            <h2 className="modal-title">Chat with Paper</h2>
            <span style={{ fontSize: '14px', color: '#718096', marginLeft: '12px' }}>AI Where It Matters</span>
          </div>
          <button
            ref={closeButtonRef}
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Status bar */}
        <div style={{
          padding: '12px 24px',
          background: '#f7fafc',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px',
          color: '#718096'
        }}>
          <span>
            {messageCount > 0 && `${messageCount}/10 messages`}
            {remainingMessages !== null && ` • ${remainingMessages} remaining this hour`}
          </span>
          <button
            onClick={handleClearChat}
            disabled={messages.length === 0 && !streamingMessage}
            style={{
              padding: '6px 16px',
              fontSize: '13px',
              background: messages.length === 0 ? '#e0e0e0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: messages.length === 0 ? '#a0a0a0' : 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: messages.length === 0 ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={(e) => {
              if (messages.length > 0) {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Clear
          </button>
        </div>

        {/* Messages */}
        <div className="modal-content" style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px'
        }}>
          {messages.length === 0 && !streamingMessage && (
            <div style={{
              textAlign: 'center',
              color: '#a0aec0',
              padding: '60px 20px'
            }}>
              <p style={{ fontSize: '16px' }}>Ask me anything about the paper</p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} style={{
              marginBottom: '20px',
              display: 'flex',
              gap: '12px',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: msg.role === 'user' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                {msg.role === 'user' ? <UserIcon size={20} /> : <BotIcon size={20} />}
              </div>
              <div
                style={{
                  flex: 1,
                  background: msg.role === 'user' ? '#f7fafc' : '#e6fffa',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  lineHeight: '1.7',
                  fontSize: '15px',
                  color: '#2d3748',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
              />
            </div>
          ))}

          {streamingMessage && (
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              gap: '12px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <BotIcon size={20} />
              </div>
              <div
                style={{
                  flex: 1,
                  background: '#e6fffa',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  lineHeight: '1.7',
                  fontSize: '15px',
                  color: '#2d3748',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(streamingMessage) }}
              />
            </div>
          )}

          {loading && !streamingMessage && (
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              gap: '12px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <BotIcon size={20} />
              </div>
              <div style={{
                flex: 1,
                background: '#e6fffa',
                padding: '14px 18px',
                borderRadius: '10px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ display: 'flex', gap: '4px', color: '#48bb78' }}>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Error display */}
        {error && (
          <div style={{
            margin: '0 24px 12px',
            padding: '12px 16px',
            background: '#fff5f5',
            color: '#c53030',
            borderRadius: '8px',
            fontSize: '14px',
            borderLeft: '4px solid #fc8181'
          }}>
            {error}
          </div>
        )}

        {/* Canned questions dropdown */}
        {cannedQuestions.length > 0 && (
          <div style={{
            padding: '0 24px 12px',
            background: 'white'
          }}>
            <select
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'inherit',
                color: '#4a5568',
                background: 'white',
                outline: 'none',
                cursor: 'pointer'
              }}
              onChange={(e) => {
                if (e.target.value) {
                  setInput(e.target.value);
                  e.target.value = '';
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>Select a question or ask your own...</option>
              {cannedQuestions.map((question, idx) => (
                <option key={idx} value={question}>
                  {question}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Input */}
        <div style={{
          padding: '20px 24px',
          background: 'white',
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          gap: '12px'
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question about this paper..."
            rows="2"
            disabled={loading}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '15px',
              fontFamily: 'inherit',
              resize: 'none',
              outline: 'none',
              lineHeight: '1.5'
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            style={{
              padding: '12px 32px',
              background: (!input.trim() || loading) ? '#e0e0e0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: (!input.trim() || loading) ? '#a0a0a0' : 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: (!input.trim() || loading) ? 'not-allowed' : 'pointer',
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              if (input.trim() && !loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <SendIcon size={18} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
