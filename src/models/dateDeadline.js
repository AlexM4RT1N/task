// const [hours, minutes] = [1,0]
// const dt = [2020, 8, 14, 9, 0]

// const testDate = new Date(...dt)


function getDateDeadline(hoursT, minutesT, newDate = new Date('2020-09-17 14:43'), today = 1) {
  let hours = hoursT;
  let minutes = minutesT;
  const wD = {sat:6, sun:0, wd:[0, 1, 1, 1, 1, 1, 0]}
  const wH = {start: 10, end: 19}
  const now = new Date(newDate)
  const nDay = now.getDay();
  const nDate = now.getDate();
  const nHour = now.getHours();
  const nMin = now.getMinutes();
  
  let nextDay = 0;
  const deadline = new Date(now);
  
  if(wD.wd[nDay]) {  
    
    if(nHour >= wH.start && nHour < wH.end) {
      
      if (hours <= (wH.end-wH.start)) {
        
        let min = nMin + minutes;
        deadline.setHours(nHour + hours, min)
        min = deadline.getMinutes()
        let dMin = min > 0 && min <= 30 ? 30 : min > 30 && min <= 60 ? 60 : 0;
        let dHour = deadline.getHours();
        deadline.setMinutes(dMin)
        
        if ((dHour < wH.end && dHour >= wH.start) || (dHour === wH.end && dMin < 1) ) {
          if (today === 1 ) return (hours < 1 || (hours === 1 && minutes < 1)) ? `Здамо за: одну годину` :
          (hours < 2 || (hours === 2 && minutes < 1)) ? `Здамо за: дві години` :
          (hours < 3 || (hours === 3 && minutes < 1)) ? `Здамо за: три години`:
          format(deadline);          
          
          if (today === 0) return format(deadline);

        } else {
          [hours, minutes] = convertTime([convertTime([hours, minutes]) - (wH.end - convertTime([nHour,nMin]))])
          
          deadline.setDate(nDate + 1)
          deadline.setHours(wH.start, 0)
          return getDateDeadline(hours, minutes, deadline, 0)

        }
      } else {
        [hours, minutes] = convertTime([convertTime([hours, minutes]) - (wH.end - convertTime([nHour,nMin]))])
        
        deadline.setDate(nDate + 1)
        deadline.setHours(wH.start, 0)
        return getDateDeadline(hours, minutes, deadline, 0)
      }
    } else {
      nextDay = (nHour >= 0 && nHour < wH.start) ? 0 : 1;
      deadline.setDate(nDate + nextDay)
      deadline.setHours(wH.start, 0)
      return getDateDeadline(hours, minutes, deadline, 0)
    }
  } else {
    nextDay = nDay === wD.sat ? 2 : nDay === wD.sun ? 1 : 0;
    deadline.setDate(nDate + nextDay)
    deadline.setHours(wH.start, 0)
    return getDateDeadline(hours, minutes, deadline, 0)
  }
}


function format(date) {
  var D = date.getDate()
  D = D < 10 ? '0' + D : D
  
  var M = date.getMonth() + 1
  M = M < 10 ? '0' + M : M

  var Y = date.getFullYear() % 100
  Y = Y < 10 ? '0' + Y : Y

  var h = date.getHours()
  h = h < 10 ? '0' + h : h

  var m = date.getMinutes()
  m = m < 10 ? '0' + m : m

  return `Термін виконання: ${D}.${M}.${Y} о ${h}:${m}`;
}

function convertTime(arr = []) {
  return arr.length === 1 ? [
                              Math.floor(arr[0]), 
                              arr[0] >= 1 ? Math.round(arr[0] % Math.floor(arr[0])*60) : Math.round(arr[0]*60)
                            ] : [arr[0] + (arr[1] / 60)];
}

module.exports = {getDateDeadline, convertTime}
