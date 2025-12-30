export function interpretMap(skills) {
  if (skills.length === 0) return [];

  const core = skills.filter(s => s.coreLevel === "core" && !s.archived);
  const redCore = core.filter(s => s.status === "red");
  const peripheralRed = skills.filter(
    s => s.coreLevel === "peripheral" && s.status === "red"
  );

  const notes = [];

  if (redCore.length > 0) {
    notes.push(
      "One or more core skills are in structural decay."
    );
  }

  if (peripheralRed.length > core.length) {
    notes.push(
      "Peripheral skills are eroding faster than core skills."
    );
  }

  if (skills.every(s => s.status === "green")) {
    notes.push(
      "No visible skill decay at this time."
    );
  }

  return notes;
}
