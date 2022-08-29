

// // program 1

// let birthYear = [1989,1990,1991,1992]
// let ages = []
// // [33,32,31,30]
// // 2000 ---- 2022-2000 ===> 22
// //console.log(birthYear[0])

// for(let i = 0 ; i < birthYear.length ; i++){
//     //console.log(2022 - birthYear[i])
//     //console.log(i)
//     let ag = 2022 - birthYear[i]
//     ages.push(ag)
// }
// console.log(ages)


// // map()
// birthYear = [1989,1990,1991,1992]
// let q1 = birthYear.map(function(el,index,arr){
//     //console.log(el,index,arr)
//     return 2022 - el
// })
// console.log(q1)

// let age2 = [11,22,33,44,55]
// // [13,24,35,46,57]
// let q2 = age2.map(function(el,index,arr){
//     return el + 2
// })
// console.log(q2)

// // program2 

// let a = [22,33,44,55,22,66,77,89]
// let above60 = []

// for(let i = 0 ; i < a.length ; i++){
//     //console.log(i)
//     //console.log(a[i])
//     if(a[i] > 60){
//         above60.push(a[i])
//     }
// }

// console.log(above60)

// // filter()

// a = [22,33,44,55,22,66,77,89]
// let q3 = a.filter(function(el,index,arr){
//     return el > 60
// })
// console.log(q3)

// // program 3 

// let marks = [11,22,33] // 66
// let sum = 0 
// for(let i = 0 ; i < marks.length ; i++){
//     // console.log(i)
//     // console.log(marks[i])
//     sum = sum + marks[i]
//     //    0   +    11   =====> 11
//     //    11  +    22  ======> 33
//     //    33  +     33  ======> 66
// }
// console.log(sum)

// marks = [11,22,33]

// let q4 = marks.reduce(function(acc,el,index,arr){
//     return acc + el // 33
// },5)
// console.log(q4)


// map() , filter()  , reduce() , forEach()  , some()  every() , find() , findIndex()

//map()
let birthYear = [1989,1990,1991,1992]

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2022 - el
})
console.log(q1)


let numbers = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let q2 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q2)

let marks = [55,44,67,88,99,11,22,33,83]
// [67,88,99,83]
let q3 = marks.filter(function(el,index,arr){
    return el > 60
})
console.log(q3)

// program 3

let nms = [22,33,45] // 100
let q4 = nms.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q4)

// program 4

let names = ["poorva","ram","sarika","sachin"]
names.forEach(function(el,index,arr){
    console.log("welcome "+el)
})

// program 5

let  number2 = [55,66,7,22,33,44,55,11,22,34,55]
let q5 = number2.filter(function(el,index,arr){
    return el > 30
})
console.log(q5)

let q6 = number2.find(function(el,index,arr){
    return el > 30
})
console.log(q6)

let q7 = number2.findIndex(function(el,index,arr){
    return el > 60
})
console.log(q7)

// map(),filer(),forEach(),reduce(),find(),findIndex()

let r1 = [1,22,33,44,11,22,33,44,500]
let q8 = r1.every(function(el,index,arr){
    return el > 10
})
console.log(q8)

let q9 = r1.some(function(el){
    return el > 50
})
console.log(q9)



