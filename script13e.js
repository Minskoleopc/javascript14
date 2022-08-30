// push() unshift() , pop() ,shift(),includes()
// filter() ,map(),reduce(),forEach(),find(),findIndex(),some(),every()

// slice()
//              0         1     2          3         4
let cities = ["nagpur","pune","mumbai","banglore","kolkata"]
//              -5      -4       -3        -2         -1

// ["pune","mumbai"]
//cities.slice(startIndex, endIndex(not included))

let q1 = cities.slice(2)
console.log(q1)
console.log(cities.slice(2,4))
console.log(cities.slice(1,3))
console.log(cities.slice(-5))
console.log(cities.slice(-5,-3))
console.log(cities.slice(-5,4))
console.log(cities.slice(1,-1))
console.log(cities.slice(-4,1))
console.log(cities.slice(-1,-5))
// reverse()

let cities3 = ["banglore","chennai","nagpur","wardha"]
let r = cities3.reverse()
console.log(r)

// findIndex()
//            0           1         2       3
cities3 = ["banglore","chennai","nagpur","wardha"]
let q3 = cities3.indexOf("wardha")
console.log(q3)
let q4 = cities3.indexOf("Wardha")
console.log(q4)

// flat()
//                  0         1          2   
//              0   1  2   0   1 2    0  1   2
let numbers = [[11,22,33],[44,55,66],[77,88,99]]
console.log(numbers[0][1]) // 22
console.log(numbers[1][0]) // 44
console.log(numbers[2][2]) // 99
let q5 = numbers.flat()
console.log(q5)

// join()
let info = ["chinmay","deshpande",7709192441]
let q6 = info.join(" ") // "chinmay deshpande 7709192441"
let q7 = info.join("-") // "chinmay-deshpande-7709192441"
let q8 = info.join("@") // chinmay@deshpande@7709192441
console.log(q6)
console.log(q7)
console.log(q8)

// concat()

let a = [11,22,33]
let b = [44,55,66]

let q9 = a.concat(b)
console.log(q9)
let q10 = b.concat(a)
console.log(q10)

// at()
//               0         1           2
let country = ["india","srilanka","pakistan"]
console.log(country.at(1))

// splice()
//           0          1         2        3
country = ["india","srilanka","pakistan","nepal"]

// country.pop()
// country.shift()
//country.splice(indexposition,numberOfElementToDeleted)

country.splice(1,1)
console.log(country)


//5august