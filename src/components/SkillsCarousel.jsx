import { useEffect, useState } from "react";
import { skillCategories } from "../data/portfolio";

export default function SkillsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = skillCategories.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, index]);

  return (
    <section
      id="competences"
      className="border-y border-slate-800 bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Compétences <span className="text-gradient">& Langages</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Les technologies que je maîtrise et celles que j'explore au
            quotidien.
          </p>
        </div>

        {/* ===== Carrousel ===== */}
        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Flèche gauche */}
          <button
            onClick={prev}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 z-10 -translate-x-2 -translate-y-1/2 rounded-full border border-slate-700 bg-slate-950/90 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:-translate-x-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={next}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 rounded-full border border-slate-700 bg-slate-950/90 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:translate-x-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Fenêtre du carrousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {skillCategories.map((category) => (
                <div key={category.title} className="w-full shrink-0 px-1">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-cyan-400">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {category.description}
                      </p>
                    </div>

                    <ul className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                      {category.items.map((skill) => (
                        <li
                          key={skill.name}
                          className="rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3"
                        >
                          <p className="font-medium text-slate-200">
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
              ))}
            </div>
          </div>

          {/* Points de navigation */}
          <div className="mt-8 flex items-center justify-center gap-2">
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
        </div>
      </div>
    </section>
  );
}