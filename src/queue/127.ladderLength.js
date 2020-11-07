/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let queue = [];
    queue.unshift([beginWord, 1]);
    let wordSet = new Set(wordList); // 优化时间

    while (queue.length) {
        const [word, step] = queue.shift();

        if (word === endWord) return step;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1)
                // if (wordList.includes(newWord)) {
                //     queue.push([newWord, step + 1]);
                //
                //     wordList = wordList.filter(item => item !== newWord)
                // }

                if (wordSet.has(newWord)) {
                    queue.push([newWord, step + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }

    return 0;
};

module.exports = ladderLength;