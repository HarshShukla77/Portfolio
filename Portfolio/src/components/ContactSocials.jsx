import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaTwitterSquare } from "react-icons/fa";
const ContactSocials = () => {
  return (
     
    <div className=' relative z-50 flex gap-2 lg:gap-[60px] mt-5 hover:scale-110 transition-all duration-300 '>
        <div className='bg-gray-300 cursor-pointer w-[50px] h-[50px] flex   justify-center items-center  hover:bg-emerald-500 rounded-[100px]'  >
      <a 
        href="https://github.com/HarshShukla77" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my GitHub"
       
      >
        <FaGithub size={30} />
      </a>
 
      </div>
      <div className='bg-gray-300 cursor-pointer w-[50px] h-[50px] flex   justify-center items-center  hover:bg-emerald-500 rounded-[100px]'  >
      <a 
        href="https://www.linkedin.com/in/harsh-shukla-b87237221/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my linkedin"
        
      >
        <FaLinkedin size={30} />
      </a>
      </div>
      <div className='bg-gray-300 cursor-pointer w-[50px] h-[50px] flex   justify-center items-center  hover:bg-emerald-500 rounded-[100px]'  >
      <a 
        href="https://www.instagram.com/that_1guy__/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my insta"
          
      >
        <FaInstagram size={30} />
      </a>
      </div> <div className='bg-gray-300 cursor-pointer w-[50px] h-[50px] flex   justify-center items-center  hover:bg-emerald-500 rounded-[100px]'  >
      <a 
        href="https://leetcode.com/u/that_1guy__/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my leetcode"
          
      >
        <SiLeetcode size={30} />
      </a>
      </div>
      <div className='bg-gray-300 cursor-pointer w-[50px] h-[50px] flex   justify-center items-center  hover:bg-emerald-500 rounded-[100px]'  >
      <a 
        href="https://x.com/Imharshshukla" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Visit my twitter"
       
      >
        <FaTwitterSquare size={30} />
      </a>
      </div>

    </div>
  );
}

export default ContactSocials;