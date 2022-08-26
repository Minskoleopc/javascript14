// numberOfTicket > 0 && numberofTicker <= 5   ==> 5 % discount
// numberOfTicket > 5 && numberofTicker <= 10  ==> 10 % discount
// numberOfticket > 10 ==> 20 % discount

let numberOfTicket = 5
// if(numberOfTicket > 0 && numberOfTicket <= 5){
//     console.log('5 % disocunt')
// }
// if(numberOfTicket > 5 && numberOfTicket <= 10){
//     console.log('10 % disocunt')
// }
// if(numberOfTicket > 10){
//     console.log('20 % disocunt')
// }


// if(numberOfTicket > 0 && numberOfTicket <= 5){
//     console.log('5 % disocunt')
// }
// else if(numberOfTicket > 5 && numberOfTicket <= 10){
//     console.log('10 % disocunt')
// }
// else if(numberOfTicket > 10){
//     console.log('20 % disocunt')
// }
// else {
//     console.log("Incorrect input")
// }

// marks > 90 ==> 'Grade A'
// marks > 75 ==> 'Grade B'
// marks > 65 ==> 'Grade C'

let marks = 66
// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }


if (marks > 90) {
    console.log('Grade A')
}
else if (marks > 75) {
    console.log('Grade B')
}
else if (marks > 65) {
    console.log('Grade C')
}


// Largest of two element

let a = 100
let b = 50

// if(a > b){
//     console.log('a is bigger')
// }
// else {
//     console.log('b is bigger')
// }

// Ternary operator

a > b ? console.log('a is bigger') : console.log('b is bigger')
let age = 2
let q1 = age > 18 ? "can drive" : "cannot drive"
console.log(q1)

// Switch case (without break statement)

let city = "nagpur"

// switch(city){
//     case "pune":
//         console.log("MH")
//     case "bhopal":
//         console.log("MP")
//     case "jaipur":
//         console.log("RJ")
//     default:
//         console.log('incorrect city name')
// }

// switch (city) {
//     case "pune":
//         console.log("MH")
//         break
//     case "bhopal":
//         console.log("MP")
//         break
//     case "jaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log('incorrect city name')
// }

// switch (city) {
//     case "pune":
//     case "nagpur":
//         console.log("MH")
//         break
//     case "bhopal":
//     case "indore":
//         console.log("MP")
//         break
//     case "jaipur":
//     case "udaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log('incorrect city name')
// }




