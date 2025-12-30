export default function Graveyard({ skills }) {
  const dead = skills.filter((s) => s.archived);

  if (dead.length === 0) return null;

  return (
    <div style={{ marginTop: "2rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
      <h3 style={{ fontWeight: 500 }}>Graveyard</h3>
      <ul>
        {dead.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}
