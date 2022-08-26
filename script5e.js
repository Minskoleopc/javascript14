console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// Loops

// for while do while


// for(intialization , conditionCheck; increment/decrement){
    // statements
    // statements 
// }

// print the value from o to 4

for(let i = 0 ; i < 5 ; i++){ // 1 ,2 , 3 , 4 , 5
    console.log(i) // 0 ,1 , 2 , 3, 4
}

// print the value from 0 to 2

for(let i = 0 ; i < 3 ; i++){ //1 // 2 // 3
    console.log(i) // 0 , 1 , 2
}

// print 'hello' three tyms

for(let i = 0 ; i < 3 ; i++){
    console.log("hello")
}
// table of 2
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 ------- 22
    console.log(i) //2,4,6,8,10,12,14,16,18,20
}

// print in reverse 5 to 1
for(let i = 5 ; i >=1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 , 4 , 3 , 2 , 1
}

// break statement with for loop
for(let i = 0 ; i < 5 ; i++){ //1 // 2
    if(i == 2){
        break;
    }
    console.log(i) // 0 , 1
}

for(let i = 0 ; i < 5 ; i++){  //1 //2
    console.log(i)  // 0 ,1 , 2
    if(i == 2){
        break;
    }
}