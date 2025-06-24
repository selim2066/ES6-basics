function postDynamic(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    console.log(posts)
    const postContainer =document.getElementById('postContainer')
    for(const post of posts){

        const div = document.createElement('div')
        div.classList.add('postStyle')
        div.innerHTML=`
        <h5>userName ${post.userId} </h5>
        <h5>post: ${post.title} </h5>
        <p>Description: ${post.body} </p>
        
        `
        postContainer.appendChild(div)
        

    }
}

postDynamic()