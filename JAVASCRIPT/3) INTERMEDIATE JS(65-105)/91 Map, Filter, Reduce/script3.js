// SOLUTION OF THE 7 PROBLEM


/* 
1
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];
const fixedTemperatures = celsiusTemperatures.map(temp => temp + 2);
console.log(fixedTemperatures); */


/* 
2
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];
const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2);
const fahrenheitTemperatures = fixedTemperatures.map((temp) => (temp * 9/5) + 32);
console.log(fahrenheitTemperatures);

 */

/*
3
 const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];
const fixedTemperatures = celsiusTemperatures.map((temp) => temp + 2);
const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32);
const healthyPeople = fahrenheitTemperatures.filter((temp) => temp < 104);
console.log(healthyPeople); */

/* 
4
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];
const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2);
const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32);
const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104);
const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81];
const totalFood = warehouse.reduce((total, weight) => total + weight, 0);

console.log(totalFood); */


/* const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];
const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2);
const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32);
const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104);
const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81];
const totalFood = warehouse.reduce((acc, curr) => acc + curr);
console.log("Total food:", totalFood);
healthyPeople.push(98.6);

console.log("Updated healthy people:", healthyPeople); */




/* 
6
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];
const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2);
const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32);
const healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104);
const warehouse = [86, 76, 98, 50, 12, 98, 85, 84, 81];
const totalFood = warehouse.reduce((acc, curr) => acc + curr);
console.log("Total food:", totalFood);
healthyPeople.push(98.6);

console.log("Updated healthy people:", healthyPeople); */


/* 
7
const celsiusTemperatures = [38, 40, 35, 37, 38, 37, 39, 33, 35];
const fixedTemperatures = celsiusTemperatures.map((temperature) => temperature + 2);
const fahrenheitTemperatures = fixedTemperatures.map((celsius) => (celsius * 9) / 5 + 32);
let healthyPeople = fahrenheitTemperatures.filter((temperature) => temperature < 104);

healthyPeople.push(98.6);
const newPeople = [35, 34, 38, 37, 39, 33, 35]
healthyPeople = healthyPeople.concat(
  newPeople.map((celsius) => (celsius * 9) / 5 + 32)
);

console.log("Updated healthy people:", healthyPeople); */





