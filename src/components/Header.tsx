import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center group"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
            Pure Well Being
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`text-gray-700 hover:text-teal-500 transition-colors ${
              location.pathname === '/' ? 'text-teal-500 font-medium' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/start-journey" 
            className={`text-gray-700 hover:text-teal-500 transition-colors ${
              location.pathname === '/start-journey' ? 'text-teal-500 font-medium' : ''
            }`}
          >
            Start Journey
          </Link>
          <Link 
            to="/continue-journey" 
            className={`text-gray-700 hover:text-teal-500 transition-colors ${
              location.pathname === '/continue-journey' ? 'text-teal-500 font-medium' : ''
            }`}
          >
            Continue Journey
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500 hover:text-teal-500 transition-colors" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-teal-500 transition-colors py-2 ${
                location.pathname === '/' ? 'text-teal-500 font-medium' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/start-journey" 
              className={`text-gray-700 hover:text-teal-500 transition-colors py-2 ${
                location.pathname === '/start-journey' ? 'text-teal-500 font-medium' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Start Journey
            </Link>
            <Link 
              to="/continue-journey" 
              className={`text-gray-700 hover:text-teal-500 transition-colors py-2 ${
                location.pathname === '/continue-journey' ? 'text-teal-500 font-medium' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Continue Journey
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;