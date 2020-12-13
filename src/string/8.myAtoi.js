/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // 默认处于开始执行阶段
    let state = 'start';
    // 正负符号，默认是正数
    let sign = 1;
    // 数值，默认是0
    let answer = 0;
    // 状态机
    const map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
    ]);

    const max = Math.pow(2,31);

    function get(char) {
        const status = getStatus(char);
        state = map.get(state)[status];
        
        if (state === 'in_number') {
            answer = answer * 10 + +char;

            answer = sign === 1 ? Math.min(answer,max - 1) : Math.min(answer,max)
        } else if (state === 'signed') {
            sign = char === '+' ? 1 : -1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        get(char);
    }

    return answer * sign;
};

function getStatus(char) {
    if (char === ' ') {
        // 空格判断
        return 0;
    } else if (char === '-' || char === '+') {
        // 正负判断
        return 1;
    } else if (typeof Number(char) === 'number' && !isNaN(char)) {
        // 数值判断
        return 2;
    } else {
        // 其他情况
        return 3;
    }
}

module.exports = myAtoi;