import { useEffect, useState } from "react";
import { loadSkills, saveSkills } from "./logic/storage";
import { updateAllSkills } from "./logic/skillLifecycle";


function App() {
 const [skills, setSkills] = useState(() => {
  const stored = loadSkills();
  return updateAllSkills(stored);
});

  useEffect(() => {
    saveSkills(skills);
  }, [skills]);

  return (
    <div>
      Skill Decay Map
    </div>
  );
}

export default App;
