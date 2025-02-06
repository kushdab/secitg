import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>Sec IT Global</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <footer>
          <p>&copy; 2025 Sec IT Global. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
