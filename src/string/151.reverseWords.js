/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/\s+/).reverse().join(' ').trim();
};

module.exports = reverseWords;