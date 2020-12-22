/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const m = 9;
    const n = 9;
    const cols = makeSetArray(9);
    const rows = makeSetArray(9);
    const areas = makeSetArray(9);

    for (let i = 0;i<m;i++) {
        for (let j = 0;j<n;j++) {
            const value = board[i][j];

            if (value !== '.') {
                const area = getArea(i,j);

                if (
                    rows[i].has(value) ||
                    cols[j].has(value) ||
                    areas[area].has(value)
                ) {
                    return false;
                }

                rows[i].add(value);
                cols[j].add(value);
                areas[area].add(value);
            }

        }
    }

    return true;
};

function makeSetArray(n) {
    return new Array(n).fill(null).map(_ => new Set())
}

function getArea(i,j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3)
}

module.exports = isValidSudoku;