import React from 'react';
import { MdConnectWithoutContact } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

const Buttons = ({scrollToSection, refs}) => {
  return (
    <>
    <button onClick={()=>scrollToSection(refs.contactRef)} className="  group relative w-[200px] rounded-full p-[2px] bg-gradient-to-r from-[#511E57] to-[#FF5733] hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="bg-[#0d1224] w-full h-full rounded-full flex items-center justify-center px-4 py-2">
        <span className="text-white font-bold text-[1.1rem] flex items-center gap-2 group-hover:gap-6 transition-all duration-300">
          Contact Me <MdConnectWithoutContact />
        </span>
      </div>
    </button>


 <a href="/HarshShuklaMCA.pdf" download="HarshShuklaMCA.pdf" target="_blank" rel="noopener noreferrer">
    <button className=" sm:mt-3 group relative w-[200px] rounded-full p-[2px] bg-gradient-to-r from-[#511E57] to-[#FF5733] hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className=" w-full h-full rounded-full flex items-center justify-center px-4 py-2">
        <span className="text-white font-bold text-[1.1rem]  flex items-center gap-2 group-hover:gap-6 transition-all duration-300">
          Get Resume <HiDownload />
        </span>
      </div>
    </button>
    </a>

    </>
  );
};

export default Buttons;
