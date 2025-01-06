
/* if (dayNumber === 0) {
  console.log('It is Sunday Today')
} else if (dayNumber === 1) {
  console.log('It is Monday Today')
} else if (dayNumber === 2) {
  console.log('It is Tuesday Today')
} else if (dayNumber === 3) {
  console.log('It is Wednesday Today')
} else if (dayNumber === 4) {
  console.log('It is Thursday Today')
} else if (dayNumber === 5) {
  console.log('It is Friday Today')
} else if (dayNumber === 6) {
  console.log('It is Saturday Today')
} else {
  console.log('Please Enter a Valid Day Number')
}
 */
const dayNumber = parseInt(prompt('Enter a Number between 1-7'))

switch (dayNumber){
   case 1:
    console.log('Today is sunday')
    break
    case 2:
      console.log('Today is Monday')
      break
      case 3:
        console.log('Today is Tuesday')
        break
        case 4:
          console.log('Today is Wednesday')
          break
          case 5:
            console.log('Today is Thursday')
            break
            case 6:
              console.log('Today is Friday')
              break
              case 7:
                console.log('Today is Saturday')
                break

                default:
                  console.log('Please Enter a valid number')
}
console.log('Program Ended')
