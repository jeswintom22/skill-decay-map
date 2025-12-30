import { useState } from "react";
import { createSkill } from "../logic/skillModel";

export default function AddSkill({ onAdd }) {
  const [name, setName] = useState("");
  const [importance, setImportance] = useState("medium");
  const [decayRate, setDecayRate] = useState("medium");
  const [coreLevel, setCoreLevel] = useState("important");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd(
      createSkill({
        name: name.trim(),
        importance,
        decayRate,
        coreLevel,
      })
    );

    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={importance} onChange={(e) => setImportance(e.target.value)}>
        <option value="low">Low importance</option>
        <option value="medium">Medium importance</option>
        <option value="critical">Critical</option>
      </select>

      <select value={decayRate} onChange={(e) => setDecayRate(e.target.value)}>
        <option value="slow">Slow decay</option>
        <option value="medium">Medium decay</option>
        <option value="fast">Fast decay</option>
      </select>

      <select value={coreLevel} onChange={(e) => setCoreLevel(e.target.value)}>
        <option value="peripheral">Peripheral</option>
        <option value="important">Important</option>
        <option value="core">Core</option>
      </select>

      <button type="submit">Add skill</button>
    </form>
  );
}
