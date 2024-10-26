import React from 'react';
import '../styles/SponsorCards.css';
// Importing logos directly for better path handling
import logo1 from '../assets/l1.jpg';
import logo2 from '../assets/l2.png';
import logo3 from '../assets/l3.png';

// Use the imported logos in the sponsors array
const sponsors = [
  { name: 'Startup News', logo: logo1, link: 'https://www.sponsor1.com' }, // Add links
  { name: 'Stock EDGE', logo: logo2, link: 'https://www.sponsor2.com' },
  { name: 'Top One Percent', logo: logo3, link: 'https://www.sponsor3.com' },
];

const SponsorCards = () => (
  <section className="sponsor-cards">
    <h2>Our Sponsors</h2>
    <div className="card-container">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="card">
          <a href={sponsor.link} target="_blank" rel="noopener noreferrer"> {/* Make it clickable */}
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
            <p>{sponsor.name}</p>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default SponsorCards;
