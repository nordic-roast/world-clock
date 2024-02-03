import React from 'react';
import Clock from './Clock';

function ClockList({ cities }) {
  return (
    <div className="space-y-4">
      {cities.map((city, index) => (
        <Clock key={index} city={city} />
      ))}
    </div>
  );
}

export default ClockList;
