fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // promise
    .then(json => console.log(json))

/* syntax breakdown:
Summary:
fetch(...): Sends a GET request to the given URL.

.then(response => response.json()): Waits for the response, then parses it as JSON.

.then(json => ...): Receives the parsed data and does something with it (here, logs it).

This is a promise chain, where each .then() handles the result of the previous step. */



const obj = { name: 'selim', id: 213002066 }
const userJson = JSON.stringify(obj)
console.log(userJson + '\n')
const userObj = JSON.parse(userJson)
console.log(`${userObj} is the object \n`)
/** error output :[object Object] is the object 
 * In JavaScript, when you use template literals (the `${}` syntax) to insert a value into a string, JavaScript automatically tries to convert that value to a string using the `.toString()` method. For basic types like numbers or strings, this works as expected. However, when you try to interpolate a plain JavaScript object (like `{ name: 'selim', id: 213002066 }`), the default `.toString()` method inherited from `Object.prototype` is used. This method returns a generic string: `"[object Object]"`, which doesn't show the actual contents of the object. That’s why when you write `${userObj}`, the result is simply `[object Object]`, not the detailed data inside it.

To see the actual content of the object in the output, you should use `JSON.stringify(userObj)`, which converts the object into a proper JSON-formatted string. This gives a readable and complete representation of the object, suitable for logging or displaying in strings.

 */

//correct version
console.log(userObj)