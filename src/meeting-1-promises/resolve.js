console.log('file:', module.filename.split('\\').pop());

const promise = new Promise((resolve, reject) => {
    // Async operation
    setTimeout(() => {
        // resolve("Success!"); // Fulfilled
        console.log('success!');
    }, 1000);
});

promise
    .then((value) => {
        console.log(`Promise is resolved and fulfilled with value: ${value}`);
    })
    .catch((error) => {
        console.log(`Promise is resolved but rejected with error: ${error}`);
    });

console.log(promise);

console.log('#'.repeat(50));
