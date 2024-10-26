import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Adjust the path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Ecell Logo" className="logo" /> {/* Logo Image */}
        <ul className="nav-menu">
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
      </div>
    </nav>
  );
};

export default Navbar;
