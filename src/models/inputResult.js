import {getDateDeadline } from './dateDeadline'
// import { convertTime } from './dateDeadline'

export const inputResult = function(length, langu, ext) {
  
    const [price, hours] = getPriceAndTime(length, langu, ext);

    return [`${price} грн`, getDateDeadline(hours)]
}

function getPriceAndTime(length, langu, ext = '1') {
  const [multiPrice, charsHour] = langu.split('-');
  
  const price = priceFormat(length * +multiPrice * +ext <= multiPrice*1000 ? multiPrice*1000 : length * +multiPrice * +ext);
  
  const time = (length / +charsHour + 0.5) * +ext;
  const hours = time > 1 ? time : 1;
  
  return [price, hours]
}

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