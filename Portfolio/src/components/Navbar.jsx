const Navbar = ({ scrollToSection, refs }) => {
  return (
    <div className="inset-x-0 z-20 backdrop-blur-lg bg-primary/40 w-full">
      <div className="flex items-center w-full justify-between">
        <h1 className="text-emerald-300 text-4xl font-bold font-mono m-4.5">
          HARSH SHUKLA
        </h1>
        <div className="hidden gap-7 sm:flex">
          <button onClick={() => scrollToSection(refs.aboutRef)} className="text-white hover:text-emerald-500 cursor-pointer ">ABOUT</button>
          <button onClick={() => scrollToSection(refs.experienceRef)} className="text-white hover:text-emerald-500 cursor-pointer">EXPERIENCE</button>
          <button onClick={() => scrollToSection(refs.skillsRef)} className="text-white hover:text-emerald-500 cursor-pointer">SKILLS</button>
          <button onClick={() => scrollToSection(refs.educationRef)} className="text-white hover:text-emerald-500 cursor-pointer">EDUCATION</button>
          <button onClick={() => scrollToSection(refs.projectsRef)} className="text-white hover:text-emerald-500 cursor-pointer">PROJECTS</button>
          <button onClick={() => scrollToSection(refs.contactRef)} className="text-white hover:text-emerald-500 cursor-pointer">CONTACT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
