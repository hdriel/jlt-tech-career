const { groupAnagrams } = require('./groupAnagrams');

function removeAnagrams(words) {
    return groupAnagrams(words).map((group) => group[0]);
}

const result = removeAnagrams(['a', 'b', 'a']);
console.log('result', result);
