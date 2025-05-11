import React from 'react'
import { projectsData } from '../utilis/projects-data'
import ProjectCard from './ProjectCard'
import{ useState,useEffect } from 'react';
const Projects = () => {
  const [topy,setTopy]= useState(14);

  return (
    <div className='mt-[100px]  '>
       <div className='flex items-center  overflow-hidden   ' >
          <div className='flex   items-center  py-[10px]   bg-[#1a1443] justify-center  w-[100px]    rounded-[5px] px-[70px]        '>
             <span className='text-white font-normal  text-[1.3rem]   ' >PROJECTS</span>
          </div>
          <div className='bg-[#1a1443] w-full   h-[2px] '>
          </div>
       </div>


     <div>
         <div className='flex flex-col gap-6 relative  '>
          {
            projectsData.map((project,index)=>(
              <div  id={`sticky-card-${index + 1}`}   className="sticky-card w-full mx-auto max-w-2xl sticky"
              style={{ top: `${topy*index*4}px` }} key={project.id}>
                <ProjectCard project={project} ></ProjectCard>
              </div>
            ))
          }
         </div>
     </div>

    </div>
  )
}

export default Projects
