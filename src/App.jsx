import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsCoverflow from "./components/SkillsCoverflow";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <SkillsCoverflow />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}