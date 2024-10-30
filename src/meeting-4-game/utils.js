const prompt = require('prompt-sync')();

module.exports.isDefined = (value) => value !== undefined && value !== null;

module.exports.getUserInput = (player) => {
    const input = prompt(`[${player}] put your place: `);
    const [r, c] = input.split('');
    return [+r, +c];
};
