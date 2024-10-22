console.log('file:', module.filename.split('\\').pop());

function cancelablePromise(promise) {
    let isCancelled = false;
    const wrapperPromise = new Promise((resolve, reject) => {
        promise
            .then((result) => {
                if (!isCancelled) {
                    resolve(result);
                }
            })
            .catch((error) => {
                if (!isCancelled) {
                    reject(error);
                }
            });
    });

    return {
        promise: wrapperPromise,
        cancel() {
            console.log('cancel promises');
            isCancelled = true;
        },
    };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const p = cancelablePromise(sleep(6500));

p.promise
    .then(() => {
        console.log('done!');
    })
    .catch((error) => console.log('failed'));

console.log('start');

setTimeout(() => {
    p.cancel();
}, 2500);

console.log('#'.repeat(50));
