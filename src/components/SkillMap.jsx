import { useState } from "react";

const STATUS_COLOR = {
  green: "#10b981", // More vibrant green
  yellow: "#f59e0b", // Better yellow
  red: "#ef4444", // Keep red
};

const STATUS_GRADIENT = {
  green: "radial-gradient(circle, #10b981 0%, #059669 100%)",
  yellow: "radial-gradient(circle, #f59e0b 0%, #d97706 100%)",
  red: "radial-gradient(circle, #ef4444 0%, #dc2626 100%)",
};

function sizeFromImportance(importance) {
  if (importance === "critical") return 16;
  if (importance === "medium") return 12;
  return 8;
}

function radiusFromCore(coreLevel, shift = 0) {
  let base;
  if (coreLevel === "core") base = 60;
  else if (coreLevel === "important") base = 120;
  else base = 180;

  return base + shift;
}

export default function SkillMap({ skills, onMarkAsPracticed }) {
  const center = 250;
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div style={{ textAlign: 'center' }}>
      <svg
        width={500}
        height={500}
        style={{
          display: "block",
          margin: "0 auto",
          background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)",
          borderRadius: "20px",
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)",
          border: "2px solid var(--border)"
        }}
      >
        {/* Background rings with gradients */}
        <defs>
          <radialGradient id="coreRing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.1)" />
            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.05)" />
          </radialGradient>
          <radialGradient id="importantRing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0.1)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.05)" />
          </radialGradient>
          <radialGradient id="peripheralRing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.05)" />
          </radialGradient>
        </defs>

        {/* Core rings with labels */}
        <circle cx={center} cy={center} r={60} fill="url(#coreRing)" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx={center} cy={center} r={120} fill="url(#importantRing)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
        <circle cx={center} cy={center} r={180} fill="url(#peripheralRing)" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />

        {/* Ring labels */}
        <text x={center} y={center - 75} textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Core</text>
        <text x={center} y={center - 135} textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Important</text>
        <text x={center} y={center - 195} textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="600">Peripheral</text>

        {/* Center */}
        <circle cx={center} cy={center} r={6} fill="#4f46e5" />
        <text x={center} y={center + 25} textAnchor="middle" fill="var(--text-accent)" fontSize="14" fontWeight="700">YOU</text>

        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const r = radiusFromCore(skill.coreLevel, skill.coreShift || 0);
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);

          return (
            <g key={skill.id}>
              <circle
                cx={x}
                cy={y}
                r={sizeFromImportance(skill.importance)}
                fill={STATUS_COLOR[skill.status]}
                stroke="#ffffff"
                strokeWidth={3}
                onClick={() => setSelectedSkill(skill)}
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                  cursor: "pointer"
                }}
              >
                <title>
                  {skill.name}
                  {"\n"}
                  Status: {skill.status}
                  {"\n"}
                  Importance: {skill.importance}
                  {"\n"}
                  Core Level: {skill.coreLevel}
                </title>
              </circle>
              {/* Skill name labels for larger skills */}
              {skill.importance === "critical" && (
                <text
                  x={x}
                  y={y + sizeFromImportance(skill.importance) + 15}
                  textAnchor="middle"
                  fill="var(--text)"
                  fontSize="10"
                  fontWeight="500"
                  style={{ pointerEvents: "none" }}
                >
                  {skill.name.length > 10 ? skill.name.substring(0, 10) + "..." : skill.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '1rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: STATUS_COLOR.green
          }}></div>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Healthy</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: STATUS_COLOR.yellow
          }}></div>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Warning</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: STATUS_COLOR.red
          }}></div>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Critical</span>
        </div>
      </div>

      {/* Skill Details Modal */}
      {selectedSkill && (
        <div
          onClick={() => setSelectedSkill(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--panel)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-hover)',
              maxWidth: '400px',
              width: '90%',
              animation: 'slideInUp 0.4s ease-out'
            }}
          >
            <h3 style={{ 
              color: 'var(--text-accent)',
              marginBottom: '1rem',
              marginTop: 0
            }}>
              {selectedSkill.name}
            </h3>
            
            <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Status:</strong> <span style={{
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  color: selectedSkill.status === 'green' ? '#10b981' : selectedSkill.status === 'yellow' ? '#f59e0b' : '#ef4444'
                }}>{selectedSkill.status}</span>
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Importance:</strong> {selectedSkill.importance}
              </p>
              <p style={{ margin: '0.5rem 0' }}>
                <strong>Core Level:</strong> {selectedSkill.coreLevel}
              </p>
              <p style={{ margin: '0.5rem 0', color: 'var(--text-muted)' }}>
                <strong>Last Practiced:</strong> {new Date(selectedSkill.lastPracticed).toLocaleDateString()}
              </p>
            </div>

            <button
              onClick={() => {
                onMarkAsPracticed(selectedSkill.id);
                setSelectedSkill(null);
              }}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--gradient-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'var(--shadow)';
              }}
            >
              ✓ Mark as Practiced
            </button>

            <button
              onClick={() => setSelectedSkill(null)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.75rem',
                background: 'transparent',
                color: 'var(--text-muted)',
                border: '2px solid var(--border)',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--text-accent)';
                e.target.style.color = 'var(--text-accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.color = 'var(--text-muted)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
