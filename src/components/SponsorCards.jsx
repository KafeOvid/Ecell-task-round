import React from 'react';
import '../styles/SponsorCards.css';

const sponsors = [
  { name: 'Sponsor 1', logo: '/assets/sponsor-logos/logo1.png' },
  { name: 'Sponsor 2', logo: '/assets/sponsor-logos/logo2.png' },
  { name: 'Sponsor 3', logo: '/assets/sponsor-logos/logo3.png' },
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
