const { isFreeSpace, printBoard, updatePlayerPosition, checkBoardWinner, isFullBoard } = require('./logic');
const { getUserInput } = require('./utils');

function main() {
    const matrix = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
    ];
    const PLAYERS = ['X', 'O'];
    let selectedPlayerIndex = 0;
    let winner = null;
    let isGameOver = false;

    while (!isGameOver) {
        const selectedPlayer = PLAYERS[selectedPlayerIndex];

        printBoard(matrix);
        const [r, c] = getUserInput(selectedPlayer);

        if (!isFreeSpace(matrix, +r, +c)) {
            console.log('invalid input!');
            continue;
        }

        updatePlayerPosition(matrix, r, c, selectedPlayer);
        selectedPlayerIndex = (selectedPlayerIndex + 1) % PLAYERS.length;

        winner = checkBoardWinner(matrix, PLAYERS);
        isGameOver = !!winner || isFullBoard(matrix);
    }

    printBoard(matrix);

    if (winner) {
        console.log('WINNER PLAYER:', winner);
    }

    console.log('** GAME OVER ** ');
}

main();
