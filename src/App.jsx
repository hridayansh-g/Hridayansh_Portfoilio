// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import DockNav from "./components/DockNav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

const SECTION_IDS = ["home", "about", "tech", "projects", "education", "contact"];

export default function App() {
  const [active, setActive] = useState("home");
  const sectionRefs = useRef({}); // <-- simple JS object, no type

  // ---------- scroll spy (centre of screen kis section me hai) ----------
  useEffect(() => {
    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = SECTION_IDS[0];

      SECTION_IDS.forEach((id) => {
        const el = sectionRefs.current[id];
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (mid >= top && mid < top + height) {
          current = id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // ---------- dock click -> exact section ----------
  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* global soft blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-blue-300/40 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
      </div>

      {/* NO space-y yaha, har section apni full screen lega */}
      <main className="relative mx-auto max-w-6xl px-4 pb-32">
        {/* HERO: h-screen, centre aligned */}
        <section
          id="home"
          ref={(el) => (sectionRefs.current.home = el)}
          className="min-h-screen flex items-center"
        >
          <Hero />
        </section>

        {/* ABOUT: mobile pe top se, bade screens pe centre */}
        <section
          id="about"
          ref={(el) => (sectionRefs.current.about = el)}
          className="min-h-screen flex items-start pt-16 md:pt-0 md:items-center"
        >
          <div className="w-full rounded-3xl bg-white/80 px-4 md:px-10 py-10 md:py-14 shadow-card">
            <About />
          </div>
        </section>

        {/* TECH */}
        <section
          id="tech"
          ref={(el) => (sectionRefs.current.tech = el)}
          className="min-h-screen flex items-start pt-16 md:pt-0 md:items-center"
        >
          <div className="w-full">
            <Tech />
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={(el) => (sectionRefs.current.projects = el)}
          className="min-h-screen flex items-start pt-16 md:pt-0 md:items-center"
        >
          <div className="w-full">
            <Projects />
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          ref={(el) => (sectionRefs.current.education = el)}
          className="min-h-screen flex items-start pt-16 md:pt-0 md:items-center"
        >
          <div className="w-full">
            <Education />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={(el) => (sectionRefs.current.contact = el)}
          className="min-h-screen flex items-start pt-16 md:pt-0 md:items-center"
        >
          <div className="w-full">
            <Contact />
          </div>
        </section>
      </main>

      {/* bottom dock – same hi rahega */}
      <DockNav active={active} onNavClick={scrollToSection} />
    </div>
  );
}