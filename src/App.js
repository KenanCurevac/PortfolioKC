import { useEffect, useRef } from "react";
import AboutMe from "./components/sections/AboutMe";
import Career from "./components/sections/Career";
import Contact from "./components/Contact";
import Education from "./components/sections/Education";
import Hero from "./components/Hero";
import Projects from "./components/sections/Projects";
import AOS from "aos";
import "./i18n";

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const careerRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Hero
        scrollToSection={scrollToSection}
        aboutSection={aboutRef}
        educationSection={educationRef}
        careerSection={careerRef}
        projectsSection={projectsRef}
        contactSection={contactRef}
      />
      <AboutMe ref={aboutRef} />
      <Education ref={educationRef} />
      <Career ref={careerRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
