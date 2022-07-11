fetch ('https://reqres.in/api/users')
.then(res => {
    console.log(res)
    if(res.ok)  {
    console.log('success')
} else {
    console.log('not successful')
}
})
.then(data => console.log(data))
.catch(error => console.log('error'))