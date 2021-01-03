/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;

    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;

    while (start >=0 && s[start] !== ' ') {
        start--;
    }

    return end - start;
};

// 注意边界，不然会陷入死循环：指针索引要大于等于 0
module.exports = lengthOfLastWord;