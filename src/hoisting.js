const data = [
    { numbers: [0, 0, 0, 0, 0, 0] },
    { numbers: [1, 1, 1, 1, 1, 1] },
    { numbers: [2, 2, 2, 2, 2, 2] },
    { numbers: [3, 3, 3, 3, 3, 3] },
];
console.log('data', data);

const result = data.map((d) => d.numbers[0]);

console.log('data', data);
