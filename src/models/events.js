import {inputResult} from './inputResult'

const emailInput = document.getElementById('email');
const btnSubmit = document.getElementById('btnSubmit');

const textarea = document.getElementById("textarea");
const textLengthSpan = document.getElementById("text-length");

const select = document.getElementById("select");

const radioBtns = document.getElementsByName("language");

const resultPrice = document.getElementById("resultPrice");
const resultDate = document.getElementById("resultDate");

let lengthText = 0;
let language = '';
let extention = '1';

emailInput.addEventListener("input", (e) => {
  if (lengthText && language) btnSubmitValid(true)
  else btnSubmitValid()
});

textarea.addEventListener('input',(event) => {
  lengthText = event.currentTarget.value.length;
  textLengthSpan.innerText = lengthText;
  textLengthSpan.style.display = 'block';
  requestResult()
});


radioBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    language = item.value;
    requestResult()
  })
})

select.addEventListener('change', (e) => {
  extention = select.value
  requestResult()
})

function requestResult() {
  if (lengthText && language) getResult(), btnSubmitValid(true)
  else resetResult(), btnSubmitValid()
}

const getResult = () => {
  const [resultP, resultD] = inputResult(lengthText, language, extention);
  
  resultPrice.innerText = resultP
  resultDate.innerText = resultD
}

const resetResult = () => {
  resultPrice.innerText = `0,00 грн`
  resultDate.innerText = ``;
}

const btnSubmitValid = (bool = false) => {
  if (emailInput.checkValidity() && bool) btnSubmit.removeAttribute('disabled')
  else btnSubmit.setAttribute('disabled', 'disabled')  
}

