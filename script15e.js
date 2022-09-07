

let info = ["chinmay","deshpande",22,55]

// retrive 
console.log(info[0])

// update 
info[0] = "tanmay"
console.log(info)

// add

info.push('city')
info.unshift('Mr')
console.log(info)

// delete

info.pop()
info.shift()

let info2 =  {
    // property , value 
    // key , value
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:43

}

//  four operations 

// retrive  (dotnotation and bracket notation)
// object.propertyName
console.log(info2.firstName)
console.log(info2['firstName'])

// update (dotnotation and bracket notation)

info2.firstName = "tanmay"
info2['firstName'] = "ram"
console.log(info2)


// add (dotnotation and bracket notation)

info2.city = "pune"
info2['lang'] = "hindi"
console.log(info2)

// delete(dotnotation and bracket notation)

delete info2.city
delete info2['lang']
console.log(info2)

// array 
//       0   1  2 3 
let a = [11,22,33,44]

for(let i = 0 ; i < a.length ; i++){
    console.log(a[i])
}

// array  stores the value by index

let vehicle = {
    type:"sedane",
    color:"blue",
    city:"pune"
}
console.log(vehicle.type) // dot notation X
console.log(vehicle['color']) // bracket notation

for(let property in vehicle){
    console.log(property,vehicle[property])
}
