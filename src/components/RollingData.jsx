import React, { useEffect, useState } from 'react';
import '../styles/RollingData.css';

const RollingData = () => {
  const [data, setData] = useState({ people: 0, cities: 0, participants: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        people: prev.people < 1000 ? prev.people + 10 : prev.people,
        cities: prev.cities < 50 ? prev.cities + 1 : prev.cities,
        participants:
          prev.participants < 500 ? prev.participants + 5 : prev.participants,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rolling-data">
      <div className="data-item">People: {data.people}</div>
      <div className="data-item">Cities: {data.cities}</div>
      <div className="data-item">Participants: {data.participants}</div>
    </section>
  );
};

export default RollingData;
