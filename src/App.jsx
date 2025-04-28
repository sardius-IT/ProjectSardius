import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Sectors from './pages/Sectors';
import Contact from './pages/Contact';
import Careers from './pages/Careers/Careers';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'; // <-- added this
import ProtectedRoute from './components/ProtectedRoute'; // Make sure the path is correct

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-gray-950 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          
          {/* Protect Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
