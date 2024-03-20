import React from 'react';
import work1 from '../assets/Your Tok HUB.png'

const Work = () => {
  return (
    <div name='work' className='w-full h-full text-white bg-black'>
      <div className='w-full mx-auto p-4'>
        <div className='pb-2 border-b  text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'>
          Selected 
        </div>
        <div className='flex justify-center items-center pt-3 pb-1 border-b text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'>
          Works
        </div>
<div className='pt-14'>
        {/*Container*/}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-20'>

            {/*Grid Item 1*/}
            <div
                style={{backgroundImage: `url(${work1})`}}
                className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto pt-16 content-div'>

                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Website Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
            </div>

            {/*Grid Item 2*/}
            <div
                style={{backgroundImage: `url(${work1})`}}
                className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto pt-16 content-div'>

                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Website Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
            </div>

            {/*Grid Item 3*/}
            <div
                style={{backgroundImage: `url(${work1})`}}
                className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto pt-16 content-div'>

                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Website Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
            </div>

            {/*Grid Item 4*/}
            <div
                style={{backgroundImage: `url(${work1})`}}
                className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto pt-16 content-div'>

                    {/*hover*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-black tracking-wider'>
                            Website Portfolio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
            </div>
</div>

        </div>

      </div>
    </div>
  );
};

export default Work;
