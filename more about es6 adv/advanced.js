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
console.log(`say1 diye korlam ${say1()}`)
console.log(`say1 diye korlam ${say1()}`)
console.log(`say1 diye korlam ${say1()}`)
console.log(`say1 diye korlam ${say1()}`)
console.log(`say1 diye korlam ${say1()} \n`)

const say2 = sayNum()
console.log(`say2.... diye korlam ${say2()}`)
console.log(`say2.... diye korlam ${say2()}\n`)






// ! callback

function greatings (fun, nam){
     fun(nam);
}
function salam(naam){
 console.log(`assalamu alaikum ${naam}\n`)
}

console.log(greatings(salam, 'selim'))
console.log(greatings(salam, 'nirob'))
console.log(greatings(salam, 'maruf'))
console.log(greatings(salam, 'tamim'))

/** undefine why?

 :When you use `console.log(...)`, it prints the **return value** of whatever expression is inside the parentheses. In your original code, `greetings(...)` calls the function and internally executes `fun(nam)`, which prints the message like “assalamu alaikum selim”. However, since `greetings()` itself doesn’t return anything, it implicitly returns `undefined`. As a result, when you write `console.log(greetings(...))`, it first prints the message from inside `fun(nam)` and then prints `undefined` as the return value of `greetings()`. So the final output becomes the greeting message followed by `undefined`.



 : | Code                 | Meaning                                                          |
| -------------------- | ---------------------------------------------------------------- |
| `console.log(...)`   | Prints the **return value**                                      |
| `greetings(...)`     | Calls the function, returns `undefined`                          |
| `fun(nam)` inside it | Prints the actual message                                        |
| Final result         | Message + `undefined` (if you use `console.log(greetings(...))`) |

 */

const isTrue=true;
console.log(!isTrue ? "hello" : "world")

const sum =(p, q)=> {
 p + q;
}
const result = sum(2, 3);
console.log(result);

function work(x, y = 4) {
 return x + y;
}
console.log(work(32));