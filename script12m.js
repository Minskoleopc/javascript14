// push() unshift() , pop() ,shift(),includes()
// filter() ,map(),reduce(),forEach(),find(),findIndex(),some(),every()

// slice()

//             0         1       2           3       4          5
let cities = ["pune","nagpur","banglore","kolkata","wardha","chennai"]
//              -6      -5       -4          -3       -2       -1
//cities.slice(startIndex,EndIndex(not inclusive))

let q1 = cities.slice(2)
console.log(q1)
console.log(cities.slice(1,4))
console.log(cities.slice(0,5))
console.log(cities.slice(3))
console.log(cities.slice(-5))
console.log(cities.slice(-5,-2))
console.log(cities.slice(0,-2))
console.log(cities.slice(-5,5))
console.log(cities.slice(-5,-5))
console.log(cities.slice(-3,-6))

// reverse()

let lang = ["hind","marathi","english"]
console.log(lang.reverse())

// findIndex()
//        0        1         2
lang = ["hind","marathi","english"]
let q2 = lang.indexOf("marathi")
let q3 = lang.indexOf("tamil")
console.log(q2)
console.log(q3)

// flat()
//                 0          1          2
//              0   1  2   0  1  2    0  1  2
let numbers = [[11,22,33],[44,55,66],[77,88,99]]
console.log(numbers[2][2]) // 99
console.log(numbers[1][2]) // 66
console.log(numbers[0][1]) // 22
let q4 = numbers.flat()
console.log(q4)
// join()

let info = ["chinmay" ,"deshpande",7709192441]
console.log(info.join(" ")) // "chinmay deshpande 7709192441"
console.log(info.join("-")) // chinmay-deshpande-7709192441
console.log(info.join("@")) // chinmay@deshpande@7709192441

// concat()

let cities1 = ["pune","banglore","delhi"]
let cities2 = ["wardha","nagpur"]
console.log(cities1.concat(cities2))
console.log(cities2.concat(cities1))

// at()

//              0         1            2          3
let country = ["india","pakistan","bangladesh","srilanka"]
let q7 = country.at(3)
console.log(q7)

// splice()
country = ["india","pakistan","bangladesh","srilanka"]
// country.shift()
// country.pop()

// firstway
//country.splice(indexNumber,NoOfElementtoBeDeleted)
country.splice(1,1)
console.log(country)


// fill()


// sort()


