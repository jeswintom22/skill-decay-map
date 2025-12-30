import { useEffect, useState } from "react";
import { loadSkills, saveSkills } from "./logic/storage";
import {
  updateAllSkills,
  markSkillPracticed,
} from "./logic/skillLifecycle";
import AddSkill from "./components/AddSkill";
import SkillList from "./components/SkillList";

function App() {
  const [skills, setSkills] = useState(() => {
    const stored = loadSkills();
    return updateAllSkills(stored);
  });

  useEffect(() => {
    saveSkills(skills);
  }, [skills]);

  function handleAddSkill(skill) {
    setSkills((prev) => updateAllSkills([...prev, skill]));
  }

  function handlePractice(skillId) {
    setSkills((prev) =>
      updateAllSkills(markSkillPracticed(prev, skillId))
    );
  }

  return (
    <div>
      <h1>Skill Decay Map</h1>

      <AddSkill onAdd={handleAddSkill} />

      <hr />

      <SkillList skills={skills} onPractice={handlePractice} />
    </div>
  );
}

export default App;
