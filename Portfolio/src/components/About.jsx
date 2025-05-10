import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <div className='flex  overflow-hidden lg:flex-row gap-[180px] '>
            {/* left */}
            <div className='    w-[700px]' >
                <h1 className='text-emerald-600 text-[2rem] font-semibold font-mono ' >WHO I AM ?</h1>
                <div className='text-white mt-4 font-sans text-[0.5rem] ' >
                    <TypeAnimation
                        sequence={[
                            ` My name is Harsh Shukla. I'm a passionate and enthusiastic programmer who genuinely enjoys building software. I’m a quick learner with a strong self-learning mindset, always curious about new technologies and how they can be applied to solve real-world problems. While my main focus is on web development, I also enjoy exploring broader areas of software engineering and have a growing interest in DevOps. I have a strong interest in data structures and algorithms, and I regularly work on improving my problem-solving skills. I'm always excited to take on meaningful projects and open to opportunities that align with my skills and help me grow`,
                            10000, ""
                        ]}
                        speed={30}
                        cursor={true}
                        style={
                            {
                                fontSize: '2em',
                                whiteSpace: 'pre-line',
                                display: "block"
                            }
                        }
                        repeat={Infinity}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>

            {/* right */}
            <div className=' relative' >
                <img src="/Profile.jpg"   className='w-[200px] h-[316px]  rounded-[10px] ml-[75px] hidden lg:flex  ' alt="harsh shukla" />
                <div className='text-white bg-gradient-to-r from-[#1d111f] to-[#652bb1] rounded-[5px]
                   absolute -right-66 top-25 items-center justify-center rotate-90 w-[150px] h-[40px] font-medium text-[1.2rem] hidden lg:flex ' >ABOUT ME </div>
                   <div className='bg-[#360464] h-[100px] w-[1px] absolute left-115  top-49 hidden lg:flex '  ></div>
                
            </div>
        </div>
    )
}

export default About
