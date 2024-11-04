import React from 'react'
import HeroHistory from '../components/HeroHistory'
import AboutHistory from '../components/AboutHistory'
import Cars from '../components/Cars'
import Header from '../components/Header';
import Footer from '../components/Footer';
const History = () => {
  return (
    <div>
      <Header/>
      <HeroHistory/>
      <AboutHistory/>
      <Cars/>
      <Footer/>
    </div>
  )
}

export default History
