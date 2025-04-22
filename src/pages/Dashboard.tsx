import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Brain, ArrowRight } from 'lucide-react';

interface CategoryCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  image: string;
}

const categories: CategoryCard[] = [
  {
    title: 'Physical Wellness',
    description: 'Discover personalized yoga routines and diet plans tailored to your needs',
    icon: <Dumbbell className="w-8 h-8" />,
    link: '/physical-wellness',
    image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Mental Wellness',
    description: 'Access our AI-powered mental health assistant and guided meditation sessions',
    icon: <Brain className="w-8 h-8" />,
    link: '/mental-wellness',
    image: 'https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-gray-400 mb-8">Continue your wellness journey</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60" />
              </div>

              <div className="relative p-8 h-[400px] flex flex-col justify-end">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal-500 rounded-lg text-white">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center text-teal-400 group-hover:text-teal-300 transition-colors">
                  <span className="font-medium">Explore</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Continue Where You Left Off</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Morning Yoga Routine</h3>
              <p className="text-gray-400">Continue your 30-minute beginner session</p>
              <div className="mt-4 bg-gray-700 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">75% completed</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Meditation Session</h3>
              <p className="text-gray-400">Resume your mindfulness practice</p>
              <div className="mt-4 bg-gray-700 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full w-1/2"></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">50% completed</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Weekly Meal Plan</h3>
              <p className="text-gray-400">Check your personalized diet recommendations</p>
              <div className="mt-4 bg-gray-700 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full w-1/4"></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">25% completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;