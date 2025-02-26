import { useRef } from "react";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const careerRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToSection(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Hero
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        educationRef={educationRef}
        careerRef={careerRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={careerRef}>
        <Career />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
