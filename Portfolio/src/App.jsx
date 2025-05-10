import { useRef } from 'react';
import Navbar from './components/Navbar';
import { motion, scale,useScroll } from "motion/react"
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() { 
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref)=>{
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="bg-[#0d1224] min-h-screen">
      <div className="  max-w-[1400px] mx-auto flex flex-col overflow-hidden'   px-4">
        <Hero  scrollToSection={scrollToSection}
          refs={{ aboutRef, experienceRef, skillsRef, projectsRef, educationRef, contactRef }} />
        <div ref={aboutRef}><About /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={contactRef}><Contact /></div>
        <Footer/>
    
      </div>
    </div>
  );
}
export default App; 