import React from 'react';
import '../styles/SponsorCards.css';

// Make sure the logo paths are correct based on your project structure
const sponsors = [
  { name: 'Sponsor 1', logo: '../assets/l1.jpg' }, // Adjusted paths
  { name: 'Sponsor 2', logo: '../assets/l2.png' },
  { name: 'Sponsor 3', logo: '../assets/l3.png' },
];

const SponsorCards = () => (
  <section className="sponsor-cards">
    <h2>Our Sponsors</h2>
    <div className="card-container">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="card">
          <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
          <p>{sponsor.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SponsorCards;
