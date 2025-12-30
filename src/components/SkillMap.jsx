const STATUS_COLOR = {
  green: "#22c55e",
  yellow: "#eab308",
  red: "#ef4444",
};

function sizeFromImportance(importance) {
  if (importance === "critical") return 12;
  if (importance === "medium") return 9;
  return 6;
}

function radiusFromCore(coreLevel, shift = 0) {
  let base;
  if (coreLevel === "core") base = 60;
  else if (coreLevel === "important") base = 120;
  else base = 180;

  return base + shift;
}

export default function SkillMap({ skills }) {
  const center = 200;

  return (
    <svg width={400} height={400} style={{display: "block",
    margin: "0 auto",
    background: "#fafafa",
    borderRadius: "12px", }}>
        {/* Core rings */}
<circle cx={center} cy={center} r={60} fill="none" stroke="#e5e7eb" />
<circle cx={center} cy={center} r={120} fill="none" stroke="#e5e7eb" />
<circle cx={center} cy={center} r={180} fill="none" stroke="#e5e7eb" />

      {/* center */}
      <circle cx={center} cy={center} r={4} fill="#111" />

      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI;
        const r = radiusFromCore(
  skill.coreLevel,
  skill.coreShift || 0
);


        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);

        return (
         <circle
  key={skill.id}
  cx={x}
  cy={y}
  r={sizeFromImportance(skill.importance)}
  fill={STATUS_COLOR[skill.status]}
  stroke="#111"
  strokeWidth={1}
>
  <title>
    {skill.name}
    {"\n"}
    Status: {skill.status}
  </title>
</circle>

        );
      })}
    </svg>
  );
}
