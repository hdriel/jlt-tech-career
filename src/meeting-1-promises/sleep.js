console.log('file:', module.filename.split('\\').pop());

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(ms), ms));
const boom = (ms) => new Promise((resolve, reject) => setTimeout(() => reject(ms), ms));

module.exports.sleep = sleep;
module.exports.boom = boom;

console.log('#'.repeat(50));
