// functions


// numbers as a parameter to function and number as a return type
function add(x, y) {
    console.log(x + y)
    return x + y
}
let a = add(12, 13)
console.log(a)
console.log(typeof a)

// string as parameter and string as return type to function
function greet(word) {
    console.log("Hello " + word)
    return "Hello " + word
}
let b = greet('chinmay')
console.log(typeof b)
console.log(b)
// array as a parameter and array as a return type 
let ages = [33, 44, 11, 22, 33, 44, 55, 66, 77, 33]
function filterAbove50(arr) {
    let c = arr.filter(function (el) {
        return el > 50
    })
    return c
}
let c = filterAbove50(ages)
console.log(c)
console.log(typeof c)

// object as a parameter and object as return type
let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    skills: ["python", "java", "javascript"]
}
// city = "pune"

function addCity(obj) {
    obj['city'] = "pune"
    return obj
}
let d = addCity(info)
console.log(d)

// boolean as paramter to function and boolean as return type

let age = 18
let isMale = true

function CanDrive(genderM, age) {
    if (age >= 18 && genderM) {
        return true
    }
    else {
        return false
    }
}
let e = CanDrive(true, 16)
console.log(e)
console.log(typeof e)


let x = 10
console.log(x)

let addB = function(x,y){
    return x + y
}
console.log(addB)
let f = addB(12,14)
console.log(f)

// function as a parameter to another function 
let addition = function (x, y) {
    return x + y
}
function addA(a, b,fn) {
    // let a = 12
    // let b = 13
    // let fn = function(x,y){
    //     return x + y
    // }
    let s = fn(a,b) // 25
    return s
}
let z = addA(12, 13, addition)
console.log(z)