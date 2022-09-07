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


// search  all people with pune city
// program 1 
students.forEach(function(el){
    //console.log(el)
    if(el.city === "pune"){
        console.log(el.firstName)
    }
})

// program 2 
let q1 = students.filter(function(el){
    return el.city == "pune"
})
console.log(q1)
q1.forEach(function(el){
    console.log(el.firstName)
})

// program3
// search all people with javascript skills 
console.log('-------------------------')
students.forEach(function(el){
   // console.log(el.skills)
   if(el.skills.includes('javascript')){
        console.log(el.firstName)
   }
})

let q2 = students.filter(function(el){
    return el.skills.includes('javascript')
})
console.log(q2)

q2.forEach(function(el){
    console.log(el.firstName)
})

// average age of all student 
let q3 = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(q3/students.length)

// search user with python skills and age > 25
students.forEach(function(el){
    if(el.skills.includes('python') && el.age > 25){
        console.log(el.firstName)
    }
})
// first user belong to pune // find
console.log('---------------------------------')
let q4 = students.find(function(el){
    return el.city === "pune"
})
console.log(q4.firstName)
// please check whether all the people are above age of 20

let q5 = students.every(function(el){
    return el.age > 20
})
console.log(q5)

let q6 = students.some(function(el){
    return el.skills.includes('salesforce')
})
console.log(q6)
