import { useEffect, useState } from "react";
import { loadSkills, saveSkills } from "./logic/storage";
import { updateAllSkills, applyLens } from "./logic/skillLifecycle";
import { LENSES } from "./logic/lenses";

import AddSkill from "./components/AddSkill";
import SkillMap from "./components/SkillMap";
import TimeSlider from "./components/TimeSlider";
import Graveyard from "./components/Graveyard";
import Manifesto from "./components/Manifesto";
import LensSelector from "./components/LensSelector";
import Interpretation from "./components/Interpretation";
import { interpretMap } from "./logic/interpreter";
import AIReflection from "./components/AIReflection";

function App() {
  const [baseNow] = useState(() => new Date());


  const [offsetDays, setOffsetDays] = useState(0);
  const [lensKey, setLensKey] = useState("default");

  const [skills, setSkills] = useState(() => {
    const stored = loadSkills();
    return updateAllSkills(stored);
  });

  useEffect(() => {
    saveSkills(skills);
  }, [skills]);

  // virtual time
 const MS_PER_DAY = 24 * 60 * 60 * 1000;

const virtualNow = new Date(
  baseNow.getTime() + offsetDays * MS_PER_DAY
);


  const lens = LENSES[lensKey];

  // apply time + lens projection
  const visibleSkills = updateAllSkills(skills, virtualNow).map(
    (s) => applyLens(s, lens)
  );

const snapshot = visibleSkills.map(s => ({
  name: s.name,
  status: s.status,
  coreLevel: s.coreLevel,
  importance: s.importance,
  archived: s.archived ?? false,
}));


const notes = interpretMap(visibleSkills);

  function handleAddSkill(skill) {
    setSkills((prev) => [...prev, skill]);
  }

// this is a mock response add ai later using api
async function askAI(snapshot) {
  // Simulate thinking time
  await new Promise((res) => setTimeout(res, 600));

  const red = snapshot.filter(s => s.status === "red" && !s.archived);
  const green = snapshot.filter(s => s.status === "green");
  const archived = snapshot.filter(s => s.archived);

  if (archived.length > 0) {
    return "Some skills have already fallen out of active memory. They are no longer shaping daily identity.";
  }

  if (red.length > green.length) {
    return "Several skills are eroding simultaneously. This suggests sustained attention has been narrow or disrupted.";
  }

  if (red.length > 0) {
    return "A small number of important capabilities are weakening. The system reflects early structural drift.";
  }

  return "Most tracked skills appear stable at this moment. No significant decay pattern is visible.";
}
  

return (
    <div>
      <h1>Skill Decay Map</h1>

      <AddSkill onAdd={handleAddSkill} />

      <TimeSlider
        offsetDays={offsetDays}
        setOffsetDays={setOffsetDays}
      />

      <LensSelector
        current={lensKey}
        setCurrent={setLensKey}
      />

      <div
      style={{
        marginTop: "2rem",
        padding: "1.5rem",
        background: "var(--panel)",
        borderRadius: "12px",
        border: "1px solid var(--border)",
      }}
    >
      <SkillMap skills={visibleSkills.filter((s) => !s.archived)} />
    </div>
      <Graveyard skills={visibleSkills} />
      <AIReflection snapshot={snapshot} askAI={askAI} />
      <Interpretation notes={notes} />
      <Manifesto />
    </div>
  );
}

export default App;
