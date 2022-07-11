const request = new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/users");
request.send();
request.onload =() => {
    if (request.status ===200) {
        console.log(JSON.parse(request.response));
    } else {
       console.log('error ${request.status}') 
    }
    }
 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        return response.json();
    }) .then(json=>{
        console.log(json);
    })