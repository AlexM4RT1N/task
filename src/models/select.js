import {textarea} from './events'
import {inputFileLabel} from './events'
import {selectTitleInput} from './events'

export const select = document.getElementById('select')
export const [selectTitle] = document.getElementsByClassName('select__title')
export const [...selectInputLabel] = document.getElementsByClassName('select__input-label')

selectTitle.addEventListener('click', (e) => {
  selectTitle.innerText = ""
  
  selectTitleInput.classList.remove('active')
  selectTitleInput.classList.add('inactive')
  selectTitle.classList.add('go')
  selectTitle.classList.toggle('active')
  selectTitle.classList.toggle('inactive')
  textarea.classList.toggle('inactive')
  inputFileLabel.classList.toggle('inactive')
  selectInputLabel.forEach((elem) => {
    elem.classList.toggle('active')
    elem.classList.toggle('inactive')
  })
  setTimeout(() => {
    if (selectTitle.classList.contains('active')) selectTitle.innerText = "Оберіть розширення файлу"
  }, 900);
})

