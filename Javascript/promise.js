//The syntax of promise
//Promise has 3 states

// 1. Pending
// 2. Fullfilled
// 3. Rejected

let promise = new Promise((resolve , reject) =>{
    resolve("Promise is resolved") // we can pass any data type in the resolve
})

let promise1 = new Promise((resolve , reject) =>{
    reject("Promise is rejected") // we can pass any data type in the resolve
})
//When you need something to be executed when a promised is resolved you can use .then() method

promise.then((value) => {
    console.log(value)
})


//When you need to throw error when the promise gets rejected you can use .catch() method

promise1
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error); // This will catch and log the rejection reason
    });



//Note : if there are multiple promises all are executed in parallel

