let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:33,
        skills:["javascript","python","html","css3"],
        city:"pune"
    },
    {
        firstName:"poora",
        lastName:"vyas",
        age:28,
        skills:["javascript","python","html","css3"],
        city:"indore"
    },
    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        skills:["sql","oracle","python"],
        city:"nagpur"
    }, 
    {
        firstName:"sarika",
        lastName:"pansare",
        age:24,
        skills:["javascript","cypress","python"],
        city:"pune"
    }, 
    {
        firstName:"amit",
        lastName:"bhure",
        age:29,
        skills:["javascript","python","digital"],
        city:"ujjain"
    }
]

// forEach

// students.forEach(function(el){
//     //console.log(el.firstName)
//     console.log(el['firstName'])
// })

// institude - Minskole

students.forEach(function(el){
    el.institute = "minskole"
})
console.log(students)

// people with pune city (forEach , forloop , filter)

students.forEach(function(el){
    //console.log(el.city)
    if(el.city === "pune"){
        console.log(el.firstName)
    }
})

// [obj1,obj1,obj2,obj3,obj3]
// [obj2,obj3]

// filter 
let puneCity = students.filter(function(el){
    return el.city == "pune"
})
//console.log(puneCity)

puneCity.forEach(function(el){
    console.log(el.firstName)
})

// program 3 
// average age of all students 
let averageAge = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(averageAge/students.length)

// program 4 // forEach and filter
// user with skills js 
students.forEach(function(el){
    if(el.skills.includes('javascript')){
        console.log(el.firstName)
    }
})



//let a = [11,22,33]
// let q1 = a.reduce(function(acc,el,index,arr){
//     return acc + el  // acc ===> 33
// },0)
// console.log(q1)
//       0   1  2
// let a = [11,22,33] // 66
// let sum = 0

// for(let i = 0 ; i < a.length ; i++){
//     //console.log(i)
//     //console.log(a[i])

//     sum = sum + a[i]
//     //     0  +  11  =====> 11
//     //     11  +  22  ====> 33
//     //     33  +  33  ====> 66
// }

// console.log(sum)


