import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3000";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}

function MessageContent({ content }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noreferrer" />
          ),
        }}
      >
        {content || ""}
      </ReactMarkdown>
    </div>
  );
}

function AuthPage({ mode, onModeChange, onBackToChat, onSubmit, loading, error }) {
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await onSubmit({ name: name.trim(), email: email.trim(), password });
  }

  return (
    <main className="auth-page">
      <button className="auth-back" onClick={onBackToChat} type="button">
        ← Back to chat
      </button>

      <section className="auth-card">
        <div className="brand-mark auth-mark">✦</div>
        <h1>{isSignup ? "Create your account" : "Welcome back"}</h1>
        <p className="auth-subtitle">
          {isSignup
            ? "Sign up to keep your conversations saved."
            : "Log in to continue your saved conversations."}
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignup && (
            <label>
              Your name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
                autoComplete="name"
                minLength={3}
                maxLength={40}
                required
              />
            </label>
          )}
          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={isSignup ? "Create a strong password" : "Enter your password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              minLength={8}
              maxLength={30}
              required
            />
          </label>
          {isSignup && (
            <p className="field-note">
              Use 8–30 characters with an uppercase letter, lowercase letter, number and special character.
            </p>
          )}

          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="primary-button auth-submit" type="submit" disabled={loading}>
            {loading ? "Please wait…" : isSignup ? "Create account" : "Log in"}
          </button>
        </form>

        <p className="auth-switch">
          {isSignup ? "Already have an account?" : "New here?"}{" "}
          <button type="button" onClick={() => onModeChange(isSignup ? "login" : "signup")}>
            {isSignup ? "Log in" : "Create an account"}
          </button>
        </p>
      </section>
    </main>
  );
}

