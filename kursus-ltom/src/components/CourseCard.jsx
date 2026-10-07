export default function CourseCard({ course }) {
  const lessons = course.items.filter((i) => i.type === "lesson").length;
  return (
    <a className="card" href={"#/kursus/" + course.id}>
      <div className="thumb" style={{ background: course.color }}><span>{course.badge}</span></div>
      <div className="card-body">
        <span className="tag">{course.category}</span>
        <h3>{course.title}</h3>
        <p>{course.short}</p>
        <p className="meta">{course.instructor} · {course.level} · {lessons} materi</p>
      </div>
    </a>
  );
}
