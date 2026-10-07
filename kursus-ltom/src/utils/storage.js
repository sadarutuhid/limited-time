// "Buku catatan kecil" di dalam browser (LocalStorage).
const KEY = "kelas-tumbuh-v1";
const kosong = { enrolled: [], done: {}, scores: {} };

export function load() {
  try { return { ...kosong, ...JSON.parse(localStorage.getItem(KEY)) }; }
  catch { return kosong; }
}
export function save(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* abaikan */ }
}
export function progressOf(course, state) {
  const done = (state.done[course.id] || []).length;
  const total = course.items.length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}
