import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="apropos"
      className="relative mx-auto max-w-6xl px-6 py-20"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* ===== Colonne texte ===== */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400 animate-fade-up">
            Portfolio · {profile.role}
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl animate-fade-up delay-100">
            Bonjour, je suis{" "}
            <span className="text-gradient">{profile.name}</span>.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300 animate-fade-up delay-200">
            {profile.bio}
          </p>

          <p className="mt-4 text-slate-400 animate-fade-up delay-200">
            {profile.bioSecondary}
          </p>

          <p className="mt-4 font-medium text-cyan-300 animate-fade-up delay-300">
            {profile.goal}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up delay-300">
            <a
              href="#projets"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 glow-cyan"
            >
              Voir mes projets
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Mon GitHub
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 animate-fade-in delay-500">
            {[
              { value: "9+", label: "Langages" },
              { value: "8", label: "Projets" },
              { value: "3e", label: "Année" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-cyan-400">{item.value}</p>
                <p className="text-xs text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Colonne photo ===== */}
        <div className="relative flex justify-center md:justify-end animate-fade-in delay-200">
          {/* Halo lumineux derrière */}
          <div className="absolute h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl md:h-96 md:w-96" />

          {/* Cadre photo */}
          <div className="relative">
            {/* Anneau animé */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-400 to-indigo-500 opacity-40 blur-md animate-pulse" />

            {/* Photo */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-2xl md:h-80 md:w-80">
              <img
                src="/luciani-gbeho.jpeg"
                alt={`Photo de ${profile.name}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add(
                    "flex", "items-center", "justify-center",
                    "bg-slate-800", "text-slate-500", "text-sm"
                  );
                  e.currentTarget.parentElement.textContent =
                    "Ajoute ta photo dans /public/luciani-gbeho.jpeg";
                }}
              />
            </div>

            {/* Badge de disponibilité */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/40 bg-slate-900 px-4 py-1.5 text-xs font-medium text-cyan-300">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
              Disponible pour stage / collaboration /Emplois
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}