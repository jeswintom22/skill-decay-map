import { LENSES } from "../logic/lenses";

export default function LensSelector({ current, setCurrent }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label>Perspective: </label>
      <select
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
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
