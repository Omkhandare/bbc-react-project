import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Products from "./components/Products";
import Team from "./components/Team";
import Careers from "./components/Careers";
import Contact from "./components/Contact"; // ✅ ADD THIS
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Achievements />
              <Products />
              <Team />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ ADD THIS */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
