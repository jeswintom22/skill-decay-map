export default function SkillList({ skills, onPractice }) {
  if (skills.length === 0) {
    return <p>No skills yet.</p>;
  }

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} style={{ marginBottom: "1rem" }}>
          <strong>{skill.name}</strong>

          <div>Status: {skill.status}</div>
          <div>
            Last practiced:{" "}
            {new Date(skill.lastPracticed).toLocaleString()}
          </div>

          <button onClick={() => onPractice(skill.id)}>
            Mark as practiced
          </button>
        </li>
      ))}
    </ul>
  );
}
