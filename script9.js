// do {
//     console.log('hello')
// } while (2 !== 2)


// while (2 !== 2) {
//     console.log("hello")
// }

// Truthy - 1 ,-1 , "chinmay", "a" , 5 === 5, true,{} ,[]
// 0 undefined ,NaN , null , '',false , 8 !== 8

if(1){
    console.log('hello')
}
else {
    console.log('Bye')
}

if(-1){
    console.log('hello')
}
else {
    console.log('Bye')
}

if("chinmay"){
    console.log('hello')
}
else {
    console.log('Bye')
}
if("C"){
    console.log('hello')
}
else {
    console.log('Bye')
}

if("@"){
    console.log('hello')
}
else {
    console.log('Bye')
}

if(" "){
    console.log('hello')
}
else {
    console.log('Bye')
}

if(8 === 8){
    console.log('hello')
}
else {
    console.log('Bye')
}

if(true){
    console.log('hello')
}
else {
    console.log('Bye')
}

let b ;
console.log(b)
console.log(undefined + undefined)
console.log(null)

if(0){
    console.log("hello")
}
else {
    console.log("bye")
}


if(null){
    console.log("hello")
}
else {
    console.log("bye")
}

if(undefined){
    console.log("hello")
}
else {
    console.log("bye")
}

if(6 !== 6){
    console.log("hello")
}
else {
    console.log("bye")
}

if(false){
    console.log("hello")
}
else {
    console.log("bye")
}

// functions 

let a1 = 10
let b1 = 5

console.log(a1+b1)
console.log(a1-b1)
console.log(a1*b1)
console.log(a1/b1)
console.log(a1%b1)

let a2 = 90
let b2 = 45

console.log(a2+b2)
console.log(a2-b2)
console.log(a2*b2)
console.log(a2/b2)
console.log(a2%b2)


function Calculator(x,y){

    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)

}
Calculator(12,3)
Calculator(120,30)


// Functions 
function add(){
    console.log(7+7)
}
add()
add()
add()
add()

function addB(x,y){
    console.log(x+y)
}
addB(12,6)
addB(120,60)
addB(1200,600)

function addC(x,y){
    return x + y
}

let r1 = addC(1,2)
console.log(r1)
console.log(r1 + r1)
console.log(r1*0.10)

// Differents ways to write function in javascript

// function declaration
function Sub(x,y){
    return x - y
}
let q2 = Sub(12,6)
console.log(q2)


// function expression

let SubA = function(x,y){
    return x - y
}
let q3 = SubA(12,6)
console.log(q3)

// Arrow function 

let SubC = (x,y)=>{
    return x - y
}
let q4 = SubC(12,6)
console.log(q4)



