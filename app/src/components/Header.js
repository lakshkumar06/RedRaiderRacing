import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const burgerMenuRef = useRef(null);
  const overlayRef = useRef(null);

  const handleBurgerMenuClick = () => {
    burgerMenuRef.current.classList.toggle("close");
    overlayRef.current.classList.toggle("overlay");
  };

  return (
    <div>
      <div className="header py-[0.5em] bg-[#FFFFFF] text-black relative text-[20px]">

        <div className="icons pl-[5vw]">
          <Link to='/'><img src='./images/logo.png' className='h-[3em] aspect-asquare' alt="Logo" /></Link>
        </div>

        <div id="burger-menu" ref={burgerMenuRef} className="md:hidden" onClick={handleBurgerMenuClick}>
          <span className="light-span"></span>
        </div>

        <div id="menu" ref={overlayRef}>
          <ul className="text-[white] px-[10vw] pt-[18vh] text-[48px] text-left">
            <li><Link to="/Team">Team</Link></li>
            <li><Link to="/Events">Events</Link></li>
            <li><Link to="/History">History</Link></li>
            <li><Link to="/Sponsors">Sponsors</Link></li>
            <li className='text-primary'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <ul className="headerlist hidden md:flex gap-[3vw] pr-[5vw] font-[500] text-[18px] lg:text-[20px]">
          <li className='flexCol underline-animation'><Link to="/Team">Team</Link></li> 
          <li className='flexCol underline-animation'><Link to="/Events">Events</Link></li> 
          <li className='flexCol underline-animation'><Link to="/History">History</Link></li> 
          <li className='flexCol underline-animation'><Link to="/Sponsors">Sponsors</Link></li> 
          <li className=''><Link className='btn py-[0.2em]' to='/Contact'>Connect</Link></li>
        </ul>

      </div>
    </div>
  )
}

export default Header;