export const LENSES = {
  default: {
    name: "Default",
    importanceWeight: 1,
    coreBias: 0,
    decayMultiplier: 1,
  },
  professional: {
    name: "Professional",
    importanceWeight: 1.2,
    coreBias: -20,
    decayMultiplier: 1.1,
  },
  creative: {
    name: "Creative",
    importanceWeight: 1.3,
    coreBias: -10,
    decayMultiplier: 1.3,
  },
  survival: {
    name: "Survival",
    importanceWeight: 0.8,
    coreBias: 30,
    decayMultiplier: 0.9,
  },
};
