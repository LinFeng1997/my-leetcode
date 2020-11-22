/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0;
    const visited = {};
    const m = grid.length;
    const n = grid[0].length;

    function inArea(i,j) {
        return !(i < 0 || j < 0 || i >= m || j >= n);
    }

    function isUsed(i, j) {
        return visited[`${i}-${j}`];
    }

    function dfs(row, col) {
        if (grid[row][col] === "0") {
            return;
        }
        const direction = getDirection(row, col);
// 走四个方向
        direction.forEach(item => {
            const [i, j] = item;

            if (!inArea(i,j) || isUsed(i,j)) {
                return;
            }
            const char = grid[i][j];

            if (char === "1") {
                visited[`${i}-${j}`] = true;

                dfs(i, j);
            }
        });

    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1" && !isUsed(i, j)) {
                res += 1;
            }
            dfs(i, j);
        }
    }

    return res;
};

function getDirection(i, j) {
    return [
        [i, j - 1],// left
        [i, j + 1],// right
        [i - 1, j],// up
        [i + 1, j],// down
    ];
}

module.exports = numIslands;