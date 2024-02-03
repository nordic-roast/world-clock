import React, { useState } from 'react';

const ASEAN_COUNTRIES_TIMEZONES = [
    { name: 'Brunei 🇧🇳', timezone: 'Asia/Brunei' },
    { name: 'Cambodia 🇰🇭', timezone: 'Asia/Phnom_Penh' },
    { name: 'Indonesia 🇮🇩', timezone: 'Asia/Jakarta' },
    { name: 'Laos 🇱🇦', timezone: 'Asia/Vientiane' },
    { name: 'Malaysia 🇲🇾', timezone: 'Asia/Kuala_Lumpur' },
    { name: 'Myanmar 🇲🇲', timezone: 'Asia/Yangon' },
    { name: 'Philippines 🇵🇭', timezone: 'Asia/Manila' },
    { name: 'Thailand 🇹🇭', timezone: 'Asia/Bangkok' },
    { name: 'Vietnam 🇻🇳', timezone: 'Asia/Ho_Chi_Minh' }
];

function TimezoneForm({ addCity, resetCities }) {
    const [selectedTimezone, setSelectedTimezone] = useState(ASEAN_COUNTRIES_TIMEZONES[0].timezone);

    const handleSubmit = (event) => {
        event.preventDefault();
        const country = ASEAN_COUNTRIES_TIMEZONES.find(ct => ct.timezone === selectedTimezone);
        addCity(country);
    };

    const handleReset = () => {
        resetCities();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6">
            <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
                {ASEAN_COUNTRIES_TIMEZONES.map((country) => (
                    <option key={country.timezone} value={country.timezone}>
                        {country.name}
                    </option>
                ))}
            </select>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                    type="submit"
                    className="p-3 bg-blue-500 text-white rounded-md shadow-md transition duration-300 ease-in-out hover:bg-blue-600"
                >
                    Add City
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="p-3 bg-red-500 text-white rounded-md shadow-md transition duration-300 ease-in-out hover:bg-red-600"
                >
                    Reset
                </button>
            </div>
        </form>
    );
}

export default TimezoneForm;
