import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Technology } from './pages/Technology';
import { Impact } from './pages/Impact';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { AnimatedRoute } from './components/AnimatedRoute';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 text-white">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
          <Route path="/technology" element={<AnimatedRoute><Technology /></AnimatedRoute>} />
          <Route path="/impact" element={<AnimatedRoute><Impact /></AnimatedRoute>} />
          <Route path="/team" element={<AnimatedRoute><Team /></AnimatedRoute>} />
          <Route path="/contact" element={<AnimatedRoute><Contact /></AnimatedRoute>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;