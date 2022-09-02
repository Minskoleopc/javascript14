
//           firstName lastName   rn age
let info = ["chinmay","deshpande",12,45]

// retrive
console.log(info[0])

// update 
info[0] = "sam"
console.log(info)

// add 
info.push('hindi')
info.unshift('Mr')
console.log(info)

// delete

info.pop()
info.shift()
console.log(info)


// Retrive , Update , Add ,Delete




// Javascript object
// Object - property and method


let info2 = {
    // property --- value
    // key    ----- value
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:45

}

//console.log(info2[0]) // incorrect

// Retrive (dot notation and bracket notation)
console.log(info2.firstName)
console.log(info2['firstName'])

// Update (dot notation and bracket notation)

info2.lastName = "dani"
info2['lastName'] = "deshmukh"
console.log(info2)

// add (dot notation and bracket notaion)
info2.city = "pune"
info2['language'] = "hindi"
console.log(info2)

// delete(dot notation and bracket notation)

delete info2.firstName
console.log(info2)
delete info2['lastName']
console.log(info2)


let vehicle = {
    color:"red",
    type:"sedance"
}

// dot notation 
let q1 = vehicle.color
console.log(q1)

vehicle.color  = "green"
console.log(vehicle)

vehicle.regNo = 123
console.log(vehicle)

delete vehicle.type
console.log(vehicle)

// bracket 
let info3 = {
    bank:"ICICI",
    branch:"pune",
    pincode:411028
}

console.log(info3['bank'])

info3['branch'] = "nagpur"
console.log(info3)

info3['country'] = "India"
console.log(info3)

delete info3['pincode']
console.log(info3)


//              0       1       2
let fruits = ["apple","mango","bananna"]
for(let i = 0 ; i < fruits.length ; i++){
    //console.log(i)
    console.log(fruits[i])
}


let info4 = {
    firstName:"amol",
    lastName:"rao",
    age:12
}

console.log(info4.firstName) // dot notation X
console.log(info4['firstName']) // bracket notation

for(let property in info4){
    console.log(property,info4[property])
}

