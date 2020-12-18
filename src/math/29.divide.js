function divide(dividend, divisor) {
    let res = 0;
    let sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    let strdiv = String(dividend);
    let strRes = '',
        strRemainder = ''

    for (let i = 0; i < strdiv.length; i++) {
        strRemainder += strdiv[i];

        let [remainder, count] = divideRemainder(parseInt(strRemainder), divisor)

        strRes += count // 巧妙运用十进制，字符串长度等效次方
        strRemainder = String(remainder)
    }

    res = sign * parseInt(strRes);
    if (Math.abs(res >= 2147483648)) {
        res = sign * 2147483647
    }
    return res
}

function divideRemainder(remainder, divisor) { // 除法用减法替代进行的次数，count 是个位数
    let count = 0
    while (divisor <= remainder) {
        remainder -= divisor
        count++
    }

    return [remainder, count];
}

module.exports = divide;