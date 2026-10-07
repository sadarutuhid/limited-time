import { useState } from "react";
import Quiz from "../components/Quiz.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { progressOf } from "../utils/storage.js";

export default function Learn({ course, state, actions }) {
  const items = course.items;
  const done = state.done[course.id] || [];
  const [idx, setIdx] = useState(() => {
    const i = items.findIndex((x) => !done.includes(x.id));
    return i < 0 ? 0 : i;
  });
  const [menu, setMenu] = useState(false);
  const item = items[idx];
  const p = progressOf(course, state);
  const isDone = done.includes(item.id);
  const go = (i) => { setIdx(i); setMenu(false); window.scrollTo(0, 0); };

  return (
    <div className="container learn">
      <aside className={"side" + (menu ? " open" : "")}>
        <button className="btn ghost toggle" onClick={() => setMenu(!menu)}>{menu ? "Tutup daftar materi" : "Daftar materi"}</button>
        <div className="side-body">
          <h3>{course.title}</h3>
          <p className="meta">Progress: {p.pct}% ({p.done}/{p.total})</p>
          <ProgressBar value={p.pct} />
          <ol className="nav-list">
            {items.map((it, i) => (
              <li key={it.id}>
                <button className={(i === idx ? "current " : "") + (done.includes(it.id) ? "done" : "")} onClick={() => go(i)}>
                  <span className="num">{i + 1}</span>
                  <span>{it.type === "quiz" ? "Kuis: " : ""}{it.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </aside>

      <main className="content">
        <p className="eyebrow">{item.module}</p>
        <h1>{item.title}</h1>
        {item.type === "lesson" ? (
          <>
            <div className="video">Placeholder video pembelajaran</div>
            {item.body.map((t, i) => <p key={i}>{t}</p>)}
            {item.key && <blockquote>{item.key}</blockquote>}
            {item.link && <p><a className="btn ghost" href={item.link.url} target="_blank" rel="noreferrer">{item.link.label}</a></p>}
          </>
        ) : (
          <Quiz key={item.id} quiz={item} saved={state.scores[course.id + ":" + item.id]}
            onFinish={(s, t) => actions.finishQuiz(course.id, item.id, s, t)} />
        )}
        {p.pct === 100 && <div className="notice">Selamat, kursus selesai. Sekarang bawa satu tindakan kecilmu ke kehidupan nyata.</div>}
        <div className="actions">
          <button className="btn ghost" disabled={idx === 0} onClick={() => go(idx - 1)}>Sebelumnya</button>
          {item.type === "lesson" && (
            <button className="btn" disabled={isDone} onClick={() => actions.complete(course.id, item.id)}>{isDone ? "Sudah selesai" : "Tandai Selesai"}</button>
          )}
          <button className="btn ghost" disabled={idx === items.length - 1} onClick={() => go(idx + 1)}>Berikutnya</button>
        </div>
      </main>
    </div>
  );
}
