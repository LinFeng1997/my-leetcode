/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let ans = [];
    let cnt = 0;
    let bg = 0;

    function fillWords(bg,ed,lastLine = false) {
        let wordCount = ed - bg + 1;
        let spaceCount = maxWidth + 1 - wordCount;

        // 计算出空格数量
        for (let i = bg;i <= ed;i++) {
            spaceCount -= words[i].length;
        }

        let spaceSuffix = 1;    // 词尾空格
        let spaceAvg = (wordCount == 1) ? 1 : Math.floor(spaceCount / (wordCount - 1));     // 额外空格的平均值
        let spaceExtra = (wordCount == 1) ? 0 : spaceCount % (wordCount - 1);   // 额外空格的余数

        let ans = []

        for (let i = bg;i < ed;i++) {
            ans.push(words[i]);    // 填入单词

            if (lastLine) {
                ans.push(' ');
                continue;
            }

            const temp = i - bg < spaceExtra ? 1 : 0;
            ans.push(' '.repeat(spaceSuffix + spaceAvg + temp))
        }

        ans.push(words[ed]);

        ans.push(' '.repeat(maxWidth - ans.join('').length));

        return ans.join('');
    }

    words.forEach((word,i) => {
        cnt += word.length + 1;

        // 如果是最后一个单词，或者加上下一个词就超过长度了，即可凑成一行
        if (i + 1 === words.length || cnt + words[i + 1].length > maxWidth) {
            ans.push(fillWords(bg, i, i + 1 == words.length))

            bg = i + 1;
            cnt = 0;
        }
    });

    return ans;
};


module.exports = fullJustify;