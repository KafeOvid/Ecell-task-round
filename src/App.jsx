import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import Intro from './components/Intro'; // Use the Intro component
import RollingData from './components/RollingData'; // Import the RollingData component
import SponsorCards from './components/SponsorCards'; // Import the SponsorCards component
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // General styles for the app

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Intro /> {/* Render the Intro component */}
        <RollingData /> {/* Render the RollingData component */}
        <SponsorCards /> {/* Render the SponsorCards component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
