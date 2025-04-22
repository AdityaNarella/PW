import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const StartJourney: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <div 
                className="h-48 md:h-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
                }}
              >
                <div className="absolute inset-0 bg-teal-500 mix-blend-multiply"></div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 md:w-1/2">
              <div className="text-center md:text-left mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Start Your Journey</h1>
                <p className="text-gray-600">
                  Create an account to begin your path toward mental wellness and inner peace.
                </p>
              </div>
              
              <RegisterForm />
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/continue-journey" className="text-teal-600 hover:text-teal-800 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;