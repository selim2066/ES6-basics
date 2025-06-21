// const obj1 = { name: "selim", id: 2066 };


// const cln = obj1;
// console.log(cln);

// const obj1={name:"selim", id:2066}
// const cln=obj1
// console.log(cln)

const obj1 = { name: "selim", id: 2066 };
const clone ={...obj1}

const obj2 ={name2: "nirob"}
const  merge ={...obj1, ...clone,...obj2}
console.log(merge)

const siblings ={s1:'maruf', s2:'nirob', s3:'tamim', s4:'fahim', s5:'farsi'}
const {s1, s2, ...others}=siblings
console.log(s1, others)

const myself = { name: 'selim', age: 25, religion: 'Islam', wish: 'jannah' }
const { name, age, religion, wish } = myself
console.log(name, age, religion, wish, age + 100)



const { name: nam, age: boyos, religion: deen, wish: iccah } = myself
console.log(nam, boyos, iccah, deen)

//! array destructuring
const array = ['selim', 'maruf', 'nirob']
const [boro, mejho, choto] = array
console.log(choto)

//  swap
let a = 'selim'
let b = 'nirob';

[a, b] = [b, a]
console.log(a, b)

// keys and values obj

console.log(Object.keys(myself))
console.log(Object.values(myself))