/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let queue = [];
    queue.unshift([beginWord, 1]);
    let wordSet = new Set(wordList);
    let visited = new Set();
    visited.add(beginWord);

    let ok = false;
    let stepMap = new Map();
    let wordMap = new Map();
    stepMap.set(beginWord,1);

    while (queue.length) {
        const [word, step] = queue.shift();

        if (word === endWord) {
            ok = true;
        }

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

                if (wordSet.has(newWord)) {

                    if (newWord !== word) {
                        wordMap.set(newWord, (wordMap.get(newWord) || []).concat([word])); // 记录父节点
                    }

                    if (!visited.has(newWord)) {
                        stepMap.set(newWord,step + 1);

                        queue.push([newWord, step + 1]);
                        visited.add(newWord);
                    }
                }
            }
        }
    }


    if (!ok) return [];

    const res = [];
    const dfs = (path, beginWord, word) => {
        if (word == beginWord) {          // 递归终止条件：路径打通
            res.push([beginWord, ...path]);
            return;
        }
        path.unshift(word);        // 将当前单词加入到path数组的开头
        if (wordMap.get(word)) {   // 当前单词有对应的“父单词”们
            for (const parent of wordMap.get(word)) { // 遍历“父单词”们
                if (stepMap.get(parent) + 1 == stepMap.get(word)) { // 满足要求的
                    dfs(path, beginWord, parent);                       // 递归dfs
                }
            }
        }

        path.shift(); // 回溯，撤销选择，将path数组开头的单词弹出
    };

    dfs([],beginWord,endWord);

    return res;
};
module.exports = findLadders;