console.log("Program Start");

// let i = 0
// while (i < 5) {
//   console.log(i)
//   i++
// }

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

/* let i = 0 

do {
    console.log(i);
    i++
} while (i <=  5)
 */

/* let sum = 0;
for(let i =1; i<=100; i++ ){
   sum+= i;
}
console.log(sum) */

/* 
let numbers = [5, 10, 2, 8, 15];
let maxNumber = Math.max(...numbers);
console.log(maxNumber);
 */

/* let str = "hello";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr); */

/* let str = "javascript";
let vowelCount = 0;
let vowels = "a,e,i,o,u";
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    }
}
console.log(vowelCount); */

/* let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < 10; i++) {
    let nextTerm = a + b;
    console.log(nextTerm);
    a = b;
    b = nextTerm;
} */

/* let number = prompt('Enter the Number')
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is not a prime number`);
} */

/*     function generateRandomPassword(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }
    let password = generateRandomPassword(8);
    console.log(password); */
/* 
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    } */



let num = 5; 
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);

console.log("Program Ended");
