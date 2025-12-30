export default function TimeSlider({ offsetDays, setOffsetDays }) {
  return (
    <div className="form-group">
      <label style={{ fontWeight: '600', color: 'var(--text-accent)' }}>
        Time Projection: {offsetDays === 0 ? 'Present' : `${offsetDays} days ahead`}
      </label>
      <input
        type="range"
        min="0"
        max="365"
        step="30"
        value={offsetDays}
        onChange={(e) => setOffsetDays(Number(e.target.value))}
        style={{
          width: '100%',
          height: '6px',
          borderRadius: '3px',
          background: 'var(--border)',
          outline: 'none',
          cursor: 'pointer'
        }}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        marginTop: '0.5rem'
      }}>
        <span>Now</span>
        <span>1 Year</span>
      </div>
    </div>
  );
}
