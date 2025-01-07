const myName = "Mohan Karki" 
const username1 = ""

const username2 = ""

const user1 = {
    firstName: 'Mohan'
}
/* const user2 = {
    firstName: 'Biraj',
    "last-Name": 'Pokhrel'
}
console.log(user2)
console.log(user2.firstName)
console.log(user2["last-Name"])
console.log(user2["first"+"Name"])
 */

const user2 = {
    firstName: 'Biraj',
    lastName: 'Pokhrel',
    address: {
        city: 'Kathmandu',
        pincode: 44600,
        state: 'Bagmati',
        moreDetails:{
            population: 30000000,
            area: '321 sq km'
        }
    }
}
user2.age= 22
user2["is-student"] = true
console.log(user2)
