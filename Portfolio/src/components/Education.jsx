import React, { useEffect } from 'react';
import experience from '../../public/lottie/study.json';
import Lottie from 'lottie-react';
import { data } from '../utilis/education';
import { BsPersonWorkspace } from 'react-icons/bs';

const Education = () => {
  useEffect(() => {
    const wrapper = document.querySelector('.education-wrapper');
    if (!wrapper) return;

    const cards = wrapper.querySelectorAll('.education-card');

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
      className="mt-[100px] flex justify-center bg-cover bg-center  "
      style={{ backgroundImage: "url('/hero.svg')" }}
    >
      <div className="w-full flex flex-col items-center overflow-hidden">
        {/* Section Title */}
        <div className="flex items-center my-5 lg:py-8">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>

        {/* Content */}
        <div className="py-8 h-full grid grid-cols-1  lg:grid-cols-2 lg:gap-[150px] justify-between">
          {/* Left: Lottie */}
          <div>
            <Lottie animationData={experience}     className="w-full max-w-[700px] h-auto sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]" loop={true} />
          </div>

          {/* Right: Education Cards */}
          <div className="education-wrapper text-white flex flex-col md:flex-row lg:flex-col   gap-5 overflow-hidden">
  {data.length > 0 &&
    data.map((item, index) => (
      <div
        className="education-card flex flex-col bg-gradient-to-r from-[#120e38] to-[#3d1b45] justify-center p-4 px-4 lg:w-[650px] w-full max-w-full rounded-[10px] cursor-pointer"
        key={index}
      >
        <h3 className="text-center text-emerald-400 font-semibold">({item.duration})</h3>
        <div className="flex m-4 gap-5 items-center">
          <BsPersonWorkspace size={40} color="blue" />
          <div className="flex flex-col">
            <span className="font-medium text-[1.3rem]">{item.title}</span>
            <span>{item.institution}</span>
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

export default Education;
