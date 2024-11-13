import { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import './App.css';
import Calendar from "./Calendar.jsx";
import Clock from "./Clock.jsx";

function App() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  // Функция для определения количества дней в месяце
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
  let currentDay = currentDate.getDate() + 1;

  let nextMonth = currentMonth;
  let nextYear = currentYear;

  if (currentDay > daysInCurrentMonth) {
    currentDay = 1;
    nextMonth += 1;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear += 1;
    }
  }

  const [selectedDate, setSelectedDate] = useState(
    `${nextYear}-${nextMonth.toString().padStart(2, "0")}-${currentDay.toString().padStart(2, "0")}`
  );

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isAhead, setIsAhead] = useState(false);
  const [omskDateTime, setOmskDateTime] = useState('');

  useEffect(() => {
    const getOmskTime = () => {
      const now = new Date();
      // Переводим локальное время в UTC
      const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      // Омск UTC+7
      const omskOffset = 6 * 60 * 60 * 1000; // смещение в миллисекундах
      const omskTime = new Date(utcTime.getTime() + omskOffset);
      setOmskDateTime(omskTime);
    };

    getOmskTime();
  }, []);

  const handleClick = () => {
    if (selectedDate) {
      const userTime = new Date(`${selectedDate}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
      compareTimes(userTime);
    }
  };

  const compareTimes = (userTime) => {
    if (omskDateTime) {
      const timeDifference = userTime - omskDateTime;

      // Проверяем, если пользовательское время минимум на 20 часов впереди
      const isUserTimeAhead = timeDifference >= 10 * 60 * 60 * 1000;

      // Учитываем, что пользовательское время должно быть на 20 часов впереди
      setIsAhead(isUserTimeAhead);

      if (isUserTimeAhead) {
        console.log(`${selectedDate};${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
        WebApp.sendData(`${selectedDate};${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
      } else {
        alert("Выбранное время должно быть минимум на 10 часов впереди.");
      }
    }
  };

  const publishImmediatelyHandleClick = () => {
    if (selectedDate) {
      console.log("post_immediately");
      WebApp.sendData("post_immediately");
    }
  };

  return (
    <>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Clock
        hours={hours}
        setHours={setHours}
        minutes={minutes}
        setMinutes={setMinutes}
      />
      <div>
        <button onClick={handleClick}>Опубликовать в указанное время</button>
      </div>
      <div>
        <button onClick={publishImmediatelyHandleClick}>Опубликовать в ближайшее время (после подтверждения)</button>
      </div>
    </>
  );
}

export default App;
