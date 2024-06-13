// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled!== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleMouseLeave);
    };
  }, [scrolled]);

  const handleMouseEnter = (navItem) => {
    setHovered(navItem);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <Router>
      <nav className={`${scrolled? "nav-scrolled" : ""} ${hovered? `nav-${hovered}` : ""}`}>
        <ul>
          <li onMouseEnter={() => handleMouseEnter("home")} onMouseLeave={handleMouseLeave}>
            <Link to="/">Home</Link>
          </li>
          <li onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
            <Link to="/about">About</Link>
          </li>
          <li onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
            <Link to="/services">Services</Link>
          </li>
          <li onMouseEnter={() => handleMouseEnter("contact")} onMouseLeave={handleMouseLeave}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;