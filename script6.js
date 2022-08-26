

// // for(intilization ; conditionCheck ; increment/decremnt){
// // statement one 
// // statement two
// //}

// // 1 to 5

// for (let i = 1; i < 6; i++) { // 2 // 3 // 4 // 5 // 6
//     console.log(i) //1 , //2 // 3 // 4 // 5
// }

// for (let i = 1; i < 6; i++) {
//     console.log("hello")
// }

// // 5 to 1

// for (let i = 5; i >= 1; i--) { // 4 // 3 // 2 // 1 // 0
//     console.log(i) // 5 // 4 // 3 // 2 // 1
// }

// // table

// for (let i = 2; i <= 20; i = i + 2) { // 4 ----------20 --- 22
//     console.log(i) // 2 ,4 ,6,8,10,12,14,16,18,20
// }

// // break statement

// for(let i = 0 ; i < 5 ; i++){ //1 // 2
//     if(i == 2){
//         break;
//     }
//     console.log(i) // 0 , 1
// }

// for(let i = 0 ; i < 5 ; i++){ //1 // 2
//     console.log(i) // 0 ,1 ,2
//     if(i == 2){
//         break;
//     }
// }

// // continue statement with for
// for(let i = 0 ; i < 5; i++){ //1 // 2 //3 // 4 //5
//     if(i == 2){
//         continue
//     }
//     console.log(i) // 0 ,1 ,3 ,4

// }

// intilialization

// while(condition){
//     // statement
//     // increment/decrement
// }

// 1 to 5

let t1 = 1
while(t1 <= 5){
    console.log(t1) //1 // 2 // 3 // 4 // 5
    t1 ++ // 2  // 3 // 4 // 5 // 6
}

let t2 = 1 
while(t2 <= 5){
    console.log('hello')
    t2 ++
}

//5 to 1

let t3 = 5
while(t3 >= 1){
    console.log(t3)
    t3 --
}

// table of 2

let t4 = 2
while(t4 <= 20){
    console.log(t4)
    t4 = t4 + 2
}


// break with while loop

let t5 = 10

while(t5 >= 1){
    if(t5 == 5){
        break
    }
    console.log(t5) // 10 , 9 , 8 ,7  6
    t5 -- // 9 // 8 // 7 // 6 // 5
}

let t6 = 10
while(t6 >= 1){
    console.log(t6)
    if(t6 == 5){
        break
    }
    t6 -- 
}

// while loop with continue

let t7  = 0
while(t7 < 5){
    if(t7 == 2){
        t7 ++ // 3
        continue
    }
    console.log(t7) // 0 ,1 ,3 , 4
    t7 ++ // 1 // 2 // 4 // 5
}











