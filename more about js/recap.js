console.log("whts up")
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

}

async function asyncLoadUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data)
}




const arrowAsyncUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
}


const asyncTryCatch = async() => {
    try {
        console.log(hi)
    } catch (error) {
        console.log(error)
    }
    console.log("code run hoise")
}