console.log('file:', module.filename.split('\\').pop());

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let data = new Array(promises.lenght).fill(undefined);
        let counter = 0;

        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];

            promise
                .then((result) => {
                    data[i] = result;
                    counter++;
                    if (counter === promises.lenght) {
                        resolve(data);
                    }
                })
                .catch((err) => reject(err));
        }
    });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(ms), ms));
const boom = (ms) => new Promise((resolve, reject) => setTimeout(() => reject(ms), ms));

const promises = [sleep(1000), sleep(2000), sleep(1000), boom(1500)];
console.log(`running ${promises.length} promises`);
promiseAll(promises)
    .then((data) => {
        console.log('data', data);
    })
    .catch((error) => {
        console.log('error', error);
    });

console.log('#'.repeat(50));
