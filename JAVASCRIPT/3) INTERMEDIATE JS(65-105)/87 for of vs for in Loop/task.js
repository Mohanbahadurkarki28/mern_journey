/* const student = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};
let properties = "";

for (let key in student) {
    if (student.hasOwnProperty(key)) {
        properties += key + ", ";
    }
}
properties = properties.slice(0, -2);
console.log(properties);
 */


const student = {
    name: 'John Doe',
    age: 20,
    grade: 'A'
};

for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}
