// src/logic/skillLifecycle.js

import { calculateDecayStatus } from "./decayEngine";

export function updateSkillStatus(skill) {
  return {
    ...skill,
    status: calculateDecayStatus(skill),
  };
}

export function updateAllSkills(skills) {
  return skills.map(updateSkillStatus);
}
