import React, { useState } from 'react';

const DateSelection = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-md relative max-w-sm mx-auto my-8">
      <h2 className="text-xl font-bold text-center mb-4">Date Selection</h2>
      <div className="flex items-center justify-center">
        <input
          type="date"
          className="w-64 p-2 border border-gray-400 rounded-md focus:outline-none"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateSelection;
