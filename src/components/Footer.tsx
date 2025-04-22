import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
                Pure Well Being
              </span>
            </Link>
            <p className="mt-4 text-gray-600">
              Guiding you on your journey to mental wellness and inner peace.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-gray-900 mb-4">Journey</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/start-journey" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Start Your Journey
                </Link>
              </li>
              <li>
                <Link to="/continue-journey" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Continue Your Journey
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Health Assistant
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Meditation Guides
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Wellness Articles
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Community Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-medium text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Pure Well Being. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-400" /> for your wellbeing
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;