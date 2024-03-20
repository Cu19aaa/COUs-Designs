import React from 'react';
import { CiPaperplane } from 'react-icons/ci';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaBehanceSquare, FaMedium } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-black pb-20 h-screen flex flex-col justify-center items-center text-center relative'>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              width: Math.floor(Math.random() * 100) + 50,
              height: Math.floor(Math.random() * 100) + 50,
              borderRadius: '50%',
              position: 'absolute',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              zIndex: -1,
            }}
          />
        ))}
      </div>
      <div>
        <h1 className='text-white text-3xl sm:text-7xl pb-2'>Product <span className='text-green-300'>Designer</span> </h1>
        <h1 className='text-white text-3xl sm:text-7xl pt-2'> <span className='text-green-300'>Building</span> Things</h1>
        <p className='text-gray-200 pt-12'>Open for Work</p>

        <div className='flex justify-center pt-4'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-2xl hover:bg-gray-700'>
            <span className='group-hover:scale-125 duration-300 rot'>
              <CiPaperplane className='mr-2 size-5' />
            </span>
            Lets Connect
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <a href="https://www.linkedin.com/in/chioma-ugwu-962354113?trk=contact-info" className="text-white mx-2"><AiOutlineLinkedin size={32} /></a>
          <a href="https://www.behance.net/chiomaugwu" className="text-white mx-2"><FaBehanceSquare size={32} /></a>
          <a  href="http://chioma-ugwu.medium.com/" className="text-white mx-2"><FaMedium size={32} /></a>
        </div>

        {/* Add more content here if needed */}
      </div>
    </div>
  );
};

export default Home;
