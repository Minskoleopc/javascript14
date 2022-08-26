// Array , String , Map , Set , UserdefineddataType , DOM
//              0       1         2
let fruits = ["apple","mango","banana"]
// retrive 
console.log(fruits[0]) // apple
console.log(fruits[2])

// update 

fruits[0] = "chikoo"
console.log(fruits)

// for loop
//                  0        1          2
let vegetables = ["tomato","potato","brinjal"]
console.log(vegetables[0])

for(let i = 0 ; i < 3 ; i++){ //1 //2 // 3
   //console.log(i)
   console.log(vegetables[i])
}

// Object -- property and method
// Array --- object , property and method

// Human ----- amol
// property - age , weight , height , color
// method - walk() , talk(),run()

// Vehicle - audi 
// property - color , modelNo , type 
// method - start() , stop()

// Bank - Icici
// property - accNo , accName, bal
// method - deposit() , withdrawl()

// Method -- action , excercise
// return muscles

let cities = ["pune","nagpur","nashik"]
let q1 = cities.length
console.log(q1)

// method

// push()
// action add the element at the last 
// returns new length of array

let q2 = cities.push("wardha")
console.log(q2)
console.log(cities)

// unshift()
// action adds the element at first 
// return new length of array 

let q3 = cities.unshift('bhopal')
console.log(q3)
console.log(cities)

// pop()
// action - removes the last element from array 
// return the last element (returns the same element)

let countries = ["india","srilanka","pakistan","bangladesh"]
let q4 = countries.pop()
console.log(countries)
console.log(q4)

// shift()
// action - remove the first element from the array 
// returns the first element
let q5 = countries.shift()
console.log(q5)
console.log(countries)

// includes 
// action - search for the element in array 
// return if found -- true else return false

let numbers = [11,222,333,4444,55555]
let q6 = numbers.includes(4444)
console.log(q6)



// property - length 
// method 

// push()
// unshift()
// pop()
// shift()
// includes