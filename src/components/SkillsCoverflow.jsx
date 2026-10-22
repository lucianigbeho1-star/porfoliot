import { useEffect, useState } from "react";
import { skillCategories } from "../data/portfolio";

export default function SkillsCoverflow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = skillCategories.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [paused, index]);

  // Navigation clavier
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="competences"
      className="border-y border-slate-800 bg-slate-900/40 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Compétences <span className="text-gradient">& Langages</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Cliquez sur une carte, utilisez les flèches ← → ou laissez défiler.
          </p>
        </div>

        {/* ===== SCÈNE 3D ===== */}
        <div
          className="relative mx-auto h-[560px] w-full"
          style={{ perspective: "1600px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {skillCategories.map((category, i) => {
            const offset = i - index;
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;

            return (
              <div
                key={category.title}
                onClick={() => setIndex(i)}
                className="absolute left-1/2 top-1/2 w-[290px] cursor-pointer transition-all duration-700 ease-out md:w-[340px]"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 62}%)
                    translateZ(${-absOffset * 220}px)
                    rotateY(${offset * -42}deg)
                  `,
                  zIndex: 10 - absOffset,
                  opacity: isActive
                    ? 1
                    : absOffset > 2
                    ? 0
                    : Math.max(0.35, 1 - absOffset * 0.22),
                  filter: isActive ? "none" : "brightness(0.65)",
                }}
              >
                <div
                  className={`rounded-2xl border p-6 transition-all duration-500 ${
                    isActive
                      ? "border-cyan-400/70 bg-slate-900 shadow-[0_0_80px_-15px_rgba(34,211,238,0.55)]"
                      : "border-slate-800 bg-slate-950"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {category.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {category.items.map((skill) => (
                      <li
                        key={skill.name}
                        className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2"
                      >
                        <p className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {skill.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          {/* Flèche gauche */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Précédent"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-950/90 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:left-6"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Suivant"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-950/90 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:right-6"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Points de navigation */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {skillCategories.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller à la catégorie ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>

        {/* Indicateur texte */}
        <p className="mt-4 text-center text-xs text-slate-600">
          {index + 1} / {total} · {skillCategories[index].title}
        </p>
      </div>
    </section>
  );
}