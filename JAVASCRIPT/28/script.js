const username = prompt('Plese enter your name.') || 'Mohan';
const userage = prompt('Please enter your age.') || 22;
console.log(`Name: ${username}`);
console.log(`Age:${userage}`)

if(userage>=18 && userage<=24){
    console.log(`${username} is a college student.`)
    console.log('and he is learning computer science')
}

if(userage>=25 && userage<=45){
    console.log(`${username} is a Working professional.`)
    console.log('and he is enjoying very well')
}

if(userage>45){
    console.log(`${username} is Retired.`)
    
}

console.log('Program Ended!!');