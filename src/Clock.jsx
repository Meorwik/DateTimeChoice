import React, { useState } from 'react';
import './Clock.css';

const TimePicker = ({hours, setHours, minutes, setMinutes}) => {


  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  // const handleButtonClick = () => {
  //   console.log(`Выбранное время: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
  // };

  const generateOptions = (count, step = 1) => {
    return Array.from({ length: Math.floor(count / step) + 1 }, (_, i) => (
      <option key={i} value={i * step}>
        {String(i * step).padStart(2, '0')}
      </option>
    ));
  };

  return (
    <div>
      <div>
        <label style={{ fontSize: '16px' }}>
        Часы:
        <select
          value={hours}
          onChange={handleHoursChange}
          style={{ fontSize: '16px', padding: '5px' }}
        >
          {generateOptions(24)}
        </select>
      </label>
      </div>
      <div>
        <label style={{ fontSize: '16px' }}>
        Минуты:
        <select
          value={minutes}
          onChange={handleMinutesChange}
          style={{ fontSize: '16px', padding: '5px' }}
        >
          {generateOptions(60, 10)}
        </select>
      </label>
      </div>
    </div>
  );
};

export default TimePicker;