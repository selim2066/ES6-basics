function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => usersDisplay(data))
}

// proccedur
/* ✅ loadUsers()
Fetches user data from an API.

Converts the response to JSON.

Passes the data to usersDisplay() to display.
 */



// proccedur
/*✅ usersDisplay(manus)
Takes the user data (manus) and:

Loops through each user.

Creates a <li> with the user’s name.

Appends it to a <ul> with the ID usersList.

 */
function usersDisplay(manus) {

    const ul = document.getElementById('usersList')
    for (const user of manus) {
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li)
        console.log('\n')
    }
    const br = document.createElement('br')
    ul.appendChild(br)
    ul.appendChild(br)
    ul.appendChild(br)
    //  console.log(manus)

}



//
function todo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => todoDisplay(data))
    alert('clicked hoise borovai')

}
function todoDisplay(tata) {
    for (const toDo of tata) {

        console.log(toDo.title)
    }
    console.log(tata)
}


