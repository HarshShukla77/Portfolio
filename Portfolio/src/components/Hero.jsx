import React from 'react';
import Navbar from './Navbar';
import Socials from './Socials';
import Buttons from './Buttons';
import Type from './Type';
import ScrollToTop from './ScrollToTop';

const Hero = ({ scrollToSection, refs }) => {
  return (
    <section className="flex flex-col items-center w-full overflow-hidden relative px-4 sm:px-6 lg:px-12">
      {/* Navbar */}
      <Navbar   />
      <ScrollToTop scrollToSection={scrollToSection} refs={refs} />
      {/* Background image */}
      <img
        src="/hero.svg"
        alt="Hero Section"
        className="absolute top-0 left-0 w-full object-cover -z-10"
      />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-20 lg:gap-28 w-full max-w-7xl py-24">
        {/* Left: Text + Socials + Buttons */}
        <div className="flex flex-col items-start text-left text-white mt-16 lg:mt-0">
          <span className="font-bold text-[2.2rem] sm:text-[2.5rem] leading-tight">
            Hello,<br />
            This is <span className="text-pink-500">HARSH SHUKLA</span>, I'm a <br />
            Professional <span className="text-emerald-600">Software</span><br />
            <span className="text-emerald-600">Developer</span>
          </span>

          {/* Socials */}
          <div className="mt-10">
            <Socials />
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Buttons scrollToSection={scrollToSection} refs={refs} />
          </div>
        </div>

        {/* Right: Type box */}
        <div className="w-full max-w-[600px] mt-10 lg:mt-0">
          <Type />
        </div>
      </div>
    </section>
  );
};

export default Hero;
