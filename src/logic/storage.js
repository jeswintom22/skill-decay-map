// src/logic/storage.js

const USERS_STORAGE_KEY = "skill-decay-map-users";

function getUserKey(username) {
  return `skill-decay-map-skills-${username}`;
}

export function loadSkills(username) {
  const key = getUserKey(username);
  const raw = localStorage.getItem(key);
  if (!raw) return [];
  return JSON.parse(raw);
}

export function saveSkills(skills, username) {
  const key = getUserKey(username);
  localStorage.setItem(key, JSON.stringify(skills));
}

export function markSkillAsPracticed(skills, skillId) {
  return skills.map(skill =>
    skill.id === skillId
      ? { ...skill, lastPracticed: new Date().toISOString() }
      : skill
  );
}
