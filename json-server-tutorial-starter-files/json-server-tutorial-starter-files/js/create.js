//const id = ;
document.getElementById("myButton").onclick = function() {
    var title = document.getElementById("title").value;
    //console.log(title);

    var blogBody = document.getElementById("blogBody").value;

    fetch('http://localhost:3000/posts/', {
        method: "POST", // // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify({ title: title, body: blogBody })
    })
}