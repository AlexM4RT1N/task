import {inputResult} from './inputResult.js'
import {select} from './select'
import {selectTitle} from './select'
import {selectInputLabel} from './select'
const path = require("path");
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

// const lg = (...items) => {
//   console.log(...items);
// };

let lengthText = 0;
let language = '';
let extention = '';

const inputFile = document.getElementById("input-file");
export const inputFileLabel = document.getElementById("input-file-label");
export const textarea = document.getElementById("textarea");
const textLengthSpan = document.getElementById("text-length");

const selectBlock = document.getElementById("select");

const selectCloseInput = document.getElementById("select__close-input");
const selectExtName = document.getElementById("select__ext-name");

const radioBtns = document.getElementsByName("language");
const radioExt = document.getElementsByName("selectExtention");

const resultPrice = document.getElementById("resultPrice");
const resultDate = document.getElementById("resultDate");

const [labelCurrentFile] = document.getElementsByClassName('label-current-file');
export const [selectTitleInput] = document.getElementsByClassName('select__title-input');


inputFile.addEventListener('change', (event) => {
  const target = event.currentTarget;

  if (target.files.length !== 0) {
    textLengthSpan.style.display = 'none';

    let file = target.files[0];
    extention = path.extname(file.name);

    let reader = new FileReader();
    
    extention === '.docx' ? reader.readAsBinaryString(file) : reader.readAsText(file);
      
      
    reader.onload = function() {
      if (extention === '.docx') {
        const zip = new PizZip(reader.result) 
        const doc = new Docxtemplater(zip)
        const outputText = doc.getFullText()
        lengthText = outputText.length;
        
      } else lengthText = reader.result.length
      
      labelCurrentFile.style.display = 'flex';
      inputFileLabel.style.display = 'none';
      selectBlock.style.display = 'none';
      [...labelCurrentFile.children].forEach((item, i) => {
        item.innerText = i === 0 ? file.name : (i === 1) ? `Кількість символів: ${lengthText}` : `завантажте файл`;
      })      
      
      inputResult(lengthText, language, extention);
    };
    
    
    labelCurrentFile.children[2].addEventListener('click', (e) => {
      labelCurrentFile.style.display = 'none';
      inputFileLabel.style.display = 'block';
      selectBlock.style.display = 'flex';
      selectTitle.classList.remove('go')
      inputFile.value = '';
      lengthText = 0;
      extention = '';
      inputResult(lengthText, language, extention)
    })
    
  } else {
    labelCurrentFile.style.display = 'none';
    inputFileLabel.style.display = 'block';
    selectBlock.style.display = 'flex';
    selectTitle.classList.remove('go')
  }
})


textarea.addEventListener('input',(event) => {
  lengthText = event.currentTarget.value.length;
  inputFileLabel.style.display = lengthText !== 0 ? "none" : 'block' ;
  selectBlock.style.display = lengthText !== 0 ? "none" : 'flex' ;
  lengthText !== 0 ? selectTitle.classList.remove('go') : '' ;
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

radioExt.forEach((item) => {
  item.addEventListener("click", (event) => {    
    extention = item.value;

    select.classList.add('select__input-length')
    selectTitle.innerText = ""
    selectExtName.innerText = extention.slice(1)

    selectTitleInput.classList.toggle('active')
    selectTitleInput.classList.toggle('inactive')
    
    selectInputLabel.forEach((elem) => {
      elem.classList.toggle('active')
      elem.classList.toggle('inactive')
    })

    inputResult(lengthText, language, extention);
  })
})

selectCloseInput.addEventListener("click", (e) => {
  selectExtName.innerText = '';
  selectTitle.innerText = "Оберіть розширення файлу"
  selectTitleInput.value = '';
  lengthText = 0;
  inputResult(lengthText, language, extention);
  selectTitleInput.classList.toggle('active')
  selectTitleInput.classList.toggle('inactive')
  selectInputLabel.forEach((elem) => {
    elem.classList.toggle('active')
    elem.classList.toggle('inactive')
  })
  select.classList.remove('select__input-length')
})

selectTitleInput.addEventListener('input',(event) => {
  if (Number.isInteger(+event.currentTarget.value)){
    lengthText = +event.currentTarget.value;
    inputResult(lengthText, language, extention);
  }
});

