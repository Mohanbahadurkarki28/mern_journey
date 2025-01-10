/* const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]

const myName = 'Mohan'

const joinArray = [...num1,...num2,...myName]
console.log(joinArray) */




/* const user ={
    name: 'Mohan',
    age: 22
}
const updatedUser={...user, city: 'kathmandu'}
console.log(updatedUser) */


function add(){
    let sum = 0
    for(let i =0; i<arguments.length; i++){
      sum = sum + arguments[i]
    }
     return sum
}