// Array 
//            0           1       2       3
let names = ["chinmay","poorva","ram","shakti"]

// retrive 
console.log(names[0])

// update 
names[0] = "tanmay"
console.log(names)

// print every element of array

for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

console.log(names[names.length-1])

names = ["chinmay","poorva","ram","shakti"]

// Object -- property and method
// method  - action and return 

let x1 = names.push("amol")
console.log(x1)
console.log(names)

let x2 = names.unshift("abhay")
console.log(x2)
console.log(names)

let x3 = names.pop()
console.log(x3)
console.log(names)

let x4 = names.shift()
console.log(x4)
console.log(names)

let x5 = names.includes("chinmay")
console.log(x5)

let x6 = names.indexOf("chinmay")
console.log(x6)

let x7 = names.indexOf("chinma")
console.log(x7)

let x8 = names.reverse()
console.log(x8)

let x9 = names.sort()
console.log(x9)

// map() , filter(),reduce(),forEach(),find() ,findIndex(),some(),every()

let numbers = [11,22,33,44,55]
let x10 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(x10)

let x11 = numbers.filter(function(el,index,arr){
    return el > 30
})
console.log(x11)

let x12 = numbers.reduce(function(acc,el,index,arr){
    return el + acc
},0)
console.log(x12)

numbers.forEach(function(el){
    console.log(el*2)
})


let x13 = numbers.find(function(el){
    return el > 20
})
console.log(x13)

let x14 = numbers.findIndex(function(el){
    return el > 20
})
console.log(x14)

let x15 = numbers.every(function(el){
    return el  > 10
})
console.log(x15)
let x16 = numbers.some(function(el){
    return el  > 1000
})
console.log(x16)

// slice, splice(),join(),concat().flat(),at(),fill()

//             0        1        2        3
let fruits = ["apple","mango","grapes","chikoo"]
//              -4       -3     -2         -1

// console.log(fruits.slice(2))
// console.log(fruits.slice(1,4))
// console.log(fruits.slice(-4))
// console.log(fruits.slice(-4,-1))
// console.log(fruits.slice(0,-1))
// console.log(fruits.slice(-4,2))
// console.log(fruits.slice(-1,-4))

// splice()

// fruits.splice(1,2)
// console.log(fruits)

fruits.splice(1,2,"papaya",'cherry')
console.log(fruits)


let numbersA = [[11,22,33],[44,55,66],[77,88,99]]
let x17 = numbersA.flat()
console.log(x17)


fruits = ["apple","mango","grapes","chikoo"]
let x18 = fruits.at(2)
console.log(x18)


let x19 = fruits.join('-')
console.log(x19)


let a = [22,33,44]
let b = [44,55,66]


let x20 = a.concat(b)
let x21 = b.concat(a)

fruits = ["apple","mango","grapes","chikoo"]
let x22 = fruits.fill('not available',1)
console.log(x22)







