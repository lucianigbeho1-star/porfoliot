import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Projets <span className="text-gradient">réalisés</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Une sélection de projets académiques et personnels, du prototype
            jusqu'au déploiement.
          </p>
        </div>
        <span className="text-sm text-slate-500">
          {projects.length} projets
        </span>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                  project.status === "En cours"
                    ? "bg-amber-500/10 text-amber-400"
                    : "bg-emerald-500/10 text-emerald-400"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {project.context}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4 pt-6 text-sm font-medium">
              <a
                href={project.demo}
                className="text-cyan-400 transition hover:text-cyan-300"
              >
                Démo →
              </a>
              <a
                href={project.github}
                className="text-slate-300 transition hover:text-cyan-400"
              >
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}