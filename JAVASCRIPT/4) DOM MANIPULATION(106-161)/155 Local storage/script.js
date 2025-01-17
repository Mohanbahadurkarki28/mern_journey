const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')

const ageElement = document.querySelector('.age-tag')  
const ageInput = document.querySelector('.age')


nameElement.innerText = localStorage.getItem('myName')
nameInput.addEventListener('input', (e)=>{
    localStorage.setItem('myName', e.target.value)
    nameElement.innerText = localStorage.myName
})

ageElement.innerText = localStorage.getItem('myAge')
ageInput.addEventListener('input', (e)=>{
    localStorage.setItem('myAge', e.target.value)
    ageElement.innerText = localStorage.myAge
})