// const {getDateDeadline } = require('./dateDeadline')
// const {getPriceAndTime } = require('./inputResult')

function getDateDeadline(hoursT, minutesT, newDate = new Date(), today = 1) {

  let durationIsLeft = Math.round(convertTime([hoursT,minutesT])*1000*3600);
  
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

function convertTime(arr = []) {
  return arr.length === 1 ? [
                              Math.floor(arr[0]), 
                              arr[0] >= 1 ? Math.round(arr[0] % Math.floor(arr[0])*60) : Math.round(arr[0]*60)
                            ] : [arr[0] + (arr[1] / 60)];
}


describe('testing the script to calculate the deadline date', () => {
  test('after working hours 16.09.2020', () => {
    const date = new Date('2020-09-16 21:35')
    expect(getDateDeadline(1,30,date)).toBe('Термін виконання: 17.09.20 о 11:30')
    expect(getDateDeadline(1,31,date)).toBe('Термін виконання: 17.09.20 о 12:00')
    expect(getDateDeadline(3,3,date)).toBe('Термін виконання: 17.09.20 о 13:30')
    expect(getDateDeadline(2,0,date)).toBe('Термін виконання: 17.09.20 о 12:00')
    expect(getDateDeadline(1,0,date)).toBe('Термін виконання: 17.09.20 о 11:00')
    expect(getDateDeadline(21,30,date)).toBe('Термін виконання: 21.09.20 о 13:30')
    expect(getDateDeadline(96,12,date)).toBe('Термін виконання: 01.10.20 о 16:30')
  }) 
  test('before working hours 17.09.2020', () => {
    const date = new Date('2020-09-17 06:18')
    expect(getDateDeadline(1,30,date)).toBe('Термін виконання: 17.09.20 о 11:30')
    expect(getDateDeadline(1,31,date)).toBe('Термін виконання: 17.09.20 о 12:00')
    expect(getDateDeadline(3,3,date)).toBe('Термін виконання: 17.09.20 о 13:30')
    expect(getDateDeadline(2,0,date)).toBe('Термін виконання: 17.09.20 о 12:00')
    expect(getDateDeadline(1,0,date)).toBe('Термін виконання: 17.09.20 о 11:00')
    expect(getDateDeadline(21,30,date)).toBe('Термін виконання: 21.09.20 о 13:30')
    expect(getDateDeadline(96,12,date)).toBe('Термін виконання: 01.10.20 о 16:30')
  }) 
  test('during working hours 14:43 17.09.2020', () => {
    const date = new Date('2020-09-17 14:43')
    expect(getDateDeadline(1,50,date)).toBe('Здамо за: дві години')
    expect(getDateDeadline(1,1,date)).toBe('Здамо за: дві години')
    expect(getDateDeadline(3,3,date)).toBe('Термін виконання: 17.09.20 о 18:00')
    expect(getDateDeadline(2,47,date)).toBe('Здамо за: три години')
    expect(getDateDeadline(1,0,date)).toBe('Здамо за: одну годину')
    expect(getDateDeadline(21,30,date)).toBe('Термін виконання: 21.09.20 о 18:30')
    expect(getDateDeadline(96,12,date)).toBe('Термін виконання: 02.10.20 о 12:00')
  })
})

// describe('testing the script to get the price and time to complete the case', () => {
//   test('text to be entered in the textarea field UK-RU = "0.05-1333" ', () => {
//     expect(getPriceAndTime(0, "0.05-1333")).toEqual(["50,00", 1, 0])
//     expect(getPriceAndTime(1, "0.05-1333")).toEqual(["50,00", 1, 0])
//     expect(getPriceAndTime(-1, "0.05-1333")).toEqual(["50,00", 1, 0])
//     expect(getPriceAndTime(678, "0.05-1333")).toEqual(["50,00", 1, 1])
//     expect(getPriceAndTime('1', "0.05-1333")).toEqual(["50,00", 1, 0])
//     expect(getPriceAndTime(1333, "0.05-1333")).toEqual(["66,65", 1, 30])
//     expect(getPriceAndTime(1001, "0.05-1333")).toEqual(["50,05", 1, 15])
//     expect(getPriceAndTime(16384, "0.05-1333")).toEqual(["819,20", 12, 47])
//     // expect(getPriceAndTime(496514, "0.05-1333")).toEqual(["24 825,70", 372, 59])
//   })
//   test('text to be entered in the textarea field EN = "0.12-333" ', () => {
//     expect(getPriceAndTime(0, "0.12-333")).toEqual(["120,00", 1, 0])
//     expect(getPriceAndTime(169, "0.12-333")).toEqual(["120,00", 1, 0])
//     expect(getPriceAndTime(170, "0.12-333")).toEqual(["120,00", 1, 1])
//     expect(getPriceAndTime(1001, "0.12-333")).toEqual(["120,12", 3, 30])
//     expect(getPriceAndTime(3892, "0.12-333")).toEqual(["467,04", 12, 11])
//     // expect(getPriceAndTime(126958, "0.12-333")).toEqual(["15 234,96", 381, 45])
//   })
//   test('text is taken from files, .doc-.docx-.rtf = "1"  .pdf-.odt-.txt = "1.2" ', () => {
//     expect(getPriceAndTime(1, "0.05-1333", "1.2")).toEqual(["50,00", 1, 0])
//     expect(getPriceAndTime(1, "0.12-333", "1.2")).toEqual(["120,00", 1, 0])
//     expect(getPriceAndTime(678, "0.05-1333", "1")).toEqual(["50,00", 1, 1])
//     expect(getPriceAndTime(170, "0.12-333", "1")).toEqual(["120,00", 1, 1])
//     expect(getPriceAndTime(678, "0.05-1333", "1.2")).toEqual(["50,00", 1, 13])
//     expect(getPriceAndTime(170, "0.12-333", "1.2")).toEqual(["120,00", 1, 13])
//     expect(getPriceAndTime(1001, "0.05-1333", "1.2")).toEqual(["60,06", 1, 30])
//     expect(getPriceAndTime(1001, "0.12-333", "1.2")).toEqual(["144,14", 4, 12])
//     expect(getPriceAndTime(16384, "0.05-1333", "1.2")).toEqual(["983,04", 15, 21])
//     expect(getPriceAndTime(3892, "0.12-333", "1.2")).toEqual(["560,45", 14, 38])
//   })
// })
