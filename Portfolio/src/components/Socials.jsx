import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
const Socials = () => {
  return (
    <div className='text-pink-400 relative z-50 flex gap-5 mt-5 hover:scale-110 transition-all duration-300 '>
      <a 
        href="https://github.com/HarshShukla77" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my GitHub"
        className='hover:scale-150 transition-all duration-300'
      >
        <FaGithub size={30} />
      </a>
      <a 
        href="https://www.linkedin.com/in/harsh-shukla-b87237221/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my linkedin"
          className='hover:scale-150 transition-all duration-300'
      >
        <FaLinkedin size={30} />
      </a>
      <a 
        href="https://www.instagram.com/that_1guy__/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my insta"
          className='hover:scale-150 transition-all duration-300'
      >
        <FaInstagram size={30} />
      </a>
      <a 
        href="https://leetcode.com/u/that_1guy__/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my leetcode"
          className='hover:scale-150 transition-all duration-300'
      >
        <SiLeetcode size={30} />
      </a>
      <a 
        href="https://x.com/Imharshshukla" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my twitter"
          className='hover:scale-150 transition-all duration-300'
      >
        <FaTwitterSquare size={30} />
      </a>

    </div>
  );
}

export default Socials;