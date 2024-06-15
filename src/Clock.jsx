import React, { useState } from 'react';

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

  const generateOptions = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <option key={i} value={i}>
        {String(i).padStart(2, '0')}
      </option>
    ));
  };

  return (
    <div>
      <div>
        <label>
          Часы:
          <select value={hours} onChange={handleHoursChange}>
            {generateOptions(24)}
          </select>
        </label>
      </div>
      <div>
        <label>
          Минуты:
          <select value={minutes} onChange={handleMinutesChange}>
            {generateOptions(60)}
          </select>
        </label>
      </div>
      {/*<div>*/}
      {/*  <label>*/}
      {/*    Секунды:*/}
      {/*    <select value={seconds} onChange={handleSecondsChange}>*/}
      {/*      {generateOptions(60)}*/}
      {/*    </select>*/}
      {/*  </label>*/}
      {/*</div>*/}
      {/*<button onClick={handleButtonClick}>Показать время в консоли</button>*/}
    </div>
  );
};

export default TimePicker;