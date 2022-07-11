let P = new Promise((resolve, reject) => {
    let a = 1+6
    if ( a == 2){
        resolve('success')
    } else {
        reject('failed')
    }
})

P.then((message) => {
    console.log('this is in the then '  +message)
}).catch((message) => {
    console.log('this is in the catch'  +message)
})

