import React, { useState } from 'react';
import './Calendar.css';

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
  style={{ fontSize: '16px', padding: '5px' }}
  value={selectedDate}
  onChange={handleDateChange}
  min={startDate.toISOString().split("T")[0]}
  max={endDate.toISOString().split("T")[0]}
/>

    </div>
  );
};

export default Calendar;

// import React from 'react';
// import { format, addMonths } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
//
// const Calendar = ({ selectedDate, setSelectedDate, timeZone }) => {
//   const currentDate = utcToZonedTime(new Date(), timeZone);
//   const startDate = utcToZonedTime(new Date(), timeZone);
//   const endDate = addMonths(startDate, 3);
//
//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };
//
//   return (
//     <div>
//       <input
//         type="date"
//         value={selectedDate}
//         onChange={handleDateChange}
//         min={format(startDate, 'yyyy-MM-dd')}
//         max={format(endDate, 'yyyy-MM-dd')}
//       />
//     </div>
//   );
// };
//
// export default Calendar;