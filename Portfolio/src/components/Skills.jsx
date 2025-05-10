
import React from 'react'
import Marquee from "react-fast-marquee";
import { skillsData } from '../utilis/skillsset';
import { skillsImage } from '../utilis/skill-image';
const Skills = () => {
  return (
    <div  className="relative z-50 border-t  w-full border-[#25213b] overflow-hidden">
        <div className='flex justify-center flex-col items-center ' > 
        <div className='flex items-center my-5 lg:py-8 '>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>

        <div className='w-full  '>
        <Marquee  gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left" >
            {
                <div className='flex pt-7 overflow-visible w-36 min-w-fit py-7  ' >
                    {
                        skillsData.map((skill,id)=>(
                       
                            <div className='ml-[100px] border  flex items-center hover:scale-110  transition-all duration-300  cursor-pointer justify-center border-t-purple-500  border-[#5d4ac9] px-[40px]  p-[30px] rounded-[20px] ' key={id} >
                                <div className='flex justify-center items-center flex-col gap-4 ' >
                                    <img src={skillsImage(skill)}  className='w-[50px] h-8 sm:h-10' alt="" />
                                    <span className='text-white'>{skill}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </Marquee>
        </div>
        </div>
    </div>
  )
}

export default Skills
