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
          <div>Importance: {skill.importance}</div>
          <div>Decay rate: {skill.decayRate}</div>
          <div>Core level: {skill.coreLevel}</div>

          <button onClick={() => onPractice(skill.id)}>
            Mark as practiced
          </button>
        </li>
      ))}
    </ul>
  );
}
