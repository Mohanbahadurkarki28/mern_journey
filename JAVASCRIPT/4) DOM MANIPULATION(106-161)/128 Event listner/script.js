const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayHi(){
    console.log('Hi!')
}
/* h1.addEventListener('click', sayHi) */

let count = 1
card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count
    count++
    container.append(newCard)
})