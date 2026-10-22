import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="competences"
      className="border-y border-slate-800 bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">
          Compétences <span className="text-gradient">& Langages</span>
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Les technologies que je maîtrise et celles que j'explore au quotidien.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="text-lg font-semibold text-cyan-400">
                {category.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                {category.description}
              </p>

              <ul className="mt-6 space-y-3">
                {category.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start justify-between gap-3 border-b border-slate-800 pb-2 last:border-b-0"
                  >
                    <span className="font-medium text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-right text-xs text-slate-500">
                      {skill.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}