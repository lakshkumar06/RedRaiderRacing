import React from 'react';

const HeroHomepage = () => {
  return (
    <div>
      <div className='relative'>
        <div className='picture-overlay w-full absolute h-full inset-0'>
        <img className='absolute object-cover w-full h-full' src='./images/bg.jpeg' alt='Background'></img>
          <div className='gradient-overlay absolute inset-0' ></div>
        </div>
        <div className='relative w-screen overflow-x-hidden px-[5vw] md:px-[10vw] py-[35vh] sm:py-[30vh]'>
          <div className='HeroText text-left w-full'>
            <h1 className='text-[white]  pb-[0.2em] '>Some Cool <br></br> Text Here</h1>
            <a className='btn-solid' href='/'>Join</a>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default HeroHomepage;