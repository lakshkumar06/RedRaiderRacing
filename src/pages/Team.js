import React from 'react'
import HeroTeam from '../components/HeroTeam'
import WhatWeDoTeam from '../components/WhatWeDoTeam';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMembers from '../components/TeamMembers';

const Team = () => {
  return (
    <div>               
      <Header />
      <HeroTeam/>
      <WhatWeDoTeam/>
      <TeamMembers/>
      <Footer/>
    </div>
  )
}

export default Team
