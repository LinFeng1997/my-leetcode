/**
 * @param {string} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const m = 9;
    const n = 9;
    const cols = makeSetArray(9);
    const rows = makeSetArray(9);
    const areas = makeSetArray(9);

    function getArea(i,j) {
        return Math.floor(i / 3) * 3 + Math.floor(j / 3)
    }

    for (let i = 0;i<m;i++) {
        for (let j = 0;j<n;j++) {
            const value = board[i][j];

            if (value !== '.') {
                const area = getArea(i,j);

                rows[i].add(value);
                cols[j].add(value);
                areas[area].add(value);
            }

        }
    }

    function dfs(row,col) {
        if (col === m) {
            // 换行
            row++;
            col = 0;

            if (row === n) { // 结算
                return true;
            }
        }
        
        const value = board[row][col];

        // 剪枝
        if (value !== '.') return dfs(row,col+1);

        const area = getArea(row,col);

        // 循环填数 + 回溯
        for (let num = 1;num <= m;num++) {
            const char = String(num);
            
            if (
                rows[row].has(char) ||
                cols[col].has(char) ||
                areas[area].has(char)
            ) {
                continue;
            }

            board[row][col] = char;
            rows[row].add(char);
            cols[col].add(char);
            areas[area].add(char);

            if (dfs(row,col+1)) return true;

            board[row][col] = '.';
            rows[row].delete(char);
            cols[col].delete(char);
            areas[area].delete(char);
        }

        return false;
    }

    // console.log('rows',rows)
    // console.log('cols',cols)
    // console.log('areas',areas)

    dfs(0,0);
    return board;

};

function makeSetArray(n) {
    return new Array(n).fill(null).map(_ => new Set())
}

module.exports = solveSudoku;