import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
      <p>
        © {new Date().getFullYear()} {profile.name} · Construit avec React &
        Tailwind CSS
      </p>
    </footer>
  );
}