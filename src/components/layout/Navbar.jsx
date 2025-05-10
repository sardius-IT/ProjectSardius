import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/erasebg-transformed .png'; // Make sure the path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-16" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Who we are</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/sectors">What we think</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 font-medium flex flex-col">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>Who we are</Link>
          <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link to="/sectors" onClick={closeMenu}>What we think</Link>
          <Link to="/careers" onClick={closeMenu}>Careers</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
