/* const user = {
  firstName: "Mohan",
  lastName: "Karki",
  age: 25,
  getAgeYear: function () {
    return new Date().getFullYear() - user.age;
  },
};
 */

function createUser(firstName, lastName, age){
  const user ={
    firstName,
    lastName,
    age,
    getAgeYear(){
      return new Date().getFullYear()-user.age
    }
  }
  return user
}

const user1 = createUser('Mohan', 'Karki', 22)