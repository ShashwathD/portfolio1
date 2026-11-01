import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import EmailModal from "./components/EmailModal";

export default function App() {
  // Scroll-reveal animation for elements with the .reveal class.
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <EmailModal />
    </>
  );
}
