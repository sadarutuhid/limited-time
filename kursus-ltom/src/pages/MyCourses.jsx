import ProgressBar from "../components/ProgressBar.jsx";
import { progressOf } from "../utils/storage.js";

export default function MyCourses({ courses, state }) {
  const mine = courses.filter((c) => state.enrolled.includes(c.id));
  return (
    <section className="container section">
      <h2>Kursus Saya</h2>
      {mine.length === 0 && <p>Kamu belum memulai kursus apa pun. <a href="#/kursus">Lihat daftar kursus</a></p>}
      <div className="grid">
        {mine.map((c) => {
          const p = progressOf(c, state);
          return (
            <div className="card" key={c.id}>
              <div className="card-body">
                <h3>{c.title}</h3>
                <p className="meta">Progress: {p.pct}% ({p.done}/{p.total})</p>
                <ProgressBar value={p.pct} />
                <p><a className="btn" href={"#/belajar/" + c.id}>Lanjutkan Belajar</a></p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
