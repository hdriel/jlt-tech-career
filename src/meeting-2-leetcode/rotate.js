function rotate(matrix) {
    const N = matrix.length;

    for (let c = 0; c < N; c++) {
        let newLine = [];
        for (let r = 0; r < N; r++) {
            newLine.unshift(matrix[r][c]);
        }
        matrix.push(newLine);
    }

    matrix.splice(0, N);
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);
rotate(matrix);
console.log(matrix);
