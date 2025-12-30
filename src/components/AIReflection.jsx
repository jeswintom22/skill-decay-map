import { useState } from "react";

export default function AIReflection({ snapshot, askAI }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const result = await askAI(snapshot);
    setText(result);
    setLoading(false);
  }

  return (
    <div className="card">
      <h3 style={{
        background: 'var(--gradient-accent)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        🤖 AI Reflection
      </h3>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        marginBottom: '1rem'
      }}>
        Get insights about your skill decay patterns
      </p>

      <button
        onClick={handleClick}
        disabled={loading}
        className="primary"
        style={{
          background: loading ? 'var(--text-muted)' : 'var(--gradient-accent)',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? '🔄 Analyzing...' : '✨ Get Reflection'}
      </button>

      {text && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem",
            background: "linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)",
            borderRadius: "12px",
            border: "1px solid rgba(79, 70, 229, 0.2)",
            color: "var(--text)",
            fontStyle: "italic",
            lineHeight: "1.6",
            position: "relative"
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-8px',
            left: '20px',
            background: 'var(--bg)',
            padding: '0 8px',
            fontSize: '0.75rem',
            color: 'var(--text-accent)',
            fontWeight: '600'
          }}>
            AI Insight
          </div>
          <p style={{ margin: 0 }}>{text}</p>
        </div>
      )}
    </div>
  );
}
