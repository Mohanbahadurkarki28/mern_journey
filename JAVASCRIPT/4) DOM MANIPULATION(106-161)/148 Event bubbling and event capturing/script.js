const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener('click', (e) =>{
    console.log('6. window Event Listner')
}, true)

document.addEventListener('click', (e) =>{
    console.log('5. document Event Listner')
}, true)

document.body.addEventListener('click', (e) =>{
    console.log('4. document body Event Listner')
}, true)

green.addEventListener('click', (e) =>{
    e.stopPropagation()
    console.log('3. Green Event Listner')
}, true)

pink.addEventListener('click', (e) =>{

    console.log('2. pink Event Listner')
}, true)

blue.addEventListener('click', (e) =>{
    e.stopPropagation()
    console.log('1. blue Event Listner')
}, true)

