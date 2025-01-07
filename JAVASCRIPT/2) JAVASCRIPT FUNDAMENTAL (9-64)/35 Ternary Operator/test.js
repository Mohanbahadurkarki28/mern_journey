/* const a = 5
const b = 8
const c = 6
if (a > b && a > c) {
console.log(a)
} else if (b > c) {
console.log(b)
} else {
console.log(c)
}
//⇒ Now, use this code and try to do the same thing with the ternary operator.
 */

//using Ternary operator

const a = 5
const b = 8
const c = 6

console.log(a>b&&a>c?a:(b>c?b:c));