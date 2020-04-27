/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) {
        return s.length;
    }
    let p0 = 0;
    let p1 = 1;
    let max = 1;
    while (p1 < s.length) {

        let right = s[p1];
        if (s.substring(p0, p1).includes(right)) {
            p0++
        } else {
            max = Math.max(max, p1 - p0 + 1);
            p1++;
        }
    }

    return max;
};

// var lengthOfLongestSubstring = function (s) {
//     let p0 = 0;
//     let p1 = 0;
//     let max = 0;
//     let map = new Map();
//
//     while (p1 < s.length) {
//
//         let right = s[p1];
//         if (map.has(right)) {
//             p0 = Math.max(map.get(s[p1]), p0);
//         }
//
//         max = Math.max(max, p1 - p0 + 1);
//         map.set(s[p1], p1 + 1);
//         p1++;
//     }
//
//     return  max;
// };
module.exports = lengthOfLongestSubstring;