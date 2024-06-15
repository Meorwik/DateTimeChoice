import { useState } from 'react'
import WebApp from '@twa-dev/sdk'
import './App.css'
import Calendar from "./Calendar.jsx";
import Clock from "./Clock.jsx";

function App() {
  const currentDate = new Date();
  console.log(currentDate)
  // const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getUTCDate() + 2);
  const [selectedDate, setSelectedDate] = useState(`${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-0${currentDate.getUTCDate() + 1}`);
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
