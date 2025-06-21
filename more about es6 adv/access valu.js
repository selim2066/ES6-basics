// access value from obj
const obj1 ={
    name: 'selim',
    address: [{
        village: 'Roroya', Union:'Shimabari', Post:'Chandaikona', Upzilla:'Sherpur', Zilla:'bogura'
    }]
}
console.log(obj1)
console.log('give me the village name\n')
console.log(obj1.address[0].village)
// optional chaining
console.log(obj1.address?.name?.Post?.Union)
