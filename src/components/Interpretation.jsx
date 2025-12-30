export default function Interpretation({ notes }) {
  if (notes.length === 0) return null;

  return (
    <div className="panel" style={{ marginTop: '2rem' }}>
      <h3 style={{
        textAlign: 'center',
        color: 'var(--text-accent)',
        marginBottom: '1.5rem'
      }}>
        📊 Map Analysis
      </h3>
      <div style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
      }}>
        {notes.map((note, i) => (
          <div
            key={i}
            style={{
              padding: '1rem',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              fontSize: '0.95rem',
              lineHeight: '1.6'
            }}
          >
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}
