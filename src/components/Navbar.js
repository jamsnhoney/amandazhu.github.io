// Navbar.js

import { useState } from "react";
import "../pwetty/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = ["about", "design", "extrastuff", "fun"];

  return (
    <nav className="navbar">
      {/* Left side - Logo */}
      <div className="navbar-logo">
        <img
          src="/logo.png" // your logo here
          alt="Logo"
        />
      </div>

      {/* Center - Navigation Links */}
      <div className={`navbar-links ${open ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
        <button className="contact-button">contact me</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="navbar-toggle" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
        <div className={`bar ${open ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}
