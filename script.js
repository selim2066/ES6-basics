
console.log("bismillahir rahmanir rahim")

// function expression
const addd = function add(a,b){
    return a+b;
}

console.log(addd(10,10))

// ! arrow function

const substract = (a, b)=> a-b;

console.log(substract(10,5))

const student ={name:'selim', age:25}
const getAge=(person)=>person.age
console.log(getAge(student))

// ! spread operator ...
const array=[1,2,3,5,6]
console.log(Math.max(...array))

// 1. Array Expansion
console.log([...array,55,66])

//  Object Cloning & Merging
const obj1 = { name: "selim", id: 2066 };
const clone ={...obj1}


const obj2 ={name2: "nirob"}
const  merge ={...obj1, ...clone,...obj2}
console.log(clone)
console.log(merge)