import React from 'react';
import { Routes, Route } from 'react-router-dom';  // ✅ Add this import
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Programs from './Programs/Programs';
import Trainer from './Trainer/Trainer';
import Pricing from './Price/Pricing';
import Contect from './Contect/Contect';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
