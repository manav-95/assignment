import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Header/Navbar';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import './App.css'
import Footer from './components/Footer/Footer';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='mb-16'>
        <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUsPage" element={<ContactUsPage />} />

        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
