//
const container = document.querySelector(`.blogs`);

console.log(container);
const renderPosts = async() => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0,200)}</p>
        
        <a href="/json-server-tutorial-starter-files/details.html?id=${post.id}">read more...</a>
        <a href="/json-server-tutorial-starter-files/update.html?id=${post.id}">update blog</a>
        <a href="/json-server-tutorial-starter-files/delete.html?id=${post.id}">delete blog</a>
        </div>
        `
    })
    container.innerHTML = template;
}


window.addEventListener('DOMContentLoaded', () => renderPosts());