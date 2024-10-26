import React from 'react';
import '../styles/Intro.css';
import logo from '../assets/logo.png'; // Adjust the path as needed

const Intro = () => (
  <section className="intro">
    <div className="intro-content">
      <div className="intro-text">
        <h1>Welcome to the E-Cell Club!</h1>
        <p>
          Join us in nurturing innovation and entrepreneurship! At the E-Cell, our mission is to cultivate an entrepreneurial mindset and empower individuals to transform ideas into impactful ventures.
        </p>
        <p>
          We provide a vibrant community for aspiring entrepreneurs, offering resources like workshops, mentorship, networking events, and guest lectures from industry experts. Whether you're exploring entrepreneurship or looking to grow your startup, our initiatives support every step of the journey.
        </p>
        <button className="get-started-button">Get Started</button>
      </div>
      <img src={logo} alt="E-Cell Logo" className="intro-logo" />
    </div>
  </section>
);

export default Intro;
