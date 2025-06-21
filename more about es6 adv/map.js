//! map
const array = [1, 5, 6, 4, 10]
const double = array.map(num => num * 2)
console.log(double)

const names = ['selim', 'maruf', 'nirob', 'fahim', 'farsi','habiba', 'laiba','tamim']
const fistLatter = names.map(f => f[0])
const length = names.map(l => l.length)
console.log(fistLatter, length)

//! for each
/* forEach()
 is a built-in array method in JavaScript that runs a function once for each item in the array.

Unlike .map(), it does not return a new array — it's mostly used for side effects like logging, updating UI, etc.

| Feature    | `forEach()`                 | `map()`                 |
| ---------- | --------------------------- | ----------------------- |
| Returns    | `undefined`                 | Returns a **new array** |
| Used for   | Side effects (like logging) | Data transformation     |
| Chainable? | ❌ Not chainable             | ✅ Chainable             |

*/
const pair =names.forEach((nam,index)=>{
    console.log(`${index} : ${nam}`)
})

//! filter
const even =array.filter(even => even%2==0)
console.log(even)

const chotoNam = names.filter(choto=>choto.length>5)
console.log(chotoNam)
const sNames = names.filter(name => name.startsWith('s'));
const mEndNames = names.filter(name => name.endsWith('m'));
const iAndM = names.filter(name => name.includes('i') && name.includes('m'));
console.log(sNames, mEndNames,iAndM)

// ! find : return the first matched conditional element, not the all matched elements, unlike filter
const findd = array.find(one=>one>4)
console.log(findd) //5

// ! reduce: .reduce() takes an array and reduces it to a single value by applying logic step-by-step with an accumulator.

const sum = array.reduce((prev, current)=> prev+current)
console.log(sum)

// count frequency
const letters = ['a', 'b', 'a', 'c', 'b', 'a'];

const count = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1; 
  /**expanded verion:
   *  if (acc[letter] === undefined) {
  acc[letter] = 1; // First time we see this letter
} else {
  acc[letter] = acc[letter] + 1; // Add 1 to existing count
}
 */
  return acc;
}, {});

console.log(count);
// Output: { a: 3, b: 2, c: 1 }
