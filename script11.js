
// program 1

let birthYear = [1989,1990,1991,1992]
let age = [] // [33,32,31,30]
// [33,32,31,30]

for(let i = 0 ; i < 4; i++){ // 1 //2 // 3 // 4
    //console.log(i) // 0 , 1 , 2 , 3
   // console.log(2022- birthYear[i])
   let ag = 2022- birthYear[i]
   age.push(ag)
}
console.log(age)


// program 2
//           0   1  2  3  4  5  6  7
let ages2 = [33,44,55,66,23,88,99,55]
let aboveEq60 = [] // [66,88,99]
// [66,88,99]

for(let i = 0 ; i < ages2.length; i++){
    //console.log(i)
    if(ages2[i] >= 60){
        aboveEq60.push(ages2[i]) 
    }
}
console.log(aboveEq60)

// Program 3
let r = [11,22,33]  // 66
let total = 0

for(let i = 0 ; i < r.length ; i++){
    //console.log(i)
    //console.log(r[i])
    total = total + r[i]
    //       0   +   11    // 11
    //       11  +   22    // 33
    //       33  +   33    // 66 
}
console.log(total)

// program 4

let names = ["chinmay","poorva","ram"]

for(let i = 0 ; i < names.length ; i++){
    console.log("welcome "+names[i])
}

// Who moved my cheese? 
// 8 am
// process --- axa ---
// cloud , machine / AI , rpa 
// 4 mouse  =====> cheese
// 2 (food)  -   2(food)  ==> cheese
// cheese    -  















