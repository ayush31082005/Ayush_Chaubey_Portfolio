import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { getSectionFromLocation, scrollToSection } from "./utils/scrollToSection";

export default function App() {
  useEffect(() => {
    const syncFromLocation = () => {
      const sectionId = getSectionFromLocation();
      scrollToSection(sectionId, { behavior: "auto", replace: true });
    };

    syncFromLocation();
    window.addEventListener("popstate", syncFromLocation);

    return () => window.removeEventListener("popstate", syncFromLocation);
  }, []);

  return (
    <main className="overflow-hidden bg-[#111827]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
