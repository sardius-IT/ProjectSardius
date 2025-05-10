import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaDiscord,
  FaRedditAlien,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Sardius Services */}
        <div>
          <h3 className="font-semibold mb-4">Sardius IT Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/careers">Career Guidance</Link></li>
            <li><Link to="/developer">Developer</Link></li>
            <li><Link to="/DigitalMarketing">DigitalMarketing </Link></li>
            <li><Link to="/Staffing">Staffing</Link></li>
            <li><Link to="/sectors">Tech Skill </Link></li>
            <li><Link to="/careers">Resume & Job Support</Link></li>
            <li><Link to="/portfolio">IT Consulting</Link></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about">About Sardius</Link></li>
            <li><Link to="/about">Our Vision</Link></li>
            <li><Link to="/TeamMembers">Our team</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/">Partners</Link></li>
            <li>
            <Link to="/admin-login">Admin Login</Link>
          </li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h3 className="font-semibold mb-4">Legal & Help</h3>
          <ul className="space-y-2 text-gray-300 text-sm mb-6">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cookies">Cookie Settings</Link></li>
          </ul>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Connect with Us</h3>
          <div className="grid grid-cols-4 gap-3 mb-6">
            <a href="https://facebook.com/sardiustech" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="bg-blue-600 text-white p-2 rounded w-10 h-10" />
            </a>
            <a href="https://instagram.com/sardiustech" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white p-2 rounded w-10 h-10" />
            </a>
          
            <a href="https://linkedin.com/company/sardiustech" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="bg-blue-700 text-white p-2 rounded w-10 h-10" />
            </a>
            
          
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to get career tips and international opportunities from Sardius
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