function App() {
  const [page, setPage] = useState("chat");
  const [authMode, setAuthMode] = useState("login");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState(null);
  const [models, setModels] = useState([]);
  const [defaultModel, setDefaultModel] = useState("openrouter/free");
  const [model, setModel] = useState("openrouter/free");
  const [recentChats, setRecentChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const endOfMessagesRef = useRef(null);
  const inputRef = useRef(null);

  const isLoggedIn = Boolean(user);

  useEffect(() => {
    let active = true;

    async function loadInitialData() {
      try {
        const modelData = await request("/message/models");
        if (active) {
          setModels(modelData.models || []);
          const nextDefault = modelData.defaultModel || "openrouter/free";
          setDefaultModel(nextDefault);
          setModel(nextDefault);
        }
      } catch (requestError) {
        if (active) setError(requestError.message);
      }

      try {
        const profile = await request("/user/profile");
        if (!active) return;
        setUser(profile);
        try {
          const chatData = await request("/chat/getRecentChat");
          if (active) setRecentChats(chatData.recentChats || []);
        } catch {
          if (active) setRecentChats([]);
        }
      } catch {
        // It is normal for a visitor to have no login cookie.
      }
    }

    loadInitialData();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  useEffect(() => {
    if (page === "chat") inputRef.current?.focus();
  }, [page, currentChatId]);

  function startNewChat() {
    setCurrentChatId(null);
    setMessages([]);
    setInput("");
    setError("");
    setModel(defaultModel);
    setSidebarOpen(false);
  }

  function openAuth(mode) {
    setAuthMode(mode);
    setAuthError("");
    setPage("auth");
    setSidebarOpen(false);
  }

  async function handleAuthSubmit(formData) {
    setAuthLoading(true);
    setAuthError("");

    try {
      const data = await request(`/user/${authMode}`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setUser({ name: data.name, email: data.email, age: data.age });
      setPage("chat");
      setCurrentChatId(null);
      setMessages([]);
      setInput("");
      setModel(defaultModel);
      setError("");

      try {
        const chatData = await request("/chat/getRecentChat");
        setRecentChats(chatData.recentChats || []);
      } catch {
        setRecentChats([]);
      }
    } catch (requestError) {
      setAuthError(requestError.message);
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await request("/user/logout", { method: "POST" });
    } catch {
      // Clear the local UI even if the server session has already expired.
    }
    setUser(null);
    setRecentChats([]);
    setCurrentChatId(null);
    setMessages([]);
    setInput("");
    setError("");
    setModel(defaultModel);
    setPage("chat");
  }

  async function refreshRecentChats() {
    if (!isLoggedIn) return;
    try {
      const data = await request("/chat/getRecentChat");
      setRecentChats(data.recentChats || []);
    } catch {
      // Keep the chat usable if the history list cannot be refreshed.
    }
  }

  async function openSavedChat(chat) {
    try {
      setError("");
      const data = await request(`/message/${chat._id}`);
      setCurrentChatId(chat._id);
      setMessages((data.messages || []).map((item) => ({
        role: item.role,
        content: item.content,
      })));
      if (data.chat?.model) setModel(data.chat.model);
      setSidebarOpen(false);
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  async function handleSend(event) {
    event?.preventDefault();
    const content = input.trim();
    if (!content || loading) return;

    const previousMessages = messages;
    const userMessage = { role: "user", content, localId: `${Date.now()}-user` };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      let data;
      if (isLoggedIn) {
        const path = currentChatId ? `/message/${currentChatId}` : "/message";
        data = await request(path, {
          method: "POST",
          body: JSON.stringify({ content, model }),
        });
        if (data.chatId) setCurrentChatId(data.chatId);
      } else {
        // Guest chat history lives only in React state and is sent for context.
        // No localStorage/sessionStorage and no MongoDB chat/message writes are used.
        data = await request("/message/guest", {
          method: "POST",
          body: JSON.stringify({
            content,
            model,
            history: previousMessages.slice(-20).map(({ role, content: messageContent }) => ({
              role,
              content: messageContent,
            })),
          }),
        });
      }

      setMessages((current) => [...current, {
        role: "assistant",
        content: data.reply || "The model returned an empty response.",
        model: data.model || model,
      }]);
      if (isLoggedIn) refreshRecentChats();
    } catch (requestError) {
      setMessages((current) => current.filter((item) => item.localId !== userMessage.localId));
      setInput(content);
      setError(requestError.message);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  if (page === "auth") {
    return (
      <AuthPage
        mode={authMode}
        onModeChange={(nextMode) => {
          setAuthMode(nextMode);
          setAuthError("");
        }}
        onBackToChat={() => setPage("chat")}
        onSubmit={handleAuthSubmit}
        loading={authLoading}
        error={authError}
      />
    );
  }

  return (
    <div className="app-shell">
      {sidebarOpen && <button className="mobile-backdrop" aria-label="Close menu" onClick={() => setSidebarOpen(false)} />}

      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-top">
          <div className="brand-row">
            <div className="brand-mark">✦</div>
            <span className="brand-name">Simple AI Chat</span>
            <button className="icon-button mobile-only" type="button" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)}>×</button>
          </div>
          <button className="new-chat-button" type="button" onClick={startNewChat}>
            <span className="plus-icon">＋</span> New chat
          </button>
        </div>

        <div className="sidebar-section-title">Recent chats</div>
        {isLoggedIn ? (
          <div className="chat-list">
            {recentChats.length === 0 ? (
              <p className="sidebar-muted">Your saved chats will show here.</p>
            ) : recentChats.map((chat) => (
              <button
                type="button"
                key={chat._id}
                className={`history-item ${currentChatId === chat._id ? "history-item-active" : ""}`}
                onClick={() => openSavedChat(chat)}
                title={chat.topic}
              >
                <span className="history-symbol">◷</span>
                <span>{chat.topic || "New chat"}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="sidebar-muted">Log in to save and revisit your chats.</p>
        )}

        <div className="sidebar-bottom">
          {isLoggedIn ? (
            <>
              <div className="account-row">
                <div className="avatar">{(user.name || user.email || "U").charAt(0).toUpperCase()}</div>
                <div className="account-info">
                  <strong>{user.name || "Your account"}</strong>
                  <span>{user.email}</span>
                </div>
              </div>
              <button type="button" className="text-button full-width" onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <>
              <button type="button" className="primary-button full-width" onClick={() => openAuth("signup")}>Sign up</button>
              <button type="button" className="secondary-button full-width" onClick={() => openAuth("login")}>Log in</button>
            </>
          )}
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="topbar-left">
            <button type="button" className="icon-button menu-button" aria-label="Open menu" onClick={() => setSidebarOpen(true)}>☰</button>
            <span className="small-brand">Simple AI Chat</span>
          </div>
          <label className="model-picker">
            <span className="model-label">Model</span>
            <select value={model} onChange={(event) => setModel(event.target.value)} aria-label="Choose AI model">
              {models.length === 0 ? <option value={model}>{model}</option> : models.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
              {model && models.length > 0 && !models.some((item) => item.id === model) && (
                <option value={model}>{model} (saved chat)</option>
              )}
            </select>
          </label>
        </header>

        <section className={`conversation-area ${messages.length === 0 ? "conversation-empty" : ""}`}>
          {messages.length === 0 ? (
            <div className="welcome-content">
              <div className="welcome-mark">✦</div>
              <h1>What can I help with?</h1>
              <p>Ask a question, get help with code, or learn something new.</p>
              <div className="suggestion-grid">
                <button type="button" onClick={() => setInput("Explain recursion with a simple C++ example.") }>
                  <strong>Learn a concept</strong>
                  <span>Explain recursion with an example</span>
                </button>
                <button type="button" onClick={() => setInput("Help me debug a C++ program. What information should I share?") }>
                  <strong>Fix some code</strong>
                  <span>Find a bug in my C++ program</span>
                </button>
                <button type="button" onClick={() => setInput("Give me a simple plan to learn backend development.") }>
                  <strong>Make a plan</strong>
                  <span>Learn backend step by step</span>
                </button>
                <button type="button" onClick={() => setInput("Summarize the main idea of a topic in simple words.") }>
                  <strong>Understand a topic</strong>
                  <span>Get a clear, simple explanation</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="message-list">
              {messages.map((message, index) => (
                <article className={`message-row ${message.role === "user" ? "user-message-row" : "assistant-message-row"}`} key={message.localId || `${index}-${message.role}`}>
                  {message.role === "assistant" && <div className="assistant-avatar">✦</div>}
                  <div className={`message-bubble ${message.role === "user" ? "user-bubble" : "assistant-bubble"}`}>
                    {message.role === "assistant" ? (
                      <MessageContent content={message.content} />
                    ) : (
                      <p className="user-message-text">{message.content}</p>
                    )}
                  </div>
                </article>
              ))}
              {loading && (
                <article className="message-row assistant-message-row">
                  <div className="assistant-avatar">✦</div>
                  <div className="typing-indicator"><span></span><span></span><span></span><em>Thinking…</em></div>
                </article>
              )}
              <div ref={endOfMessagesRef} />
            </div>
          )}
        </section>

        <footer className="composer-area">
          {error && <div className="error-banner" role="alert">{error}</div>}
          <form className="composer" onSubmit={handleSend}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  handleSend(event);
                }
              }}
              placeholder="Message Simple AI Chat"
              aria-label="Write your message"
              rows={1}
              maxLength={12000}
            />
            <button className="send-button" type="submit" disabled={loading || !input.trim()} aria-label="Send message">
              ↑
            </button>
          </form>
          <div className="composer-note">
            {isLoggedIn
              ? "Your conversations are saved to your account. AI responses can be incorrect."
              : "Guest chat stays in this tab and is not saved by this app. Model providers may have their own data policies."}
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
