import { useEffect, useState } from "react";
import { loadSkills, saveSkills } from "./logic/storage";
import {
  updateAllSkills
} from "./logic/skillLifecycle";
import AddSkill from "./components/AddSkill";
import SkillList from "./components/SkillList";
import SkillMap from "./components/SkillMap";


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
return (
  <div>
    <h1>Skill Decay Map</h1>

    <AddSkill onAdd={handleAddSkill} />

    <SkillMap skills={skills} />
    <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
  <div>● Green: recently practiced</div>
  <div>● Yellow: soft decay</div>
  <div>● Red: structural decay</div>
</div>

  </div>
);

}

export default App;
