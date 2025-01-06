
//Here, is a basic solution to the given problem on previous of finding largest between three numbers.

/* const a = 5
const b = 8
const c = 6
if (a > b) {
if (a > c) {
console.log(a)
}}
if (b > a) {
if (b > c) {
console.log(b)
}}
if (c > a) {
if (c > b) {
console.log(c)
}} */

//change this code so that you don't need to use nested if statement
//solution

/* const a = 5;
const b = 8;
const c = 6;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
} */



    const a = 5;
    const b = 8;
    const c = 6;
    
    let largest = a; 
    
    if (b > largest) {
        largest = b;
    }
    
    if (c > largest) {
        largest = c; 
    }
    
    console.log(largest);
    


