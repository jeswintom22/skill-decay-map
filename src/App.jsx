import { useEffect, useState } from "react";
import { loadSkills, saveSkills } from "./logic/storage";
import { updateAllSkills } from "./logic/skillLifecycle";

import AddSkill from "./components/AddSkill";
import SkillMap from "./components/SkillMap";
import TimeSlider from "./components/TimeSlider";
import Graveyard from "./components/Graveyard";
import Manifesto from "./components/Manifesto";

function App() {
  const [offsetDays, setOffsetDays] = useState(0);

  const [skills, setSkills] = useState(() => {
    const stored = loadSkills();
    return updateAllSkills(stored);
  });

  useEffect(() => {
    saveSkills(skills);
  }, [skills]);

  // recompute skills when time shifts
  const virtualNow = new Date(Date.now() + offsetDays * 86400000);
  const visibleSkills = updateAllSkills(skills, virtualNow);

  function handleAddSkill(skill) {
    setSkills((prev) => [...prev, skill]);
  }

  return (
    <div>
      <h1>Skill Decay Map</h1>

      <AddSkill onAdd={handleAddSkill} />

      <TimeSlider
        offsetDays={offsetDays}
        setOffsetDays={setOffsetDays}
      />

      <SkillMap skills={visibleSkills.filter(s => !s.archived)} />

      <Graveyard skills={visibleSkills} />

      <Manifesto />
    </div>
  );
}

export default App;
