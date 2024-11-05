import React from 'react'

const WhoAreWeHomepage = () => {
  return (
    <div className='containerr'>
    <h2 className=''>Who Are We?</h2>
    <div className='sm:flex gap-[5vw]'>
        
        <div className='sm:w-1/2'>
          <img className='w-full h-full object-cover bg-[#D9D9D9]' src='./images/sample-pic.jpg'  alt="sample-pic"></img>
        </div>
        <div className='sm:w-1/2 flexCol'>
          <p className='pt-[2em] sm:pt-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className='text-white text-[16px]  lg:text-[20px] flex leading-[1em] underline mt-[1em]' href='/'>Read More <div className='flex flex-col justify-center ml-[0.2em]'><svg className="w-[0.6em] h-[0.6em]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.0208 1.68695C14.0208 1.13466 13.5731 0.686949 13.0208 0.686949L4.02082 0.686949C3.46853 0.686949 3.02082 1.13466 3.02082 1.68695C3.02082 2.23923 3.46853 2.68695 4.02082 2.68695H12.0208V10.6869C12.0208 11.2392 12.4685 11.6869 13.0208 11.6869C13.5731 11.6869 14.0208 11.2392 14.0208 10.6869L14.0208 1.68695ZM1.70711 14.4149L13.7279 2.39406L12.3137 0.979842L0.292893 13.0007L1.70711 14.4149Z" fill="white"/></svg></div></a>

        </div>
    </div>
</div>
  )
}

export default WhoAreWeHomepage
