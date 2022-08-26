
// Logical operator 

// AND 

// True  True  --->   True
// False True  --->   False
// True  False --->   False
// False False --->   False

// OR

// True  True  --->   True
// False True  --->   True
// True  False --->   True
// False False --->   False

// NOT 

//True -- False
//False -- True 

// conditional (when to use)
// input ---- multiple (conditional statement)


// marks 

// marks > 90 -- Grade A
// marks > 75 -- Grade B 
// marks > 65 -- Grade C
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

// Program to find larget out of two numbers

let a1 = 1000
let b1 = 500

// if(a1 > b1){
//     console.log('a1 is greater')
// }
// else {
//     console.log("b1 is greater")
// }

// ternary operator
// program1
a1 > b1 ? console.log('a1 is greater') : console.log('b1 is greater')

// program2
let age = 19
let r1 = age >= 20 ? "can drive" : "cannot driver"
console.log(r1)

// program 3
let city = "indore"
// switch(city){
//     case "pune":
//         console.log("MH")
//     case "bhopal":
//         console.log("MP")
//     case "jaipur":
//         console.log("RJ")
//     default:
//         console.log('incorrect city')
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
//         console.log('incorrect city')
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
//         console.log('incorrect city')
// }







