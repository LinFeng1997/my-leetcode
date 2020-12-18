/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!words || !words.length) return [];
    let oneWordLen = words[0].length;
    let allLen = oneWordLen * words.length;

    let res = [];
    let wordMap = words.reduce((pre, cur) => {
        pre[cur] = pre[cur] ? pre[cur] + 1 : 1;
        return pre;
    }, {});

    for (let i = 0; i < s.length - allLen + 1; i++) {
        let wm = Object.assign({}, wordMap);
        for (let j = i; j < i + allLen - oneWordLen + 1; j += oneWordLen) {
            let word = s.slice(j, j + oneWordLen);

            if (wm[word]) {
                wm[word]--;
                if (wm[word] === 0) delete wm[word];
            } else {
                break;
            }
        }

        if (Object.values(wm).length === 0) res.push(i);
    }

    return res;

};

module.exports = findSubstring;