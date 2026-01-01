import { useState } from "react";

export default function Login({ onLogin }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length < 2) {
      setError("Username must be at least 2 characters");
      return;
    }
    setError("");
    onLogin(input.trim());
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "var(--panel)",
          padding: "3rem",
          borderRadius: "20px",
          boxShadow: "var(--shadow-hover)",
          maxWidth: "400px",
          width: "90%",
          animation: "slideInUp 0.6s ease-out",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "var(--text-accent)",
            marginBottom: "0.5rem",
            fontSize: "1.75rem",
          }}
        >
          Welcome Back
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}
        >
          Enter your name to continue
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="form-group">
            <label style={{ color: "var(--text)" }}>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (error) setError("");
              }}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "12px",
                border: `2px solid ${error ? "#ff6b6b" : "var(--border)"}`,
                background: "var(--panel)",
                color: "var(--text)",
                fontSize: "1rem",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
              }}
              autoFocus
            />
            {error && (
              <p
                style={{
                  color: "#ff6b6b",
                  fontSize: "0.85rem",
                  marginTop: "0.5rem",
                  margin: "0.5rem 0 0 0",
                }}
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="primary"
            style={{
              width: "100%",
              padding: "0.85rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              background: "var(--gradient-primary)",
              border: "none",
              color: "white",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "var(--shadow-hover)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "var(--shadow)";
            }}
          >
            Continue
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            fontSize: "0.85rem",
            marginTop: "1.5rem",
          }}
        >
          Your progress will be saved locally
        </p>
      </div>
    </div>
  );
}
