export default function TimeSlider({ offsetDays, setOffsetDays }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label>
        Time view: {offsetDays} days ahead
      </label>
      <input
        type="range"
        min="0"
        max="365"
        step="30"
        value={offsetDays}
        onChange={(e) => setOffsetDays(Number(e.target.value))}
      />
    </div>
  );
}
