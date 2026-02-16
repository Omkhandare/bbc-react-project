import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";   // ✅ ADD

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Services1 from "./components/Pages/Services1";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Products from "./components/Products";
import Team from "./components/Team";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Gallery1 from "./components/Gallery1";
import VideoGallery from "./components/VideoGallery";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* ✅ ADD HERE */}

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

              {/* Hide About Header + Team section inside About on Home */}
              <About showHero={false} showTeam={false} />

              <Achievements />

              {/* Hide Products Header on Home */}
              <Products showHero={false} showFull={false} />

              <Team />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/services" element={<Services1 />} />
        <Route path="/services1" element={<Services1 />} />

        {/* About page */}
        <Route path="/about" element={<About showHero={true} showTeam={true} />} />

        {/* Products page */}
        <Route path="/products" element={<Products showHero={true} />} />

        <Route path="/team" element={<Team />} />

        {/* GALLERY PAGES */}
        <Route path="/gallery" element={<Gallery1 />} />
        <Route path="/video-gallery" element={<VideoGallery />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* OPTIONAL SAFETY ROUTE */}
        <Route path="/Gallery" element={<Gallery1 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
