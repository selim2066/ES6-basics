const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random()
        if (success > 0.5) {
            resolve(success)
        } else {
            reject(success)
        }
    })
}

myLoader()
    .then(data => console.log('resolved data', data))
    .then(err => console.log('rejected with value', err))

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(err => console.log(err))


async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    for (const user of data) {
        console.log(user.name)
        console.log(user.id)

    }
    displayData(data)
}
loadData()

function displayData(users){
    const ul = document.getElementById("userList")
    for(const user of users){
const li = document.createElement('li')
li.innerText = ` name: ${user.name} and id: ${user.id}`
ul.appendChild(li)
    }
}