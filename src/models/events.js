import {inputResult} from './inputResult.js'
const path = require("path");

// const lg = (...items) => {
//   console.log(...items);
// };

let lengthText = 0;
let language = '';
let extention = '';

const inputFile = document.getElementById("input-file");
const inputFileLabel = document.getElementById("input-file-label");
const textarea = document.getElementById("textarea");
const textLengthSpan = document.getElementById("text-length");

const radioBtns = document.getElementsByName("language");

const resultPrice = document.getElementById("resultPrice");
const resultDate = document.getElementById("resultDate");

const [labelCurrentFile] = document.getElementsByClassName('label-current-file');


inputFile.addEventListener('change', (event) => {
  const target = event.currentTarget;

  if (target.files.length !== 0) {
    textLengthSpan.style.display = 'none';

    let file = target.files[0];

    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {    
      let result = reader.result.length;
      labelCurrentFile.style.display = 'flex';
      inputFileLabel.style.display = 'none';
      [...labelCurrentFile.children].forEach((item, i) => {
        item.innerText = i === 0 ? file.name : (i === 1) ? `Кількість символів: ${result}` : `завантажте файл`;
      })
      lengthText = result;
      extention = path.extname(file.name);
      inputResult(lengthText, language, extention);
    };
    
    
    
    labelCurrentFile.children[2].addEventListener('click', (e) => {
      labelCurrentFile.style.display = 'none';
      inputFileLabel.style.display = 'block';
      inputFile.value = '';
      lengthText = 0;
      extention = '';
      inputResult(lengthText, language, extention)
    })
    
  } else {
    labelCurrentFile.style.display = 'none';
    inputFileLabel.style.display = 'block';
  }
})


textarea.addEventListener('input',(event) => {
  lengthText = event.currentTarget.value.length;
  inputFileLabel.style.display = lengthText !== 0 ? "none" : 'block' ;
  textLengthSpan.innerText = lengthText;
  textLengthSpan.style.display = 'block';
  inputResult(lengthText, language, extention);
});


radioBtns.forEach((item) => {
  item.addEventListener("click", (event) => {
    language = item.value;
    inputResult(lengthText, language, extention);
  })
})




