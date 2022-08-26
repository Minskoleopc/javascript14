

// comparision


// < , > ,<= , >= ,!= ,== ,=== ,!==

console.log(2 < 8) // true
console.log(200 > 8) // true
console.log(2 <= 8) // true
console.log(278 >= 278) // true
console.log(2 == 8) // false
console.log(24 != 8) // true
console.log(2 == '2') // true (only value) 
console.log(2 != '2') // false
console.log(2 === 2) // true (value and type)
console.log(2 === '2') // false
console.log(2 !== 2) // false
console.log(8 === 8) // true


// logical operator


// AND && 

//True && True ===>   True
console.log(8 === 8 && 7 > 6)
//False && True ===>  False
console.log(4 != 4 && 5 == 5)
// True && False ===> False
console.log(5 == '5' && 7 < 5)
//False && False ===> False
console.log( 5 == 4 && 6 != 6)

// OR ||

// True ||True ===>   True
console.log(7 == 7 || 8 == 8)
// False || True ===> True
console.log(7 === '7' || 8 == 8)
// True || False ===> True
console.log( 8 === 8 || 7 != 7)
// False || False ===>False
console.log(4 != 4 || 5 === '5')

// NOT !
// True --- False
// False -- True

console.log(!(8 === 8))
console.log(!(8 !== 8))

// AND

// True True -> True
// True False -> False
// False True -> False
// False False -> False

// OR

// True True -> True
// True False -> True
// False True -> True
// False False -> False

// NOT 
// True  -- False
// False -- True

// conditional statement

//numberOfT > 0 &&  numberOfT <=5  ====> 5 %
//numberOfT > 5 &&  numberOfT <=10 ====> 10 %
//numberOfT > 10  // 20 %

// if(condition){

// }
// else {

// }

//let numberT = -44

// if( numberT > 0 && numberT <= 5){
//     console.log("5% discount")
// }
// if( numberT > 5 && numberT <= 10){
//     console.log("10% discount")
// }
// if( numberT > 10){
//     console.log("20% discount")
// }

// if( numberT > 0 && numberT <= 5){
//     console.log("5% discount")
// }
// else if( numberT > 5 && numberT <= 10){
//     console.log("10% discount")
// }
// else if( numberT > 10){
//     console.log("20% discount")
// }
// else {
//     console.log('incorrect input')
// }











