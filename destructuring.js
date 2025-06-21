// object destructuring
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