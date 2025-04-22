import React from 'react';
import HomeSlider from '../components/HomeSlider';
import HealthAssistant from '../components/HealthAssistant';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HomeSlider />
      <HealthAssistant />
    </div>
  );
};

export default Home;