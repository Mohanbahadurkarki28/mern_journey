const nums = [1, 2, 3, 4, 5]

const sum = nums.reduce((accumulator, current, i) => {
    // console.log(i, current);
    // console.log(accumulator);
    return accumulator * current
}, 0)



/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter((num) => num % 2 !== 0);

console.log(oddNumbers);  */
/* 
const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce((acc, num) => acc * num, 1);

console.log(product);
 */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddSquares = numbers
  .filter((num) => num % 2 !== 0) 
  .map((num) => num * num);      

console.log(oddSquares);
 */



/* const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {}); 
console.log(fruitCount);  */



/* const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 },
  ];
  const totalCost = products.reduce((acc, product) => {
    const discountedPrice = product.price * 0.9; 
    return acc + discountedPrice;
  }, 0); 
  console.log(totalCost);  */


  /* const names = ['Alice', 'Bob', 'Charlie'];
const ages = [25, 30, 35];
const cities = ['New York', 'Los Angeles', 'Chicago'];
const combined = names.map((name, index) => ({
  name: name,
  age: ages[index],
  city: cities[index]
}));
console.log(combined);
 */