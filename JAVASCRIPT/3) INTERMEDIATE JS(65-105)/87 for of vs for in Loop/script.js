/* const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

for(fruit of fruits){
    console.log(fruit)
}
 */



const person ={
    firstName: 'Mohan',
    lastName: 'Karki',
    age:22,
    eyeColor: 'Black',
    city: 'kathmandu',
}

for(const key in person){
    console.log(key, ':', person[key])
}