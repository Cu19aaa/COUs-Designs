import React from 'react';
import { CiPaperplane } from 'react-icons/ci';

const Footer = () => {
  return (
    <div className='w-full h-screen bg-black flex flex-col justify-center items-center pl-4 pt-24'>
      <div className='w-full bg-lime-300 rounded-2xl mx-2 p-4'>
        <div className='flex items-center flex-col gap-2 pt-10'>
          <p className='text-sm'>LETS WORK TOGETHER</p>
          <p className='text-xl sm:2xl'>chioma.ugwu@rocketmail.com </p>
        </div>

        <div className='flex items-center flex-col pt-10'>
          <button className='text-white group px-6 py-3 my-2 flex items-center rounded-2xl bg-black hover:bg-gray-700'>
            <span className='group-hover:scale-125 duration-300 rot'>
              <CiPaperplane className='mr-2 size-5' />
            </span>
            Lets Connect
          </button>
        </div>

        <div className='flex items-center justify-center'>

          <div className='flex items-center flex-col gap-2 pt-10'>
            <div>
              <p>VERSION</p>
              <p>2024@Edition</p>
            </div>
            <div>
              <p>BASED IN Nigeria</p>
              <p>Open To Relocation</p>
            </div>
          </div>

          <div className='flex items-center justify-center flex-col gap-2 pt-10'>
            <h1>socials</h1>
            <ul>
              <a href=""><li>DRIBBLE</li></a>
              <a href="https://www.behance.net/chiomaugwu"><li>BEHANCE</li></a>
              <a href="https://www.linkedin.com/in/chioma-ugwu-962354113?trk=contact-info"><li>LINKEDIN</li></a>
              <a href="http://chioma-ugwu.medium.com/"><li>MEDIUM</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
