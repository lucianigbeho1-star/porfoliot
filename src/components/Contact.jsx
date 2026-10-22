import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-900/40"
    >
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Discutons de votre <span className="text-gradient">projet</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Une question, une collaboration, un stage ? N'hésitez pas à me
          contacter, je réponds rapidement.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 glow-cyan"
          >
            ✉ Envoyer un email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}