console.log('file:', module.filename.split('\\').pop());
const fs = require('fs');
const path = require('path');

function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', function (err, data) {
            return err ? reject(err) : resolve(data);
        });
    });
}

(async (filePath) => {
    const data = await readFilePromise(filePath);
    console.log(filePath);
    console.log(data);
})(path.resolve('./sleep.js'));

console.log('#'.repeat(50));
