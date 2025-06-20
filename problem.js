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

