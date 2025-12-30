export function calculateDecayStatus(skill, now = new Date()) {
  const lastUsed = new Date(skill.lastPracticed);

  const daysInactive = Math.floor(
    (now - lastUsed) / (1000 * 60 * 60 * 24)
  );

  if (daysInactive < 7) return "green";
  if (daysInactive < 30) return "yellow";
  return "red";
}

export function isDeepDecay(skill, now = new Date()) {
  const lastUsed = new Date(skill.lastPracticed);
  const daysInactive = Math.floor(
    (now - lastUsed) / (1000 * 60 * 60 * 24)
  );

  return daysInactive >= 90; // deep decay threshold
}
