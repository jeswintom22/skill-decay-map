import { LENSES } from "../logic/lenses";

export default function LensSelector({ current, setCurrent }) {
  return (
    <div className="form-group">
      <label style={{ fontWeight: '600', color: 'var(--text-accent)' }}>
        Perspective Lens
      </label>
      <select
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        style={{ maxWidth: '200px' }}
      >
        {Object.entries(LENSES).map(([key, lens]) => (
          <option key={key} value={key}>
            {lens.name}
          </option>
        ))}
      </select>
    </div>
  );
}
