

// // if(condition){
// //     // stament
// // }else {
// //     // statement 
// // }

// // truthy value --  true , 8 == 8 , 7 >=6 , 1 , -1 , 'chinmay'
// // falsy value 

// if(1){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if(true){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if('chinmay'){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if(-45){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if(-45 < -44){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if('a'){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if(' '){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// let a ;
// console.log(a) // undefined
// console.log(undefined + undefined)
// console.log(null)
// console.log(0)
// console.log('')
// console.log(7 === '7')


// if(a){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }



// if(null){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// if(undefined){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// if(NaN){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// if(0){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }
// if(7 === '7'){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// if(false){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }


// if([]){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if({}){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

//  why functions 

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 100
let t = 50

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)


//  function 


function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)

}
Calculator(10,5)
Calculator(22,11)
Calculator(220,160)

// basic type of function 



// function without  parameter and  without return type

function addA(){
    console.log(9+9)
}

addA()
addA()
addA()
addA()
addA()

// function with parameter and without return type

function addB(x,y){
    console.log(x+y)
}
addB(12,13)
addB(120,130)

// function with parameter and with return type

function addC(x,y){
    return x + y
}
let q1 = addC(12,10)
console.log(q1)
console.log(q1 + q1)
console.log(q1 - 5)
console.log(q1 * 0.5)

// different ways of writing the function 


// function declaration 
function sub(x,y){
    return x - y
}
let q2 = sub(12,6)
console.log(q2)


// // function expression 

// let subB = function(x,y){
//     return x - y
// }
// let q3 = subB(18,9)
// console.log(q3)


// // arrow function 

// let subC = (x,y)=>{
//     return x - y
// }
// let q4 = subC(18,9)
// console.log(q4)


let mul = function(x,y){
    return x * y
}
let q55 = mul(12,1)
console.log(q55)

function mulB (x,y){
    return x * y
}
let q66 = mulB(12,1)
console.log(q66)


let mulC = (x,y)=>{
    return x * y
}
let q77 = mulC(12,1)
console.log(q77)







// different datatypes