const {getDateDeadline } = require('./dateDeadline')
const { convertTime } = require('./dateDeadline')
// import {getDateDeadline } from './dateDeadline'
// import { convertTime } from './dateDeadline'

const inputResult = function(length, langu, ext) {
  
    const [price, hours, minutes] = getPriceAndTime(length, langu, ext);

    return [`${price} грн`, getDateDeadline(hours, minutes)]
}

function getPriceAndTime(length, langu, ext = '1') {
  const [multiPrice, charsHour] = langu.split('-');
  
  const price = priceFormat(length * +multiPrice * +ext <= multiPrice*1000 ? multiPrice*1000 : length * +multiPrice * +ext);
  // const priceFormat = new Intl.NumberFormat('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2}).format(price);
  
  const date = (length / +charsHour + 0.5) * +ext;
  const [hours, minutes] = date > 1 ? convertTime([date]) : [1,0];
  
  return [price, hours, minutes]
}

module.exports = {inputResult, getPriceAndTime}


function priceFormat(number) {
  let [grn, kop] = String(number).split('.')

  kop = kop === undefined ? '00' : 
  kop.length === 1 ? kop + '0' : 
  kop.length === 2 ? kop :  
  kop[0] === '0' && kop[1] !== '0' ? '0' + String(Math.round(+kop/(10**(kop.length-2)))) : 
  kop[0] === '0' && kop[1] === '0' ? '00' : String(Math.round(+kop/(10**(kop.length-2))));

  if (grn.length > 3) {
    let grnWithSpace = '';
    let j = grn.length
    for (let i = 0; i < grn.length; i++) {      
      grnWithSpace += j === grn.length ? grn[i] : j % 3 === 0 ? ' ' + grn[i] : grn[i];
      j--
    }
    grn = grnWithSpace;
  }

  return `${grn},${kop}`
}

// function priceFormat(number) {
//   let [grn, kop] = String(number).split('.')

//   kop = kop === undefined ? '00' : kop.length === 1 ? kop + '0' : kop.length === 2 ? kop :  (kop[0] === '0' && kop[1] !== '0') ? '0' + String(Math.floor(+kop/(10**(kop.length-2)))) : (kop[0] === '0' && kop[1] === '0') ? '00' : String(Math.floor(+kop/(10**(kop.length-2))));

//   if (grn.length > 3) {
//     let grnWithSpace = '';
    
//     for (let i = 0; i < grn.length; i+=3) {      
//       grnWithSpace += i === 0 ? '': ' ';
//       grnWithSpace += grn.length%3 === 0 ? grn.slice(i,i+3) : '';      
//       grnWithSpace += grn.length%3 === 0 ? '' : i === 0 ? grn.slice(i,grn.length%3) : grn.slice(grn.length%3+i-3,grn.length%3+i);      
//     }
//     grn = grnWithSpace;
//   }

//   return `${grn},${kop}`
// }