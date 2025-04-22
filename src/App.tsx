import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StartJourney from './pages/StartJourney';
import ContinueJourney from './pages/ContinueJourney';
import Dashboard from './pages/Dashboard';
import PhysicalWellness from './pages/PhysicalWellness';
import MentalWellness from './pages/MentalWellness';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start-journey" element={<StartJourney />} />
            <Route path="/continue-journey" element={<ContinueJourney />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/physical-wellness" element={<PhysicalWellness />} />
            <Route path="/mental-wellness" element={<MentalWellness />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;