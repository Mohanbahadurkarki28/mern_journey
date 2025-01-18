class CreateUser {
    constructor(a,b,c){
        this.firstName = a
        this.lastName =b
        this.age = c        
    }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Mohan", "Karki", 32);
const user2 = new CreateUser("Biraj", "Pokhrel", 72);
