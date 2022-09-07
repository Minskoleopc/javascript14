// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     skills:["python","java","javascript"],
//     parent:{
//         mother:"kanchan",
//         father:"shirish"
//     }
// }

//console.log(info.parent.father)
// let a1 = info.parent
// console.log(a1)
// console.log(a1.father)
// console.log(info.skills.length)
// console.log(info.parent.mother)
// info.parent.mother = "kanchan s"
// console.log(info)
// info.city = "pune"
// info.skills.push('html')
// console.log(info)

// console.log(info.skills)
// info.skills.forEach(element => {
//     console.log(element)
// });


let students = [
    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        skills:['sql','msbi',"python"],
        city:"nagpur"
    },

    {
        firstName:"poorva",
        lastName:"vyas",
        age:29,
        skills:['sql','python',"django"],
        city:"pune"
    },

    {
        firstName:"sarika",
        lastName:"pansare",
        age:24,
        skills:['cypress','javascript',"reactjs"],
        city:"sangamner"
    },

    {
        firstName:"ayush",
        lastName:"jain",
        age:29,
        skills:['cypress','javascript',"reactjs",'salesforce'],
        city:"indore"
    },

    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:33,
        skills:['cypress','javascript',"reactjs",'python'],
        city:"pune"
    }

]

// console.log(students[0].firstName)
// console.log(students[1].city)


// name of user with pune city



students.forEach(function(el){
    //console.log(el)
    if(el.city === "pune"){
        console.log(el.firstName)
    }
})


let q1 = students.filter(function(el){
    return el.city == "pune"
})

console.log("---------------------------------")
console.log(q1)
q1.forEach(function(el){
    console.log(el.firstName)
})


let q2 = students.filter(function(el){
    return el.skills.includes('javascript')
})

console.log(q2)
q2.forEach(function(el){
    console.log(el.firstName)
})


students.forEach(function(el){
    if(el.skills.includes('javascript')){
        console.log(el.firstName)
    }
})


// 8 am   7:30 pm





