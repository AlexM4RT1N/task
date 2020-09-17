// const [hours, minutes] = [1,0]
// const dt = [2020, 8, 14, 9, 0]

// const testDate = new Date(...dt)


export function getDateDeadline(hoursT, newDate = new Date(), today = 1) {

  let durationIsLeft = Math.round(hoursT*1000*3600);
  
  const wD = [1, 0, 0, 0, 0, 0, 1]
  const wH = {start: 10, end: 19}
  const now = new Date(newDate)  
  
  while (true) {
    const deadline = new Date(now)
    const nDay = now.getDay();
    const nDate = now.getDate();

    const currentDayStart = new Date(now)
    currentDayStart.setHours(wH.start, 0)
    
    const currentDayEnd = new Date(now)
    currentDayEnd.setHours(wH.end, 0)

    if (now > currentDayEnd) {
      today = 0
      now.setDate(nDate + 1)
      now.setHours(wH.start, 0)
      continue;
    }

    if (wD[nDay]) {
      today = 0
      now.setDate(nDate + 1)
      now.setHours(wH.start, 0)
      continue;
    }

    if (now < currentDayStart) {
      today = 0
      now.setHours(wH.start, 0)
      deadline.setHours(wH.start, 0)
    }

    const leftToEndDay = (currentDayEnd - now);

    if (durationIsLeft < leftToEndDay) {
      deadline.setMilliseconds(durationIsLeft)
      return today ? format(deadline, today, durationIsLeft) : format(deadline);
    }

    durationIsLeft -= leftToEndDay;

    today = 0
    now.setDate(nDate + 1)
    now.setHours(wH.start, 0)
  }
} 
  

function format(date, today = 0, milliseconds = 0) {
  const hours = Math.round(milliseconds/1000/36)/100
  if (today === 1 && hours <= 3) {
    return hours <= 1 ? `Здамо за: одну годину` :
            hours <= 2 ? `Здамо за: дві години` :
            `Здамо за: три години`;
  }

  let D = date.getDate()
  D = D < 10 ? '0' + D : D
  
  let M = date.getMonth() + 1
  M = M < 10 ? '0' + M : M

  let Y = date.getFullYear() % 100
  Y = Y < 10 ? '0' + Y : Y

  let h = date.getHours()
  h = h < 10 ? '0' + h : h

  let m = date.getMinutes()
  if (m > 0 && m <= 30) {
    m = '30'
  } else if (m === 0) {
    m = '00';
  } else {
    m = '00'
    h = +h < 10 ? '0' + (+h + 1) : +h + 1
  }

  return `Термін виконання: ${D}.${M}.${Y} о ${h}:${m}`;
}

export function convertTime(arr = []) {
  return arr.length === 1 ? [
                              Math.floor(arr[0]), 
                              arr[0] >= 1 ? Math.round(arr[0] % Math.floor(arr[0])*60) : Math.round(arr[0]*60)
                            ] : [arr[0] + (arr[1] / 60)];
}