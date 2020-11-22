/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let res = false;
    const visited = {};
    const m = board.length;
    const n = board[0].length;

    function isUsed(i, j) {
        return visited[`${i}-${j}`];
    }

    function dfs(index, row, col) {
        const char = board[row][col];

        if (index === word.length - 1) {
            if (char === word[index]) {
                res = true;
                return;
            }
        }

        if (char === word[index]) {
            visited[`${row}-${col}`] = true;

            const direction = getDirection(row, col);// 走四个方向
            Object.keys(direction).forEach(key => {
                const [i, j] = direction[key];

                if (i < 0 || j < 0 || i >= m || j >= n) {
                    return;
                }
                if (isUsed(i, j)) {
                    return;
                }

                dfs(index + 1, i, j);
            });

            visited[`${row}-${col}`] = false;
        }

    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            dfs(0, i, j);

            if (res === true) {
                return res;
            }
        }

    }

    return res;
};

function getDirection(i, j) {
    const direction = {
        left: [i, j - 1],
        right: [i, j + 1],
        up: [i - 1, j],
        down: [i + 1, j]
    };
    return direction;
}

module.exports = exist;