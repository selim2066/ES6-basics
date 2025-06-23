//! thiskeyword, dot notation vs bracket notation, closer

//closer

function sayNum() {
    let count = 0;
    return function () {
        count++;
        return count
    }
}
const say1 = sayNum()
console.log(say1())
console.log(say1()) 
console.log(say1())
console.log(say1())
console.log(say1())