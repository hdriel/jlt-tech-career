function charCounters(s) {
    const chars = {};

    for (const char of s) {
        chars[char] ||= 0;
        chars[char]++;
    }

    return chars;
}

function validAnagram(s, t) {
    if (s.length !== t.length) return false;

    const chars = charCounters(s);

    for (const char of t) {
        if (!chars[char]) return false;

        chars[char]--;
        if (chars[char] === 0) delete chars[char];
    }

    return Object.keys(chars).length === 0;
}

{
    const wordA = 'anagram';
    const wordB = 'nagaram';
    const result = validAnagram(wordA, wordB);
    console.table({ wordA, wordB, result });
}

{
    const wordA = 'rat';
    const wordB = 'cat';
    const result = validAnagram(wordA, wordB);
    console.table({ wordA, wordB, result });
}

module.exports.validAnagram = validAnagram;
