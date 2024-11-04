import React from 'react'
import HeroEvents from '../components/HeroEvents'
import UpcomingEvents from '../components/UpcomingEvents'
import Header from '../components/Header';
import Footer from '../components/Footer';
const Events = () => {
  return (
    <div>
      <Header/>
      <HeroEvents/>
      <UpcomingEvents/>
      <Footer/>
    </div>
  )
}

export default Events
