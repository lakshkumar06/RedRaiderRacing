import React from 'react'

const WhatWeDoTeam = () => {
  return (
<div className='containerr'>
    <h2 className='text-center'>Who Are We?</h2>
    <div className='sm:flex gap-[5vw]'>
            <div className='sm:w-1/2 flexCol'>
              <p className='pb-[2em] sm:pb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='sm:w-1/2'>
              <img className='w-full h-full object-cover bg-[#D9D9D9]' src='./images/sample-pic.jpg'></img>
            </div>
        </div>
</div>
  )
}

export default WhatWeDoTeam
