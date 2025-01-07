/* console.log('Program Started')
let num =0
while(num<=100){
  console.log(num)
  num++
}
console.log('Program Ended') */

const friends = ["Mohan", "Biraj", "Dipak", "Saurab", "Nitish"];
/* let i = 0
while(i<=4){
    console.log(friends[i])
    i++
} */



    //using friends.length
/* let i = 0;
while (i < friends.length) {
  console.log(friends[i]);
  i++;
} */


  //using template literal to print name in number system like 1. Mohan 2. Biraj
  let i = 0;
while (i < friends.length) {
  console.log(`${i+1}.${friends[i]}`);
  friends[i] = friends[i]+ ' Karki'
  i++;
}
console.log(friends)
