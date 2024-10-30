const { isDefined } = require('./utils');

function printBoard(matrix) {
    const N = matrix.length;
    let result =
        [
            // matrix board
            ' 00 | 01 | 02 ',
            '----+----+----',
            ' 10 | 11 | 12 ',
            '----+----+----',
            ' 20 | 21 | 22 ',
        ].join('\n') + '\n';

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const item = matrix[r][c];
            if (isDefined(item)) {
                result = result.replace(`${r}${c}`, `${item} `);
            }
        }
    }

    console.log(result);
}
module.exports.printBoard = printBoard;

function isFreeSpace(matrix, r, c) {
    const isValidRow = r >= 0 && r < matrix.length;
    const isValidCol = isValidRow && c >= 0 && c < matrix[r].length;
    return isValidRow && isValidCol && !isDefined(matrix[r][c]);
}
module.exports.isFreeSpace = isFreeSpace;

function updatePlayerPosition(matrix, r, c, player) {
    matrix[r][c] = player;
}
module.exports.updatePlayerPosition = updatePlayerPosition;

function isFullBoard(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (!isDefined(matrix[r][c])) {
                return false;
            }
        }
    }

    return true;
}
module.exports.isFullBoard = isFullBoard;

function isStrikeRow(matrix, player) {
    const N = matrix.length;
    for (let r = 0; r < N; r++) {
        let playerCounter = 0;

        for (let c = 0; c < N; c++) {
            const isPlayerItem = matrix[r][c] === player;
            if (isPlayerItem) playerCounter++;
        }

        if (playerCounter === N) return true;
    }

    return false;
}

function isStrikeCol(matrix, player) {
    const N = matrix.length;
    for (let c = 0; c < N; c++) {
        let playerCounter = 0;

        for (let r = 0; r < N; r++) {
            const isPlayerItem = matrix[r][c] === player;
            if (isPlayerItem) playerCounter++;
        }

        if (playerCounter === N) return true;
    }

    return false;
}

function isStrikeDiagonals(matrix, player) {
    const N = matrix.length;
    // Primary Diagonal
    {
        let playerCounter = 0;
        for (let i = 0; i < N; i++) {
            const isPlayerItem = matrix[i][i] === player;
            if (isPlayerItem) playerCounter++;
        }
        if (playerCounter === N) return true;
    }

    // Secondary Diagonal
    {
        let playerCounter = 0;
        for (let i = 0, j = N - 1; i < N; i++, j--) {
            const isPlayerItem = matrix[i][j] === player;
            if (isPlayerItem) playerCounter++;
        }
        if (playerCounter === N) return true;
    }

    return false;
}

function checkBoardWinner(matrix, players) {
    for (const player of players) {
        const _isStrikeRow = isStrikeRow(matrix, player);
        if (_isStrikeRow) return player;

        const _isStrikeCol = isStrikeCol(matrix, player);
        if (_isStrikeCol) return player;

        const _isStrikeDiagonals = isStrikeDiagonals(matrix, player);
        if (_isStrikeDiagonals) return player;
    }

    return null;
}
module.exports.checkBoardWinner = checkBoardWinner;
