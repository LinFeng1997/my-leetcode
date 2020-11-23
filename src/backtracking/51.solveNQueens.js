/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const arr = makeBinaryArray(n, n);
    const cols = new Set();
    const diag = new Set();
    const diag2 = new Set();

    const res = [];

    function finish() {
        const board = arr.slice();

        for (let i = 0; i < n; i++) {
            board[i] = board[i].join('');
        }

        res.push(board);
    }

    function dfs(row) {
        if (row === n) {
            finish();
            return;
        }

        for (let col = 0; col < n; col++) {
            const isValid = !(cols.has(col) || diag.has(row + col) || diag2.has(row - col));

            if (isValid)  {
                arr[row][col] = 'Q';

                cols.add(col);
                diag.add(row + col);
                diag2.add(row - col);

                dfs(row + 1);

                arr[row][col] = '.';

                cols.delete(col);
                diag.delete(row + col);
                diag2.delete(row - col);
            }
        }

    }

    dfs(0);

    return res;
};

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill('.'));
}

module.exports = solveNQueens;