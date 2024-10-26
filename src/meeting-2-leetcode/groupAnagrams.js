const { validAnagram } = require('./validAnagram');

function groupAnagrams2(words) {
    const groups = [];

    for (const word of words) {
        const findGroup = groups.find((group) => {
            const [groupWord] = group;
            return validAnagram(groupWord, word);
        });

        if (findGroup) findGroup.unshift(word);
        else groups.unshift([word]);
    }

    return groups;
}

function groupAnagrams(words) {
    const groups = {};

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        groups[sortedWord] ||= [];
        groups[sortedWord].push(word);
    }

    return Object.values(groups);
}

{
    const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
    const result = groupAnagrams(words);
    console.log('words', words);
    console.log('output', output);
    console.log('result', result);
}

{
    const words = [''];
    const output = [['']];
    const result = groupAnagrams(words);
    console.log('words', words);
    console.log('output', output);
    console.log('result', result);
}

{
    const words = ['a'];
    const output = [['a']];
    const result = groupAnagrams(words);
    console.log('words', words);
    console.log('output', output);
    console.log('result', result);
}

module.exports.groupAnagrams = groupAnagrams;
