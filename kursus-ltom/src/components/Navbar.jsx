export default function Navbar({ active }) {
  const links = [["", "Beranda", "/"], ["kursus", "Kursus", "/kursus"], ["kursus-saya", "Kursus Saya", "/kursus-saya"]];
  return (
    <header className="nav">
      <div className="container nav-in">
        <a className="brand" href="#/">Kelas Tumbuh</a>
        <nav>
          {links.map(([key, label, path]) => (
            <a key={key} href={"#" + path} className={active === key ? "active" : ""}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
