const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

const intervalId = setInterval(() =>{
    if(count >= 1000 ){
        clearInterval(intervalId)
    }
    addCardBtn.click()
})