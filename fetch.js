let promise = fetch("https://restcountries.com/v3.1/name/india")

promise.then(function(response){
    console.log(response)

})