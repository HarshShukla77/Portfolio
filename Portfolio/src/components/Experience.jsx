import React, { useEffect } from 'react';
import experience from '../../public/lottie/code.json';
import Lottie from 'lottie-react';
import { data } from '../utilis/data';
import { BsPersonWorkspace } from 'react-icons/bs';

const Experience = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.experience-wrapper');
    if (!wrapper) return;

    const cards = wrapper.querySelectorAll('.experience-card');

    const handleMouseMove = (event) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.background = `
          radial-gradient(960px circle at ${x}px ${y}px, rgba(59, 248, 251, 0.2), transparent 15%),
          linear-gradient(to right, #120e38, #3d1b45)
        `;
      });
    };

    wrapper.addEventListener('mousemove', handleMouseMove);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mt-[100px] flex justify-center bg-cover bg-center h-[800px]"
      style={{ backgroundImage: "url('/hero.svg')" }}
    >
      <div className="w-full flex flex-col items-center overflow-hidden">
        {/* Section Title */}
        <div className="flex items-center my-5 lg:py-8">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>

        {/* Content */}
        <div className="py-8 w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-[150px] justify-between">
          {/* Left: Lottie */}
          <div>
            <Lottie animationData={experience} loop={true} />
          </div>

          {/* Right: Experience Cards */}
       <div className="experience-wrapper text-white flex flex-col gap-5 overflow-hidden w-full max-w-[1200px] mx-auto">
  {data.length > 0 &&
    data.map((item, index) => (
      <div
        className="experience-card bg-gradient-to-r from-[#120e38] to-[#3d1b45] flex flex-col justify-center p-4 px-4 w-full lg:w-[650px] max-w-full rounded-[10px] cursor-pointer"
        key={index}
      >
        <h3 className="text-center text-emerald-400 font-semibold">({item.duration})</h3>
        <div className="flex m-4 gap-5 items-center">
          <BsPersonWorkspace size={40} color="blue" />
          <div className="flex flex-col">
            <span className="font-medium text-[1.3rem]">{item.title}</span>
            <span>{item.company}</span>
          </div>
        </div>
      </div>
    ))}
</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
