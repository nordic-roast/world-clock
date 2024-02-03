import React, { useState, useEffect } from 'react';

function Clock({ city }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getTime = (date, timezone) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: timezone
    }).format(date);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-lg mb-2 transition duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-medium">{city.name}</div>
        <div className="text-gray-500">{getTime(time, city.timezone)}</div>
      </div>
    </div>
  );
}

export default Clock;
