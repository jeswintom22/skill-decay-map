import { useState } from "react";

export default function AIReflection({ snapshot, askAI }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const result = await askAI(snapshot);
    setText(result);
    setLoading(false);
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <button onClick={handleClick} disabled={loading}>
        Reflect
      </button>
     {text && (
  <div
    style={{
      marginTop: "1rem",
      padding: "1rem",
      borderLeft: "3px solid var(--border)",
      color: "var(--muted)",
    }}
  >
    <p>{text}</p>
  </div>
)}

    </div>
  );
}
