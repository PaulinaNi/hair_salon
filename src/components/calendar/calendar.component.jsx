import "./calendar.style.css"

export default function Calendar() {

  const todayDate = new Date()
  const thisMonth = todayDate.getMonth()
  const lastDayOfMonth = new Date(todayDate.getFullYear(), todayDate.getMonth()+1,0).getDate()
  const todayDay = todayDate.getDay()
  const dayOfMonth = todayDate.getDate()

  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const daysArray = []

  for (let i = 1; i <= lastDayOfMonth; i++) {
    daysArray.push(i)
  }

  return (
    <div className="calendarContainer" >
      <h2 className="month">{monthsArray[thisMonth]}</h2>

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
        {daysArray.map(day => <div className="day" key={day}>{day}</div> )}
      </div>
    </div>
  )
}