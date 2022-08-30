// map() , filter() ,reduce(),forEach(),find(),findIndex(),some(),every()

// map() -- array
let birthYear = [1989,1990,1991,1992]
// [33,32,31,30]

let q1 = birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2022 - el
})
console.log(q1)

let h = [33,44,55,66,77,88]
// [35,46,57,78,80]

let q2 = h.map(function(el,index,arr){
    return el + 2
})
console.log(q2)

let numbers = [44,55,66,77,22,34,55]
//[55,66,77,55]

let q3 = numbers.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

let marks = [11,22,33]

let q4 = marks.reduce(function(acc,el,index,arr){
    return acc + el // 11
},0)
console.log(q4)


// forEach 
let names = ["amol","mayuri","sarika","chetan"]
names.forEach(function(el,index,arr){
    console.log('welcome '+ el)
})

// map() // array
// filter() // array
// reduce() // single value
// forEach() // nothing



// find() , findIndex(),  some(),every()


let h1 = [3,44,55,22,33,45,66]
let q6 = h1.filter(function(el,index,arr){
    return el > 50
})
console.log(q6)


let q7 = h1.find(function(el,index,arr){
    return el > 50
})
console.log(q7)

let q8 = h1.findIndex(function(el,index,arr){
    return el > 50
})
console.log(q8)

let q9 = h1.every(function(el){
    return el > 20
})
console.log(q9)


let q10 = h1.some(function(el){
    return el > 200
})
console.log(q10)











