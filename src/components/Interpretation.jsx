export default function Interpretation({ notes }) {
  if (notes.length === 0) return null;

  return (
    <div style={{ marginTop: "2rem", fontSize: "0.95rem" }}>
      {notes.map((n, i) => (
        <p key={i}>{n}</p>
      ))}
    </div>
  );
}
