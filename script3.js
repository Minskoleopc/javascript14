// logical operator

//AND  &&
//True   True  ==> True
console.log(6 === 6 && 7 != 8)
//False  False ==> False
console.log(6 != 6 && 4 !== 4)
//True   False ==> False
console.log(6 >= 6 && 7 === '7')
//False  True  ==> False
console.log(5 == '6' && 5 === 5)

// true  true --- true
// false true --- false
// true  false --- false
// false false --- false

// OR ||

//True   True  ==> True
console.log( 5 == 5 || 5 != 6)
//False  False ==> False
console.log(6 != 6 || 7 < 6)
//True   False ==> True
console.log(8 === 8  || 7 != 7 )
//False  True  ==> True
console.log(4 !== 4 || true)

// NOT  !
console.log(!(7===7))
console.log(!(7!==7))

//True False 
//False True

console.log(!true)
console.log(!false)

console.log(!(7===7))
console.log(!(7!==7))


// conditional statement 

//numberOfTicket 1 - 5  ==> 5 % discount
//numberOfTicket 5 - 10 ==> 10 % discount
//numberOfTicket  > 10  ==> 20 % discount

// if(condition){
//     // statement one
//     // statement two
//     // statement three
// }
// else {
//     // statement four
//     // statement five
//     // statement six
// }

let numberT = 100

// if( numberT > 1 && numberT <= 5){
//     console.log('5 % discount')
// }
// if(numberT > 5 && numberT <= 10){
//     console.log('10 % discount')
// }
// if(numberT > 10){
//     console.log('20 % discount')
// }

if( numberT > 1 && numberT <= 5){
    console.log('5 % discount')
}
else if(numberT > 5 && numberT <= 10){
    console.log('10 % discount')
}
else if(numberT > 10){
    console.log('20 % discount')
}
else {
    console.log('incorrect input')
}

//marks > 90 ==> A
//marks > 75 ==> B
//marks > 65 ==> C

let marks = 67

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }

// if(marks > 90){
//     console.log('Grade A')
// }
// else if(marks > 75){
//     console.log('Grade B')
// }
// else if(marks > 65){
//     console.log('Grade C')
// }


