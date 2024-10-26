import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Ecell Logo" className="logo" />
        <button className="toggle-button" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li>
          <Link to="#data">Data</Link>
        </li>
        <li>
          <Link to="#sponsors">Sponsors</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
      <button className="join-button">JOIN NOW</button>
    </nav>
  );
};

export default Navbar;
