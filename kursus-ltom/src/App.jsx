import { useState, useEffect } from "react";
import { courses } from "./data/courses.js";
import { load, save } from "./utils/storage.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Learn from "./pages/Learn.jsx";
import MyCourses from "./pages/MyCourses.jsx";

// Halaman ditentukan oleh bagian setelah tanda # di alamat browser, misalnya #/kursus/ltom
function useHash() {
  const get = () => window.location.hash.replace("#", "") || "/";
  const [hash, setHash] = useState(get);
  useEffect(() => {
    const f = () => { setHash(get()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  return hash;
}

export default function App() {
  const [state, setState] = useState(load);
  useEffect(() => save(state), [state]);

  const actions = {
    enroll: (id) => setState((s) => (s.enrolled.includes(id) ? s : { ...s, enrolled: [...s.enrolled, id] })),
    complete: (cid, iid) => setState((s) => {
      const d = s.done[cid] || [];
      return d.includes(iid) ? s : { ...s, done: { ...s.done, [cid]: [...d, iid] } };
    }),
    finishQuiz: (cid, iid, score, total) => setState((s) => {
      const d = s.done[cid] || [];
      return {
        ...s,
        done: { ...s.done, [cid]: d.includes(iid) ? d : [...d, iid] },
        scores: { ...s.scores, [cid + ":" + iid]: { score, total } },
      };
    }),
  };

  const parts = useHash().split("/").filter(Boolean);
  const [page, id] = parts;
  const course = courses.find((c) => c.id === id);

  let view;
  if (!page) view = <Home courses={courses} />;
  else if (page === "kursus" && !id) view = <Catalog courses={courses} />;
  else if (page === "kursus" && course) view = <CourseDetail course={course} state={state} actions={actions} />;
  else if (page === "belajar" && course)
    view = state.enrolled.includes(course.id)
      ? <Learn key={course.id} course={course} state={state} actions={actions} />
      : <div className="container section"><p>Mulai kursus ini dulu dari <a href={"#/kursus/" + course.id}>halaman detail</a>.</p></div>;
  else if (page === "kursus-saya") view = <MyCourses courses={courses} state={state} />;
  else view = <div className="container section"><p>Halaman tidak ditemukan. <a href="#/">Kembali ke beranda</a></p></div>;

  return (
    <>
      <Navbar active={page === "belajar" ? "kursus-saya" : page || ""} />
      {view}
    </>
  );
}
