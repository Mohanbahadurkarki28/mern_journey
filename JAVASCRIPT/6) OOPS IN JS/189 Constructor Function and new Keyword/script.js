/* function getBirthYear(){
  return new Date().getFullYear()-this.age
}
function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear,
     
  }
  return user
}


const user1 = createUser('Mohan', 'Karki', 22)
const user2 = createUser('Biraj', 'Pokhrel', 24)

const arr1 = [1,2]
const arr2 = [3, 4] */




function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

CreateUser.prototype.getBirthYear = function() {
  return new Date().getFullYear() - this.age
}

CreateUser.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName
}

const user1 = new CreateUser('Mohan', 'Karki', 32)
const user2 = new CreateUser('Biraj', 'Pokhrel', 72)

