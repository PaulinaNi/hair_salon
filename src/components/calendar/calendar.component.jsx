export default function Calendar() {

const todayDate = new Date().toString()
const thisMonth = new Date().getMonth()
const todayDay = new Date().getDay()
const dayOfMonth = new Date().getDate()

let displayMonth = (month) => {
 switch(month){
  case 0:
   return "January"
   break
   case 1:
    return "February"
   break
   case 2:
    return "March"
   break
   case 3:
    return "April"
   break
   case 4:
    return "May"
   break
   case 5:
    return "June"
   break
   case 6:
    return "July"
   break
   case 7:
    return "August"
   break
   case 8:
    return "September"
   break
   case 9:
    return "October"
   break
   case 10:
    return "November"
   break
   case 11:
    return "December"
   break
 }
}

 return (
  <>
   <p>Calendar</p>
   <table>
    <thead>
     <tr>
      <th>{displayMonth(thisMonth)}</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
      <th>Sunday</th>
     </tr>
     <tr></tr>
    </tbody>
   </table>
  </>
 )
}