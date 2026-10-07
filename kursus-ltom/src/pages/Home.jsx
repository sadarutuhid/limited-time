import Catalog from "./Catalog.jsx";

export default function Home({ courses }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Berkembang tanpa menunggu hidup lebih senggang</h1>
          <p>Pilih kursus, belajar selangkah demi selangkah, dan lihat progresmu.</p>
          <a className="btn" href="#/kursus">Lihat Kursus</a>
        </div>
      </section>
      <Catalog courses={courses} />
    </>
  );
}
