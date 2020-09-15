import { getDateDealine } from './dateDealine'

export const inputResult = function(length, langu, ext) {
  if (length !== 0 && langu !== '') {
    if (document.getElementById('email').checkValidity()) document.getElementById('btnSubmit').removeAttribute('disabled')
    
    document.getElementById('email').addEventListener("input", function (event) {
      if (this.checkValidity()) document.getElementById('btnSubmit').removeAttribute('disabled')
      else document.getElementById('btnSubmit').setAttribute('disabled', 'disabled')
    });

    const price = getPrice(length, langu, ext);

    const [hours, minutes] = getTime(length, langu, ext);

    resultPrice.innerText = `${price} грн`
    resultDate.innerText = getDateDealine(hours, minutes)

  } else {
    document.getElementById('btnSubmit').setAttribute('disabled', 'disabled')
    resetResult()
  }
}



const resetResult = function() {
  resultPrice.innerText = `0,00 грн`
  resultDate.innerText = ``;
}

function getPrice(length, langu, ext) {
  let price = 0;
  if (langu === 'ukrainian' || langu === 'russian') {
    price = length*0.05 <= 50 ? 50 : length*0.05;
  } else {
    price = length*0.12 <= 120 ? 120 : length*0.12;
  }
  price += (ext === '.doc'|| ext === '.docx'|| ext === '.rtf'|| ext === '') ? 0 : price/5;
  price = new Intl.NumberFormat('ru-RU', {minimumFractionDigits:2, maximumFractionDigits:2}).format(price)
  
  return price;
}

function getTime(length, langu, ext) {
  let date = 0.5;
  if (langu === 'ukrainian' || langu === 'russian') {
    date += length / 1333;  
  } else {
    date += length / 333;
  }
  date += (ext === '.doc'|| ext === '.docx'|| ext === '.rtf'|| ext === '') ? 0 : date/5;
  if (date >= 1) {
    const hours = date - (date % Math.floor(date))
    const minutes = Math.round((60/100)*(date % Math.floor(date))*100)
    return [hours,minutes];
  } else {
    return [1,0];
  }
}