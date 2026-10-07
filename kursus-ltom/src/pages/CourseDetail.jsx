import ProgressBar from "../components/ProgressBar.jsx";
import { progressOf } from "../utils/storage.js";

export default function CourseDetail({ course, state, actions }) {
  const enrolled = state.enrolled.includes(course.id);
  const done = state.done[course.id] || [];
  const p = progressOf(course, state);
  const lessons = course.items.filter((i) => i.type === "lesson").length;

  const start = () => { actions.enroll(course.id); window.location.hash = "#/belajar/" + course.id; };

  return (
    <div className="container section detail">
      <div className="thumb big" style={{ background: course.color }}><span>{course.badge}</span></div>
      <span className="tag">{course.category}</span>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p className="meta">Instruktur: {course.instructor} · Level: {course.level} · {lessons} materi · Estimasi {course.minutes} menit</p>
      {enrolled && <><p className="meta">Progress: {p.pct}% ({p.done}/{p.total})</p><ProgressBar value={p.pct} /></>}
      <button className="btn" onClick={start}>{enrolled ? "Lanjutkan Belajar" : "Mulai Kursus"}</button>
      <h2>Daftar Materi</h2>
      <ol className="lessons">
        {course.items.map((it, i) => (
          <li key={it.id}>
            {(i === 0 || course.items[i - 1].module !== it.module) && <div className="module">{it.module}</div>}
            <div className="row">
              <span className="num">{i + 1}</span>
              <span className="grow">{it.type === "quiz" ? "Kuis: " : ""}{it.title}</span>
              <span className={"status" + (done.includes(it.id) ? " ok" : "")}>{done.includes(it.id) ? "Selesai" : "Belum selesai"}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
