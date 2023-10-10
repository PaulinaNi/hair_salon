export default function OpeningHoursSetting() {
 /* each slot have 15 minutes 
   startHour & finishHour- open hours - need to use 24h so 5pm is 17
   breakSlotTimeStart - when break starts - need to pass object with h and min
   bleakSlotsNumber - how many slots needed for break - 15minutes - 1 slot 
  */
 const createSlotsForOneDay = (startHour, finishHour, breakSlotTimeStart, bleakSlotsNumber) => {
  const slotsForOneDay = []
  //create all slots
  for (let i = startHour; i < finishHour; i++) {
   slotsForOneDay.push({ id: `${i}:00`, h: i, min: 0, slotAvailable: true })
   slotsForOneDay.push({ id: `${i}:15`, h: i, min: 15, slotAvailable: true })
   slotsForOneDay.push({ id: `${i}:30`, h: i, min: 30, slotAvailable: true })
   slotsForOneDay.push({ id: `${i}:45`, h: i, min: 45, slotAvailable: true })
  }
  //make break slots not available
  const breakSlotIndex = slotsForOneDay.findIndex(slot => slot.h == breakSlotTimeStart.h && slot.min == breakSlotTimeStart.min)
  for (let i = breakSlotIndex; i < breakSlotIndex + bleakSlotsNumber; i++) {
   slotsForOneDay[i].slotAvailable = false
  }
  console.log(slotsForOneDay)
  return slotsForOneDay
 }
 const mondayShift = createSlotsForOneDay(9, 15, { h: 10, min: 30 }, 2)
 return (
  <>
   {mondayShift
    .filter(slot => slot.slotAvailable == true)
    .map(slot => <button key={slot.id}>{slot.id}</button>)}
  </>
 )
}