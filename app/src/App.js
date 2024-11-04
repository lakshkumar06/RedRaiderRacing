import './App.css';
import Header from './components/Header';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import History from './pages/History';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HeroHomepage from './components/HeroHomepage';
import ImageContainerHomepage from './components/ImageContainerHomepage';
import WhoAreWeHomepage from './components/WhoAreWeHomepage';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <Router>
 

      <Routes>
      <Route path="/" element={
          <>
               <Header />
      <HeroHomepage/>
      <ImageContainerHomepage/>
      <WhoAreWeHomepage/>
      <Footer/>

          </>
        } />
        <Route path="/Team" element={<Team />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/History" element={<History />} />
        <Route path="/Sponsors" element={<Sponsors />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
