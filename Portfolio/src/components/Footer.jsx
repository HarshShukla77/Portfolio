import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex flex-col gap-7  overflow-hidden ' >
        <div>
         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        
        <div  className='flex  items-center gap-1 py-5 text-[0.9rem]  text-white' ><FaRegCopyright /> 
         <span>Developer Porfolio by 
             <span  className='text-emerald-400 font-sans font-medium ' > Harsh Shukla</span> </span>
        </div>
    </div>
  )
}

export default Footer
