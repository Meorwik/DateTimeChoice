import { useState } from 'react'
import WebApp from '@twa-dev/sdk'
import './App.css'
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

  const handleClick = () => {
    if (selectedDate) {
      console.log(`${selectedDate};${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);
      WebApp.sendData(`${selectedDate};${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`)
    }
  };

  return (
    <>
        {}
        <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}/>
        <Clock
            hours={hours}
            setHours={setHours}
            minutes={minutes}
            setMinutes={setMinutes}
        />

        <button onClick={handleClick}>Применить</button>
        {/*<h1>Выберите дату</h1>*/}

        {/*<input type="date" id="calendar" />*/}

        {/*<button onClick="showDate()">Показать дату</button>*/}
    </>
  )
}

export default App
