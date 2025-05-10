import React from 'react'
import { TbMessage2Share } from "react-icons/tb";
import { HiAtSymbol } from 'react-icons/hi';
import { MdAddIcCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import ContactSocials from './ContactSocials';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';


const Contact = () => {
  const [formData,setFormData] = useState({
    fullName:"",
    email:"",
    message:""
  })
  const handleOnChange =(e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = async(e)=>{
         e.preventDefault();
         console.log(formData);
         try{
          const res = await axios.post("http://localhost:400/api/user/",formData);
          if(res.status === 200){
              toast.success("Message sent Successfully");
        setFormData({
        fullName: "",
        email: "",
        message: ""
      });

          }
         }catch(Err){
          toast.error("Error sending message ")
         }
  }
  return (
    <div >
      <div className='flex  lg:flex-row flex-col md:flex-col gap-[60px]  overflow-hidden py-7 '>
        {/* left side */}
        <div className='flex flex-col gap-7 w-full '  >
          <h1 className='text-emerald-500 font-medium text-[1.2rem]' >CONTACT WITH ME</h1>
          <form onSubmit={handleSubmit} className=' border-1 border-[#3d1b45]  p-4 px-4  w-full flex flex-col gap-7   rounded-[10px] '>
            <span className='text-gray-300 font-medium text-[0.9rem]   '>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</span>
            {/* info */}
            <div className=' text-white flex flex-col gap-2  '>
              <label className='font-medium' htmlFor="name">Your Name:</label>
              <input value={formData.fullName} onChange={handleOnChange} required name='fullName' className='border-1 border-[#3d1b45] rounded-[7px]  p-2   focus:border-emerald-500 outline-none transform transition-all duration-200' type="text" id='name' />

              <label className='font-medium' htmlFor='email'>Your Email:</label>
              <input value={formData.email}  onChange={handleOnChange} required name='email'  className='border-[0.5px]   p-2  border-[#3d1b45] rounded-[7px]   focus:border-emerald-500 outline-none transform transition-all duration-200 ' type="email" id='email' />

              <label className='font-medium' htmlFor="message">Your Message: </label>
              <textarea value={formData.message}  onChange={handleOnChange} name="message"  className='border-2 border-[#3d1b45] rounded-[7px] focus:border-emerald-500 outline-none transform transition-all duration-200  min-h-[100px] ' id="message"></textarea>
            </div>

            <button type='submit' className=" sm:mt-3 group relative w-full lg:w-[200px] rounded-full mx-auto p-[2px] bg-gradient-to-r from-[#511E57] to-[#FF5733] hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className=" w-full h-full rounded-full flex items-center justify-center px-4 py-2">
                <span className="text-white font-bold  text-sm sm:text-base lg:text-[1.1rem]  flex items-center gap-2 group-hover:gap-6 transition-all duration-300">
                  Send Message <TbMessage2Share />
                </span>
              </div> 
            </button>
          </form>
        </div>
        {/* right side  */}
        <div className='flex   lg:justify-center     lg:items-center '>
          {/* socials */}
          <div className='flex flex-col lg:gap-[40px]      ' >
            <div >
              <span className='flex gap-1.5     ' >

                <div className='bg-gray-300 cursor-pointer hover:bg-emerald-500 rounded-[100px]  flex items-center justify-center   w-[35px] h-[35px] ' >
                  <HiAtSymbol size={20}   ></HiAtSymbol>
                </div>
                <span className='text-white font-semibold text-[1.2rem] ' >harshshukla844277@gmail.com</span></span>
            </div>
            <div>
              <span className='flex  gap-1.5   ' >
                <div className='bg-gray-300 cursor-pointer   hover:bg-emerald-500 rounded-[100px]  flex items-center justify-center   w-[35px] h-[35px] ' >
                  <MdAddIcCall size={20} />
                </div>
                <span className='text-white font-semibold text-[1.2rem] ' >+91 6377909689</span></span>
            </div>
            <div>
              <span className='flex  gap-1.5' >
                <div className='bg-gray-300 cursor-pointer hover:bg-emerald-500 rounded-[100px]  flex items-center justify-center  w-[35px] h-[35px] ' >
                  <CiLocationOn size={20} />
                </div>
                <span className='text-white font-semibold text-[1.2rem]' >India</span></span>
            </div>
            <div  ><ContactSocials /></div>
          </div>
          {/* abolsurte */}
          <div>
            
          </div>
        </div>
        
        <div className=' items-center flex-col lg:mt-10 hidden lg:flex sm:hidden ' >
              <div className='flex  items-center rotate-90  py-[10px]  bg-[#1a1443] justify-center  w-[100px]  rounded-[5px] px-[70px]'>
                <span className='text-white font-normal  text-[1.3rem]   ' >CONTACT</span>
              </div>
              <div className='bg-[#1a1443]  h-[200px]  w-[2px] '>
              </div>
            </div>  
      </div>
    </div>
  )
}

export default Contact
