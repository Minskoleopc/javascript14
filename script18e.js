
// number as a parameter and number as a return type

function add(x,y){
    return x + y 
}

let a = add(12,14)
console.log(a)
console.log(typeof a)

// string as a parameter and string as return type 

function Greet(name){
    console.log("Hello "+name)
    return "Hello "+ name
}
let b = Greet('chinmay')
console.log(b)
console.log(typeof b)

// array as parameter and array as return type 
let c  = [55,66,22,15,66,44,55,66,32,45,66,77,88,32]
function above50(arr){
    let d = arr.filter(function(el){
        return el > 50
    })
    return d
}
let d = above50(c)
console.log(d)
console.log(typeof d)

// object as parameter and object as return type 

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23
}
// city:pune

function addCity(obj){

    // let obj = {
    //     firstName:"chinmay",
    //     lastName:"deshpande",
    //     age:23
    // }

    obj['city'] = "pune"

    return obj


}
let e = addCity(info)
console.log(e)
console.log(typeof e)

// boolean as a parameter and boolean as return type

function canDrive(Mgender,age){
    if(Mgender && age >= 18){
        return true
    }
    else {
        return false
    }
}
let f = canDrive(true,1)
console.log(f)
// function as parameter

let x = 10
console.log(x)

let addA = function(x,y){
    return  x+ y
}

function addditonA(a,b,fn){

    //let a = 12 
    //let b  = 13
//   let fn = function(x,y){
//     return  x+ y
// }

    let g = fn(a,b)
    return g
}
let h = addditonA(12,13,addA)
console.log(h)

















// console.log(adda) // priting function definition
// adda(23,44) // calling the function

// let g = adda(12,12)
// console.log(g)







// function as return type 



