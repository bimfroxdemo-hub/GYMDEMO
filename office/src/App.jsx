import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Programs from "./Programs/Programs";
import Trainer from "./Trainer/Trainer";
import Pricing from "./Price/Pricing";
import Contect from "./Contect/Contect";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content (add padding-top to avoid navbar overlap) */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contect" element={<Contect />} />
        </Routes>
      </main>

      {/* Footer at Bottom */}
      <Footer />
    </div>
  );
};

export default App;
