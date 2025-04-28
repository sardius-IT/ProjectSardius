// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';
import Careers from './pages/Careers/Careers';
import Developer from "./pages/Cards/Developer"; 
import Cloud from "./pages/Cards/Cloud"; 
import ScrollToTopButton from './pages/Toparrow';
import ConnectPage from './pages/Cards/ConnectPage';

function App() {
  return (
    <>
      {/* Navbar sits on top */}
      <Navbar />

      {/* Main content starts below navbar */}
      <main className="pt-24  bg-gray-950 text-white flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/Cloud" element={<Cloud />} />
          <Route path="/ScrollToTopButton" element={<ScrollToTopButton />} />
          <Route path="/ConnectPage" element={<ConnectPage />} />


        </Routes>
      </main>
    </>
  );
}

export default App;
