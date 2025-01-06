let favColor = prompt('Name Your favourite color').toLocaleLowerCase()
switch(favColor){
    case 'red': 
    console.log('Red is a passionate color!')
    break
    case 'blue': 
    console.log('Blue is a calming and serene')
    break
    case 'green': 
    console.log('Green symbolizes nature and growth')
    break

    default: 
    console.log(`${favColor} is also my favourite color`)
}