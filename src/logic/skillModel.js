// src/logic/skillModel.js

export function createSkill({
  name,
  importance,
  decayRate,
  coreLevel,
}) {
  return {
    id: crypto.randomUUID(),
    name,                 // user-defined text
    importance,           // low | medium | critical
    decayRate,            // slow | medium | fast
    coreLevel,            // peripheral | important | core
    lastPracticed: new Date().toISOString(),
    status: "green",      // derived later
  };
}
