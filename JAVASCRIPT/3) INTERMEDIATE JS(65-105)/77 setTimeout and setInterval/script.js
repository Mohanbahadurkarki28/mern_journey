/* const timer1 = setTimeout(`console.log("Hi-1")`,1000)
const timer2 = setTimeout(`console.log("Hi-2")`,2000)
const timer3 = setTimeout(`console.log("Hi-3")`,3000)
 */

setTimeout(() => {
    console.log("User inactivity detected!");
  }, -500);


  setInterval(() => {
    console.log("Updating data every 10 seconds...");
  }, 10000);
  
  