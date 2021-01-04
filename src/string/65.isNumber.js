/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    let state = 0;

    // 状态机
    const stateMachine = [
        [0, 1, 6, 2, -1, -1],// 初始状态
        [-1, -1, 6, 2, -1, -1],// 带符号运算
        [-1, -1, 3, -1, -1, -1],// 带小数点运算
        [8, -1, 3, -1, 4, -1],// 带小数点数字运算
        [-1, 7, 5, -1, -1, -1],// 带指数运算
        [8, -1, 5, -1, -1, -1],// 带指数幂运算
        [8, -1, 6, 3, 4, -1],// 数字运算
        [-1, -1, 5, -1, -1, -1],// 带指数，幂有符号运算
        [8, -1, -1, -1, -1, -1]// 剩余空格
    ];

    function getState(char) {
        switch (char) {
            case " ":
                return 0;
            case "+":
            case "-":
                return 1;

            case ".":
                return 3;
            case "e":
                return 4;
            default:
                let num = +char;
                if (num >= 0 && num <= 9) {
                    return 2
                } else {
                    return 5
                }
                break;
        }
    }

    for (let i = 0; i < s.length; i++) {
        state = stateMachine[state][getState(s[i])];

        if (state === -1) return false
    }

    const finals = [0,0,0,1,0,1,1,0,1];
    return !!finals[state];

};

// | state | blank | +/- | 0-9 | . | e | other |
// | --- | --- | --- | --- | --- | --- | --- |
// | 0 | 0 | 1 | 6 | 2 | -1 | -1 |
// | 1 | -1 | -1 | 6 | 2 | -1 | -1 |
// | 2 | -1 | -1 | 3 | -1 | -1 | -1 |
// | 3 | 8 | -1 | 3 | -1 | 4 | -1 |
// | 4 | -1 | 7 | 5 | -1 | -1 | -1 |
// | 5 | 8 | -1 | 5 | -1 | -1 | -1 |
// | 6 | 8 | -1 | 6 | 3 | 4 | -1 |
// | 7 | -1 | -1 | 5 | -1 | -1 | -1 |
// | 8 | 8 | -1 | -1 | -1 | -1 | -1 |
module.exports = isNumber;