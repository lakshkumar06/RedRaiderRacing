import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroContact from '../components/HeroContact';
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
const Contact = () => {
  return (
    <div>
      <Header/>
      <HeroContact/>
      <Faqs/>
      <ContactForm/>
      <Footer/>
      
    </div>
  )
}

export default Contact
