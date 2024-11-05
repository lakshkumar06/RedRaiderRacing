import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSponsors from '../components/HeroSponsors';
import ThankYouSponsors from '../components/ThankYouSponsors';
import SponsorsText from '../components/SponsorsText';
const Sponsors = () => {
  return (
    <div>
      <Header/>
      <HeroSponsors/>
      <ThankYouSponsors/>
      <SponsorsText/>
      <Footer/>
    </div>
  )
}

export default Sponsors
