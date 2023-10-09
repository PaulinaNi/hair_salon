import './App.css'

function App() {
  const numbers = [1,2,3,4,5,6,7,8,9]
  

  //each slot have 15 minutes , startHour & finishHour- open hours - need to use 24h so 5pm is 17
  const createSlotsForOneDay = (startHour,finishHour ) => {
    const slotsForOneDay = []
    for (let i = startHour; i< finishHour;i++){
      slotsForOneDay.push({id: `${i}:00`,h: i, min: 0, slotAvailable: true})
      slotsForOneDay.push({id: `${i}:15`,h: i, min: 15, slotAvailable: true})
      slotsForOneDay.push({id: `${i}:30`,h: i, min: 30, slotAvailable: true})
      slotsForOneDay.push({id: `${i}:45`,h: i, min: 45, slotAvailable: true})
    }
    console.log(slotsForOneDay)
    return slotsForOneDay
  }
  const mondayShift = createSlotsForOneDay(9,15)

  return (
    <>
      <p>Hello World</p>
      {mondayShift.map(e=><button key={e.id}>{e.id}</button>)}
    </>
  )
}

export default App
