export default function Manifesto() {
  return (
    <div className="panel" style={{
      maxWidth: "800px",
      margin: "2rem auto",
      fontSize: "1rem",
      lineHeight: 1.7,
      textAlign: 'center'
    }}>
      <h3 style={{
        color: 'var(--text-accent)',
        marginBottom: '2rem',
        fontSize: '1.5rem'
      }}>
        📜 The Manifesto
      </h3>

      <div style={{
        display: 'grid',
        gap: '1.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
      }}>
        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(79,70,229,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            Skills do not stay stable when unused.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,158,11,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            Most systems assume that if you are not improving, you are maintaining.
            That assumption is false.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(239,68,68,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            Skills decay quietly.
            People usually notice only after the loss becomes painful.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(79,70,229,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            This map does not test you.
            It does not score you.
            It does not reward consistency.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,158,11,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            It models risk.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(239,68,68,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            Each point represents a skill you chose to care about.
            Its distance reflects how central it is.
            Its size reflects its importance.
            Its color reflects how long it has been unused.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(79,70,229,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <p style={{ margin: 0, fontWeight: '500' }}>
            When a skill drifts toward decay, nothing is demanded of you.
            The system simply reflects reality.
          </p>
        </div>

        <div style={{
          padding: '1.5rem',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,158,11,0.05) 100%)',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          gridColumn: '1 / -1'
        }}>
          <p style={{
            margin: 0,
            fontWeight: '600',
            fontSize: '1.1rem',
            color: 'var(--text-accent)'
          }}>
            Awareness comes before recovery.
          </p>
        </div>
      </div>
    </div>
  );
}
