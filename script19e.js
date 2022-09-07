// function as a parameter to another function 
// program 1
let add = function(x,y){
     return x + y
}


function addition(a,b,fn){
    // let a = 12
    // let b = 13
    // let fn = function(x,y){
    //     return x + y  // 12 + 13
    //} 

    let a1 = fn(a,b) // 25
    return a1 
}
let aa = addition(12,13,add)
console.log(aa)

// function ad a return type from another function 


// function greet(){
//     return function(){
//         console.log('hello')
//     }
// }
// let r = greet()
// // let r = function(){
// //     console.log('hello')
// // }

// r()


// let x  = 100
// console.log(x)
// x = 400
// console.log(x)

// program 2

let a = 10
let b = a

console.log(a)
console.log(b)

b= 400
console.log(a) //  10
console.log(b) // 400

// program 3

//             0        1       2     3
let names = ["amol","chinmay","ram","sham"]

let names2 = names
names[1] = "mayur"
names2[0] = "mayuri"

console.log(names) // mayuri , mayur , ram , sham
console.log(names2) // mayuri , mayur ,ram ,sham


// program 4

let info = {
    firstName:"mayur",
    lastName:"nagrare"
}

let info2  = info
info.firstName = "ajay"
console.log(info)
console.log(info2)








//let a = add(1,2) // function call 
// //console.log(a)
// let x = 10
// console.log(x)
// console.log(add)

