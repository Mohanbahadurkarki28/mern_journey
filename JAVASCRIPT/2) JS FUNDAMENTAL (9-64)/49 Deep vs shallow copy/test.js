
/* 1) Shallow copy means create a new object or array but only copy the reference not the actual value
2) Deep copy creates a completely independent copy of the original array and it will not affect the original array and we can use it by using the json.parse(json.stringify())


it is important to understand this because it helps you effectively manage data integrity and performance in JavaScript.
*/



/* 
// example of deep copy

const original = { name: "Mohan", details: { age: 22 } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.age = 25;
console.log(original.details.age); 

 */

 const user = { 
    name: "Amit",
    address: { 
         city: "Delhi", 
            pincode: 110001
          }
}

const shallowCopy = { ...user };
console.log(user === shallowCopy); 
console.log(user.address === shallowCopy.address); 
shallowCopy.address.city = "Mumbai";
console.log(user.address.city); 

//Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(user));


console.log(user === deepCopy); 
console.log(user.address === deepCopy.address); 

deepCopy.address.city = "Mumbai";
console.log(user.address.city); 

