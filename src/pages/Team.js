import React from 'react'
import HeroTeam from '../components/HeroTeam'
import WhatWeDoTeam from '../components/WhatWeDoTeam';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Team = () => {
  return (
    <div>               
      <Header />
      <HeroTeam/>
      <WhatWeDoTeam/>
      <Footer/>
    </div>
  )
}

export default Team
