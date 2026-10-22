import { profile } from "../data/portfolio";

export default function Navbar() {
  const links = [
    { href: "#apropos", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* ===== Logo + Photo + Nom ===== */}
        <a href="#" className="group flex items-center gap-3">
          {/* Avatar */}
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-cyan-400/60 transition group-hover:border-cyan-400">
            <img
              src="public/WhatsApp Image 2026-06-01 at 14.21.46 (4).jpeg"
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.classList.add(
                  "flex", "items-center", "justify-center",
                  "bg-slate-800", "text-xs", "text-slate-500"
                );
                e.currentTarget.parentElement.textContent = "LG";
              }}
            />
          </div>

          {/* Nom */}
          <span className="text-xl font-bold text-cyan-400 transition group-hover:text-cyan-300">
            {profile.name.split(" ")[0]}
          </span>
        </a>

        {/* ===== Liens ===== */}
        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-cyan-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ===== CTA ===== */}
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Me contacter
        </a>
      </nav>
    </header>
  );
}