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

function checkBoardWinner(matrix, players) {
    const N = matrix.length;

    for (const player of players) {
        const rows = [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
        ];
        const cols = [
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
        ];
        const primaryDiagonal = [undefined, undefined, undefined];
        const secondaryDiagonal = [undefined, undefined, undefined];

        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                if (!isDefined(matrix[r][c])) continue; // thinking

                const isPlayerItem = matrix[r][c] === player;
                if (r === c) primaryDiagonal[r] = isPlayerItem;
                if (r + c === N - 1) secondaryDiagonal[r] = isPlayerItem;
                rows[r][c] = isPlayerItem;
                cols[r][c] = isPlayerItem;
            }
        }

        const isStrikeRow = rows.some((row) => row.every((v) => v));
        const isStrikeCol = cols.some((col) => col.every((v) => v));
        const isStrikePD = primaryDiagonal.every((v) => v);
        const isStrikeSD = secondaryDiagonal.every((v) => v);

        const isGameOver = isStrikeRow || isStrikeCol || isStrikePD || isStrikeSD;
        if (isGameOver) return player;
    }

    return null;
}
module.exports.checkBoardWinner = checkBoardWinner;
