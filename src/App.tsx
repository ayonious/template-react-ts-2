import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HatsPage from './pages/Hats';
import AboutPage from './pages/About';
import HomePage from './pages/Homepage';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/hats" element={<HatsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
