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
        if (index === word.length) {
            res = true;
            return;
        }
        if (word.length === 1 && board[row][col] === word[0]) {
            res = true;
            return;
        }
        const direction = getDirection(row, col);// 走四个方向
        Object.keys(direction).forEach(key => {
            const [i, j] = direction[key];

            if (i < 0 || j < 0 || i >= m || j >= n) {
                return;
            }
            if (isUsed(i, j)) {
                return;
            }

            if (board[i][j] === word[index]) {
                visited[`${i}-${j}`] = true;

                dfs(index + 1, i, j);

                visited[`${i}-${j}`] = false; // 复原
            }
        });

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

// function test79(board,word) {
// let res = false;
// let paths = [];
//
// function isUsed(i,j) {
// return paths.some(item => item.i === i && item.j === j)
// };
//
// function dfs(str,row,col) {
// if (!str) {
// res = true;
// return;
// }
// let direction = getDirection(row,col);
// // 走四个方向
// Object.keys(direction).forEach(key => {
// const [i,j] = direction[key];
//
// if (i < 0 || j < 0 || i >= board.length) return
// if (isUsed(i,j)) return
// let char = board[i][j];
// // debugger;
//
// if (char === str[0]) {
// paths.push({
// i,
// j
// });
//
// dfs(str.slice(1),i,j)
//
// paths.pop();
// }
// })
// }
//
//
// for (let i = 0;i<board.length;i++) {
// for (let j = 0;j<board[i].length;j++) {
// dfs(word,i,j);
//
// if (res === true) {
// return res;
// }
// }
// }
//
// return res;
// }