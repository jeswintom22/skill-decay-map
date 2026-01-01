import { useEffect, useState } from "react";
import { loadSkills, saveSkills, markSkillAsPracticed } from "./logic/storage";
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
import Login from "./components/Login";

function App() {
  const [baseNow] = useState(() => new Date());
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");


  const [offsetDays, setOffsetDays] = useState(0);
  const [lensKey, setLensKey] = useState("default");

  const [skills, setSkills] = useState(() => {
    const stored = loadSkills(username);
    return updateAllSkills(stored);
  });

  useEffect(() => {
    saveSkills(skills, username);
  }, [skills, username]);

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

  function handleMarkAsPracticed(skillId) {
    setSkills((prev) => {
      const updated = markSkillAsPracticed(prev, skillId);
      return updateAllSkills(updated);
    });
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
  

  if (showLanding) {
    return (
      <div
        onClick={() => setShowLanding(false)}
        className="lava-lamp"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '5rem',
          fontWeight: '700',
          color: '#ffffff',
          textAlign: 'center',
          transition: 'opacity 0.5s ease',
          zIndex: 1000,
          textShadow: '0 4px 20px rgba(81, 226, 245, 0.4), 0 2px 10px rgba(157, 249, 239, 0.3)'
        }}
      >
        SKILL DECAY MAP
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Login onLogin={(name) => {
      setUsername(name);
      setIsLoggedIn(true);
    }} />;
  }

return (
    <div className="fade-in" style={{
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <header className="text-center mb-4">
        <h1>Skill Decay Map</h1>
        <p style={{
          color: '#51e2f5',
          fontSize: '1.25rem',
          marginBottom: '0.5rem',
          fontWeight: '500'
        }}>
          Hi, {username}! 👋
        </p>
        <p style={{
          color: '#a28089',
          fontSize: '1.125rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Visualize and track the natural decay of your skills over time.
          Stay aware, stay sharp.
        </p>
      </header>

      <div className="grid">
        <div className="card">
          <h2>Add New Skill</h2>
          <AddSkill onAdd={handleAddSkill} />
        </div>

        <div className="card">
          <h2>Time Controls</h2>
          <div className="flex-column">
            <TimeSlider
              offsetDays={offsetDays}
              setOffsetDays={setOffsetDays}
            />
            <LensSelector
              current={lensKey}
              setCurrent={setLensKey}
            />
          </div>
        </div>
      </div>

      <div className="panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Skill Map</h2>
        <SkillMap skills={visibleSkills.filter((s) => !s.archived)} onMarkAsPracticed={handleMarkAsPracticed} />
      </div>

      <div className="grid" style={{ marginTop: '2rem' }}>
        <Graveyard skills={visibleSkills} />
        <AIReflection snapshot={snapshot} askAI={askAI} />
      </div>

      <Interpretation notes={notes} />
      <Manifesto />
    </div>
  );
}

export default App;
