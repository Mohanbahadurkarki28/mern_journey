/* 
You are developing a web application that requires a function to calculate the area of various geometric shapes. Implement a JavaScript function named calculateArea that takes two parameters: shape and dimensions. The shape parameter will be a string specifying the type of shape (e.g., "rectangle", "circle", "right-triangle"), and the dimensions parameter will be an array containing the necessary dimensions for calculating the area of the specified shape.

Your task is to implement the calculateArea function in such a way that it can calculate the area for different shapes based on the input provided.

calculateArea("rectangle", [5, 10]); // should return 50

calculateArea("circle", [7]); // should return approximately 153.94 (rounded to two decimal places)

calculateArea("right-triangle", [3, 4]); // should return 6

Ensure that your function handles cases where incorrect or insufficient parameters are provided. If the shape parameter is not recognized or the required dimensions are not provided for a particular shape, the function should return an appropriate error message.

Write the calculateArea function in JavaScript. */



/* function calculateArea(shape, dimensions) {
    if (!Array.isArray(dimensions)) {
        return "Invalid input. Dimensions must be an array.";
    }

    if (shape === "rectangle" && dimensions.length === 2) {
        return dimensions[0] * dimensions[1];
    }

    if (shape === "circle" && dimensions.length === 1) {
        return parseFloat((Math.PI * dimensions[0] ** 2).toFixed(2));
    }

    if (shape === "right-triangle" && dimensions.length === 2) {
        return (dimensions[0] * dimensions[1]) / 2;
    }

    return "Error: Invalid shape or incorrect dimensions.";
}


console.log(calculateArea("rectangle", [5, 10]));
console.log(calculateArea("circle", [7]));        
console.log(calculateArea("right-triangle", [3, 4])); 
console.log(calculateArea("square", [4]));      
console.log(calculateArea("rectangle", [5]));   
console.log(calculateArea("circle", []));         */









//2)

/* You are developing a simple banking application and need to implement a function to calculate the interest earned on a savings account balance. Implement a JavaScript function named calculateInterest that takes two parameters: balance and rate. The balance parameter represents the current balance in the savings account, and the rate parameter represents the annual interest rate (in decimal form).

Your task is to implement the calculateInterest function to calculate the interest earned on the balance based on the provided interest rate.

calculateInterest(1000, 0.05); // should return 50

calculateInterest(5000, 0.03); // should return 150

Write the calculateInterest function in JavaScript. */

/* function calculateInterest(balance, rate) {
    if (typeof balance !== "number" || typeof rate !== "number" || balance <= 0 || rate <= 0) {
        return "Error: Please provide valid positive numbers for balance and rate.";
    }
    return balance * rate;
}


console.log(calculateInterest(1000, 0.05)); 
console.log(calculateInterest(5000, 0.03)); 
console.log(calculateInterest(-1000, 0.05));
console.log(calculateInterest(1000, -0.05)); 
 */


//3

/* You are developing a simple calorie tracking application and need to implement a function to calculate the total calories burned during a workout session. Implement a JavaScript function named calculateCaloriesBurned that takes an array parameter activities, where each element represents the calories burned for a specific activity.

Your task is to implement the calculateCaloriesBurned function to calculate the total calories burned during the workout session based on the provided activities.

calculateCaloriesBurned([100, 150, 200]); // should return 450

calculateCaloriesBurned([50, 75, 100, 150]); // should return 375

Write the calculateCaloriesBurned function in JavaScript */


function calculateCaloriesBurned(activities) {
    if (!Array.isArray(activities) || activities.length === 0 || activities.some(calorie => typeof calorie !== 'number' || calorie <= 0)) {
        return "Error: Please provide a valid array of positive numbers for calories burned.";
    }
    
    return activities.reduce((total, calorie) => total + calorie, 0);
}


console.log(calculateCaloriesBurned([100, 150, 200]));
console.log(calculateCaloriesBurned([50, 75, 100, 150])); 
console.log(calculateCaloriesBurned([0, 150, 200])); 
console.log(calculateCaloriesBurned("invalid input")); 
