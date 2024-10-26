import React, { useEffect, useState } from 'react';
import '../styles/RollingData.css';

const RollingData = () => {
  // Initial target values for data (you can adjust these as per requirements)
  const targetData = {
    people: 5000,
    cities: 120,
    participants: 300
  };

  // States for the rolling values
  const [data, setData] = useState({ people: 0, cities: 0, participants: 0 });

  useEffect(() => {
    // Function to increment each value gradually
    const incrementData = (key, target) => {
      const incrementValue = Math.ceil(target / 100); // Customize increment speed

      // Create a timer to increment values
      const timer = setInterval(() => {
        setData((prevData) => {
          if (prevData[key] >= target) {
            clearInterval(timer); // Stop increment when target is reached
            return { ...prevData, [key]: target };
          }
          return { ...prevData, [key]: prevData[key] + incrementValue };
        });
      }, 30); // Interval speed in ms
    };

    // Start animation for each key
    incrementData('people', targetData.people);
    incrementData('cities', targetData.cities);
    incrementData('participants', targetData.participants);
  }, []);

  return (
    <div className="rolling-data-container">
      <div className="data-item">
        <h2 className="data-value">{data.people.toLocaleString()}</h2>
        <p className="data-label">People</p>
      </div>
      <div className="data-item">
        <h2 className="data-value">{data.cities.toLocaleString()}</h2>
        <p className="data-label">Cities</p>
      </div>
      <div className="data-item">
        <h2 className="data-value">{data.participants.toLocaleString()}</h2>
        <p className="data-label">Participants</p>
      </div>
    </div>
  );
};

export default RollingData;
