module.exports.isDefined = (value) => value !== null && value !== undefined;

module.exports.getMatrixOutput = (matrix) => {
    let output = '';

    for (let i = 0; i < matrix.length; i++) {
        let row = '';

        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + (j === matrix[i].length - 1 ? '' : ' ');
        }

        output += row + '\n';
    }

    return output + '\n';
};
