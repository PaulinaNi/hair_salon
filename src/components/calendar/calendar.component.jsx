import { useState } from "react"
import "./calendar.style.css"

export default function Calendar() {
  const todayDate = new Date()

  const [displayMonth, setDisplayMonth] = useState(todayDate)


  const thisMonth = displayMonth.getMonth()
  const thisYear = displayMonth.getFullYear()
  const lastDayOfMonth = new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 0)
  const firstDayofMonth = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), 1).getDay()
  const lastDayOfPrevMonth = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), 0).getDate()

  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const daysArray = []

  //load days to arrey from prev month
  for (let i = lastDayOfPrevMonth - firstDayofMonth + 1; i <= lastDayOfPrevMonth; i++) {
    daysArray.push({ dayNumber: i, class: 'day prev-next', isAvaliableForBooking: false })
  }
  //load days to arrey from this month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    if (i > todayDate.getDate()) {
      daysArray.push({ dayNumber: i, class: 'day thisMonth avaliableForBooking', isAvaliableForBooking: true })
    } else {
      daysArray.push({ dayNumber: i, class: 'day thisMonth', isAvaliableForBooking: false })
    }
  }
  //load days to arrey from next month
  for (let i = 1; i <= 6 - lastDayOfMonth.getDay(); i++) {
    daysArray.push({ dayNumber: i, class: 'day prev-next avaliableForBooking', isAvaliableForBooking: true })
  }

  const dayPickingHandler = (isAvaliableForBooking) => {
    if (isAvaliableForBooking) {
      console.log('working')
    }
  }

  const toNextMonthHandler = (prevOrNext) => {
    if (prevOrNext === 'prev') {
      setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, displayMonth.getDate()))
    } else if (prevOrNext === 'next') {
      setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, displayMonth.getDate()))
    }
  }

  return (
    <div className="calendarContainer" >
      <h2 className="month">{monthsArray[thisMonth]} {thisYear}</h2>
      <div className="calendarNavigation" >
        <div onClick={() => toNextMonthHandler('prev')}>Previous Month</div>
        <div onClick={() => toNextMonthHandler('next')}>Next Month</div>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="days">
        {daysArray.map((day, index) =>
          <div
            className={day.class}
            key={index}
            onClick={() => dayPickingHandler(day.isAvaliableForBooking)}>
            {day.dayNumber}
          </div>)}
      </div>
    </div>
  )
}