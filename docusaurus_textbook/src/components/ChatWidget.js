import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './chat.css';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [openbut, setOpenbut] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    const messageToSend = input;
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://backend-deploy-yt.onrender.com/chat", {
        message: messageToSend
      });

      const botReply = res.data.reply || res.data.response || res.data.message || "I'm processing your request...";
      
      // Add slight delay for natural feel
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
      }, 500);
      
    } catch (err) {
      const error = err.response?.data?.error || err.message || "Network issue";
      setMessages(prev => [...prev, { 
        sender: "bot", 
        text: `⚠️ Connection error: ${error}. Please try again.` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      sendMessage();
    }
  };

  // Initialize with welcome message
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ 
          sender: "bot", 
          text: "Hello! I'm Neon AI. How can I assist you today? ⚡" 
        }]);
      }, 300);
    }
  }, [open]);

  return (
    <>
     

      {/* Main Chat Widget */}
      <div className="chat-container">

        {/* Floating Neon Button */}
        {openbut && (
          <button 
            className="chat-button" 
            onClick={() => setOpen(!open)}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 9998,
              animation: open ? 'none' : 'pulse 2s infinite'
            }}
          >
            {open ? '✕ ' : '⚡ CHAT'}
          </button>
        )}

        {/* Chat Window */}
        {open && openbut && (
          <div className="chat-box">
            <div className="chat-header">
              <span>NEON AI</span>
              <button 
                onClick={() => setOpen(false)}
                style={{
                  position: 'absolute',
                  right: '20px',
                  background: 'transparent',
                  border: '1px solid #00ffff40',
                  color: '#00ffff',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>
            </div>

            <div className="chat-body" ref={chatBodyRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`bubble ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="bubble bot">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>

            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                disabled={loading}
                autoFocus
              />
              <button onClick={sendMessage} disabled={loading}>
                {loading ? (
                  <div className="spinner"></div>
                ) : (
                  'SEND'
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add pulse animation for button */}
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0); }
        }
        
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 8px 12px;
        }
        
        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: #00ffff;
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out;
        }
        
        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #00ffff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}