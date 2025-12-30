// src/logic/storage.js

const STORAGE_KEY = "skill-decay-map-skills";

export function loadSkills() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

export function saveSkills(skills) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
}
