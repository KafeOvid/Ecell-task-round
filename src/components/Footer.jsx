import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h3>About Us</h3>
        <p>
          We are a club dedicated to fostering innovation and community. Join us
          for events, discussions, and more!
        </p>
      </div>
      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#data">Data</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-section social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Ecell. All rights reserved.
    </div>
  </footer>
);

export default Footer;
