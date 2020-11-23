/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    const m = matrix.length;
    if (!m) return [];

    const n = matrix[0].length;

    const pacific = makeBinaryArray(m,n);
    const atlantic = makeBinaryArray(m,n);
    const res = [];

    function inArea(i,j) {
        return !(i < 0 || j < 0 || i >= m || j >= n);
    }

    function dfs(row,col,visited) {
        visited[row][col] = true;

        const direction = getDirection(row, col);// 走四个方向

        for (let count = 0; count < direction.length; count++) {
            const [i, j] = direction[count];

            if (inArea(i,j) && !visited[i][j] && matrix[i][j]>=matrix[row][col]) {
                dfs(i, j, visited);
            }
        }
    }

    // 从太平洋左边界流入 及 从大西洋右边界流入
    for (let i =0;i<m;i++) {
        dfs(i,0,pacific)
        dfs(i,n-1,atlantic)
    }

    // 从太平洋上边界流入 及 从大西洋下边界流入
    for (let i =0;i<n;i++) {
        dfs(0,i,pacific)
        dfs(m-1,i,atlantic)
    }


    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (pacific[i][j] && atlantic[i][j]) {
                res.push([i, j]);
            }
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

function makeBinaryArray(m,n) {
    let arr = [];

    for(let i = 0; i < m ; i++) {
        arr[i] = [];
        for(let j = 0; j< n; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}

module.exports = pacificAtlantic;