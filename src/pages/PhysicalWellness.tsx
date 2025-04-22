import React, { useState } from 'react';
import { Play, Clock, Calendar, Dumbbell, Utensils, BookOpen } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  category: 'yoga' | 'diet' | 'meditation';
  duration: string;
  level: string;
  thumbnail: string;
  description: string;
}

const programs: Program[] = [
  // Yoga Programs
  {
    id: '1',
    title: 'Morning Yoga Flow',
    category: 'yoga',
    duration: '30 min',
    level: 'Beginner',
    thumbnail: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Start your day with energizing poses and stretches'
  },
  {
    id: '2',
    title: 'Power Yoga',
    category: 'yoga',
    duration: '45 min',
    level: 'Intermediate',
    thumbnail: 'https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Build strength and flexibility with dynamic flows'
  },
  {
    id: '3',
    title: 'Gentle Evening Flow',
    category: 'yoga',
    duration: '25 min',
    level: 'Beginner',
    thumbnail: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Wind down with calming stretches and poses'
  },
  // Diet Programs
  {
    id: '4',
    title: 'Balanced Nutrition Plan',
    category: 'diet',
    duration: '7 days',
    level: 'All levels',
    thumbnail: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Wholesome meal plans for optimal health'
  },
  {
    id: '5',
    title: 'Plant-Based Essentials',
    category: 'diet',
    duration: '14 days',
    level: 'Beginner',
    thumbnail: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Discover the benefits of plant-based nutrition'
  },
  {
    id: '6',
    title: 'Mindful Eating Guide',
    category: 'diet',
    duration: '10 days',
    level: 'All levels',
    thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Learn to develop a healthy relationship with food'
  }
];

const PhysicalWellness: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'yoga' | 'diet'>('all');

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'yoga':
        return <Dumbbell className="w-5 h-5" />;
      case 'diet':
        return <Utensils className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Physical Wellness Journey</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Embark on a transformative journey to physical well-being through our curated collection of yoga practices and nutrition guidance.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-12 space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-8 py-3 rounded-full transition-colors flex items-center justify-center space-x-2 ${
              activeCategory === 'all' 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>All Programs</span>
          </button>
          <button
            onClick={() => setActiveCategory('yoga')}
            className={`px-8 py-3 rounded-full transition-colors flex items-center justify-center space-x-2 ${
              activeCategory === 'yoga' 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Dumbbell className="w-5 h-5" />
            <span>Yoga Modules</span>
          </button>
          <button
            onClick={() => setActiveCategory('diet')}
            className={`px-8 py-3 rounded-full transition-colors flex items-center justify-center space-x-2 ${
              activeCategory === 'diet' 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <Utensils className="w-5 h-5" />
            <span>Diet Plans</span>
          </button>
        </div>

        {/* Category Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {activeCategory === 'all' ? 'All Programs' : 
             activeCategory === 'yoga' ? 'Yoga Modules' : 'Diet Plans'}
          </h2>
          <p className="text-gray-400">
            {activeCategory === 'all' ? 'Explore our complete collection of wellness programs' :
             activeCategory === 'yoga' ? 'Discover guided yoga sessions for all levels' :
             'Transform your relationship with food through mindful eating'}
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-gray-800 rounded-xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={program.thumbnail} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-teal-500 text-white p-4 rounded-full transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-teal-400">
                    {getCategoryIcon(program.category)}
                    <span className="text-sm">{program.category === 'yoga' ? 'Yoga' : 'Diet Plan'}</span>
                  </div>
                  <span className="text-sm text-gray-400">{program.level}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                
                <div className="flex items-center text-gray-400">
                  {program.category === 'yoga' ? (
                    <Clock className="w-4 h-4 mr-2" />
                  ) : (
                    <Calendar className="w-4 h-4 mr-2" />
                  )}
                  <span className="text-sm">{program.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicalWellness;