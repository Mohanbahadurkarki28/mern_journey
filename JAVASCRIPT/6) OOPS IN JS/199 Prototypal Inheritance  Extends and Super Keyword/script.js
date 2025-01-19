class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}


/* const user1 = new User('Mohan', 'Karki', 32)
const user2 = new User('Biraj', 'Pokhrel', 72)
 */

class student extends User{ 
}




class Employee { 
  
}

const Employee1 = new Employee('Mohan', 'Karki', 32, 'Microsoft' )
const Employee2 = new Employee('Biraj', 'Pokhrel', 72, "Google")
