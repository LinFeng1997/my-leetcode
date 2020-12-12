/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let len = s.length;
    let rows = new Array(len).fill('');
    let down = false;
    let loc = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        rows[loc] += char;

        if (loc === 0 || loc === numRows - 1) {
            down = !down;
        }

        loc += down ? 1 : -1;
    }

    return rows.join('');
};

module.exports = convert;