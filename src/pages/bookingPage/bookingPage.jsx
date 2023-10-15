import { useState } from "react";

export default function BookingPage() {

 const todayDate = new Date();
 const todayDateMonthNumberForDisplay = todayDate.getMonth() + 1 < 10 ?
  `0${todayDate.getMonth() + 1}` :
  `${todayDate.getMonth() + 1}`
 const nextDayString = `${todayDate.getFullYear()}-${todayDateMonthNumberForDisplay}-${todayDate.getDate() + 1}`

 const threeMonthsFromToday = new Date(todayDate.getFullYear(), todayDate.getMonth() + 3, todayDate.getDate())
 const threeMonthsFromTodayNumberForDisplay = threeMonthsFromToday.getMonth() + 1 < 10 ?
  `0${threeMonthsFromToday.getMonth() + 1}` :
  `${threeMonthsFromToday.getMonth() + 1}`
 const maxValueForDatePicking = `${threeMonthsFromToday.getFullYear()}-${threeMonthsFromTodayNumberForDisplay}-${threeMonthsFromToday.getDate()}`


 const [appointmentDate, setAppointmentDate] = useState({
  value: nextDayString,
  min: nextDayString,
  max: maxValueForDatePicking
 })

 const dateChangeHandler = () => {
  console.log('changed')
 }
 return (
  <>
   <h1>Book an appointment</h1>
   <p>
    We invite you to plan your next stunning look with us. Embrace the anticipation of your next haircut, color, or styling session by securing your preferred appointment well ahead of time. With our three-month booking policy, you can guarantee your slot for that special occasion, important event, or simply for your regular touch-up.
   </p>
   <label htmlFor="appointmentDate">Choose a date: </label>
   <input
    id="appointmentDate"
    name="appointmentDate"
    value={appointmentDate.value}
    onChange={dateChangeHandler}
    min={appointmentDate.min}
    max={appointmentDate.max}
    type="date" />
  </>
 )
}