function getRandomCell(arr) {
    const randomIndex = ~~(Math.random() * arr.length);
    return arr[randomIndex];
}

function creatRandomArray(size, pattern = '0123456789') {
    const chars = pattern.split('');
    return new Array(size).fill((_) => '').map((_) => getRandomCell(chars));
}

module.exports.randomList = creatRandomArray;
export const randomList = creatRandomArray;
// module.exports = creatRandomArray;
