export default function Graveyard({ skills }) {
  const dead = skills.filter((s) => s.archived);

  if (dead.length === 0) return null;

  return (
    <div className="card">
      <h3 style={{
        color: 'var(--text-muted)',
        borderBottom: '2px solid var(--border)',
        paddingBottom: '0.5rem'
      }}>
        🪦 Graveyard
      </h3>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        marginBottom: '1rem'
      }}>
        Skills that have faded from active memory
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '0.5rem'
      }}>
        {dead.map((skill) => (
          <div
            key={skill.id}
            style={{
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              textAlign: 'center'
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
