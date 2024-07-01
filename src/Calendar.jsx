import React, { useState } from 'react';

const Calendar = ({selectedDate, setSelectedDate}) => {


  // Получаем текущую дату
  const currentDate = new Date();

  // Получаем первую дату текущего месяца
  const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getUTCDate() + 2);

  // Получаем последнюю дату через три месяца
  const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };



  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        min={startDate.toISOString().split("T")[0]}
        max={endDate.toISOString().split("T")[0]}
      />
      {/*<button onClick={handleClick}>Вывести дату в консоль</button>*/}
    </div>
  );
};

export default Calendar;
