import React from 'react';
import { Brain } from 'lucide-react';

const MentalWellness: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="bg-teal-500 p-3 rounded-lg mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Mental Wellness</h1>
              <p className="text-gray-400">Your safe space for emotional support and guidance</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon: Mithra AI Assistant</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're working on integrating Mithra, your personal AI wellness companion. 
              Mithra will provide personalized mental health support, guided meditation sessions, 
              and emotional well-being resources.
            </p>
            <div className="animate-pulse flex justify-center">
              <div className="bg-teal-500/20 text-teal-400 px-6 py-3 rounded-lg inline-flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                <span>Mithra is on the way</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Guided Meditation</h3>
              <p className="text-gray-400 text-sm">
                Access a library of calming meditation sessions designed to reduce stress and anxiety.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Mood Tracking</h3>
              <p className="text-gray-400 text-sm">
                Monitor your emotional well-being and identify patterns in your mental health journey.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Emergency Support</h3>
              <p className="text-gray-400 text-sm mb-4">
                If you're experiencing a mental health emergency, please reach out:
              </p>
              <a
                href="tel:988"
                className="block w-full bg-red-500/20 text-red-400 p-3 rounded-lg text-center hover:bg-red-500/30 transition-colors"
              >
                988 Lifeline
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalWellness;