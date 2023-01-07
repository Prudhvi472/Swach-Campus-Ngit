import {React} from 'react';
import Navbar from './components/Navbar';
import Imgs from './components/Imgs';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OldImages from './components/pages/OldImages';
import Aboutus from './components/pages/Aboutus';
import SignUp from './components/pages/SignUp';
import HeroSection from './components/HeroSection';
import axios from 'axios';
import { useEffect } from 'react';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/OldImages' component={OldImages} />
          <Route path='/Aboutus' component={Aboutus} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
