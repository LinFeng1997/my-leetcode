/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(grid) {
    const m = grid.length;
    if (m === 0) return;
    const n = grid[0].length;

    function inArea(i,j) {
        return !(i < 0 || j < 0 || i >= m || j >= n);
    }

    function borderPoint(i, j) {
        return i === 0 || j === 0 || i === m - 1 || n - 1 === j;
    }

    function dfs(row, col) {
        if (!inArea(row,col)){
            return;
        }

        const char = grid[row][col];
        if (char === "O") {
            grid[row][col] = 'NO';
            const direction = getDirection(row, col);
// 走四个方向
            direction.forEach(item => {
                const [i, j] = item;
                dfs(i, j);
            });
        }

    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 反向操作，从边界不能变 X 的 O 开始
            if (borderPoint(i,j) && grid[i][j] === 'O') {
                dfs(i, j);
            }
        }
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const char = grid[i][j];
            if (char === 'NO')  grid[i][j] = 'O'
            else if (char === 'O')  grid[i][j] = 'X'
        }

    }

    return grid;
};


function getDirection(i, j) {
    return [
        [i, j - 1],// left
        [i, j + 1],// right
        [i - 1, j],// up
        [i + 1, j],// down
    ];
}


module.exports = solve;