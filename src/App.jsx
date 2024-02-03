import React, { useState, useEffect } from 'react';
import ClockList from './ClockList';
import TimezoneForm from './TimezoneForm';
import './App.css'; // Assuming you will compile Tailwind CSS into App.css

function App() {
  const [cities, setCities] = useState([
    { name: 'Singapore 🇸🇬', timezone: 'Asia/Singapore' }
  ]);


  // Function to add a city
  const addCity = (city) => {
    // Prevent adding duplicates
    if (!cities.some(c => c.timezone === city.timezone)) {
      setCities([...cities, city]);
    }
  };

  // Function to reset cities to original state
  const resetCities = () => {
    setCities([
      // ... (original cities)
      { name: 'Singapore 🇸🇬', timezone: 'Asia/Singapore' }
    ]);
  };

  return (
    <div className="App bg-gradient-to-br from-purple-600 to-purple-700 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">World Clock</h1>
        <ClockList cities={cities} />
        <div className="mt-6">
          <TimezoneForm addCity={addCity} resetCities={resetCities} />
        </div>
      </div>
    </div>
  );
}

export default App;