// src/logic/decayEngine.js

export function calculateDecayStatus(skill) {
  const now = new Date();
  const lastUsed = new Date(skill.lastPracticed);

  const daysInactive = Math.floor(
    (now - lastUsed) / (1000 * 60 * 60 * 24)
  );

  // Quiet grace period
  if (daysInactive < 7) {
    return "green";
  }

  // Soft decay — skill friction increases
  if (daysInactive < 30) {
    return "yellow";
  }

  // Structural decay — relearning cost rises
  return "red";
}
