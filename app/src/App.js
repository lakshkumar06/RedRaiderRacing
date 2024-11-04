import './App.css';
import Header from './components/Header';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import History from './pages/History';

import { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroHomepage from './components/HeroHomepage';
function App() {
  return (
    <div className="App">
      <h1 className=''>Hello</h1>
      <Header />
      <HeroHomepage/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
     


    
          </>
        } />
        <Route path="/Team" element={<Team />} /> 
        <Route path="/Events" element={<Events />} /> 
        <Route path="/History" element={<History />} /> 
        <Route path="/Sponsors" element={<Sponsors />} /> 
        <Route path="/Contact" element={<Contact />} /> 


      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
