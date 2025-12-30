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
    <form onSubmit={handleSubmit} className="flex-column">
      <div className="form-group">
        <label htmlFor="skill-name">Skill Name</label>
        <input
          id="skill-name"
          placeholder="Enter skill name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="form-group">
          <label htmlFor="importance">Importance</label>
          <select
            id="importance"
            value={importance}
            onChange={(e) => setImportance(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="critical">Critical</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="decay-rate">Decay Rate</label>
          <select
            id="decay-rate"
            value={decayRate}
            onChange={(e) => setDecayRate(e.target.value)}
          >
            <option value="slow">Slow</option>
            <option value="medium">Medium</option>
            <option value="fast">Fast</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="core-level">Core Level</label>
        <select
          id="core-level"
          value={coreLevel}
          onChange={(e) => setCoreLevel(e.target.value)}
        >
          <option value="peripheral">Peripheral</option>
          <option value="important">Important</option>
          <option value="core">Core</option>
        </select>
      </div>

      <button type="submit" className="primary" style={{ alignSelf: 'flex-start' }}>
        Add Skill
      </button>
    </form>
  );
}
