/* let n = 13
console.log(n%2 ==0? 'Even' : 'Odd') */

/* let color = 'pink'
switch(color){
    case 'red':
        console.log('Apple')
        break

        case 'Yellow':
            console.log('Banana')
            break

            case 'green':
        console.log('Grapes')
        break

        case 'pink':
        console.log('Litchi')
        break


        default:
            console.log('No fruits found')

} */

     //DO while loops
     
    //  let n = 1
     /* do{
        console.log(n)
        n++
     } while (n<= 10) */

     // EK choti halera ani balla condition check garxa



     //While loop
    /*  let n = 1
     while(n<=10){
        console.log(n)
        n++
     } */
//Yesle chai suruma chchek garera matrai run garxa
        



//for while loop
/* for(let n= 1; n>=10; n++){
    console.log(n)
} */




//TASK
//10 ota prime number show garne task using loop and condition
/*     let count = 0; 
    let num = 2; 
    
    while (count < 10) {
      let isPrime = true;
    for (let i = 2; i * i <= num; i++) { 
        if (num % i === 0) {
          isPrime = false; 
          break;
        }
      }
    if (isPrime) {
        console.log(num); 
        count++; 
      }
      num++;
    } */



//ARRAY 
let colors = ["red", "orange", "blue", "green", "yellow"]

/* for(let i=0; i<colors.length; i++){
    console.log(i, colors[i])
} */

    //for in loops
    //yesle chai index maa loops lagauxa 

/*  for(let i in colors){
        console.log(i, colors[i])
    } */

    //for off loops
    //yesle chai data maa loops lagauxa
    
/* for(let v of colors){
        console.log(v)
    } */

//colors.map le chai list garxa sabai
 /* let newArr = colors.map((clr, i) => `color at ${i} is ${clr}`)
 console.log(colors)
 console.log(newArr) */

 //colors.filter le chai filter out  garna milxa 
 let newArr = colors.filter(clr =>clr.includes('n')) 
 console.log(colors)
 console.log(newArr)