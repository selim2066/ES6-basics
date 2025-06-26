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

fetch('')
    .then(response => response.json())
    .then(data => console.log(data))
    .then(err => console.log(err))