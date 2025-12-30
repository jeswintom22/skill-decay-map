import { calculateDecayStatus, isDeepDecay } from "./decayEngine";

export function updateAllSkills(skills, now = new Date()) {
  return skills.map((skill) => {
    const status = calculateDecayStatus(skill, now);

    if (isDeepDecay(skill, now)) {
      return { ...skill, archived: true };
    }

    return { ...skill, status, archived: false };
  });
}

export function applyLens(skill, lens) {
  return {
    ...skill,
    _lens: lens.name,
    importanceFactor: lens.importanceWeight,
    coreShift: lens.coreBias,
    decayFactor: lens.decayMultiplier,
  };
}
