/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const visited = {};
    const m = board.length;
    const n = board[0].length;

    function isUsed(i, j) {
        return visited[`${i}-${j}`];
    }

    function inArea(i,j) {
        return !(i < 0 || j < 0 || i >= m || j >= n);
    }

    function dfs(index, row, col) {
        if (!inArea(row,col) || isUsed(row,col)) {
            return;
        }

        const char = board[row][col];

        if (index === word.length - 1 && char === word[index]) {
            return true;
        }

        if (char === word[index]) {
            visited[`${row}-${col}`] = true;

            const direction = getDirection(row, col);// 走四个方向
            for (let count = 0; count < direction.length;count++) {
                const [i, j] = direction[count];

                if (dfs(index + 1, i, j)) {
                    return true;
                }
            }

            visited[`${row}-${col}`] = false;
        }

    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(0, i, j)) {
                return true;
            }
        }

    }

    return false;
};

function getDirection(i, j) {
    return [
        [i, j - 1],// left
        [i, j + 1],// right
        [i - 1, j],// up
        [i + 1, j],// down
    ];
}

module.exports = exist;