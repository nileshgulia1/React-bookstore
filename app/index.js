let p = new Promise((resolve,reject) => {
    resolve("hello how are you");
})
p.then(response  => console.log(response))