import { useState } from "react";
import CourseCard from "../components/CourseCard.jsx";

export default function Catalog({ courses }) {
  const [cat, setCat] = useState("Semua");
  const cats = ["Semua", ...new Set(courses.map((c) => c.category))];
  const list = cat === "Semua" ? courses : courses.filter((c) => c.category === cat);
  return (
    <section className="container section">
      <h2>Kursus</h2>
      <div className="filters">
        {cats.map((c) => (
          <button key={c} className={"chip" + (c === cat ? " on" : "")} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">{list.map((c) => <CourseCard key={c.id} course={c} />)}</div>
    </section>
  );
}
