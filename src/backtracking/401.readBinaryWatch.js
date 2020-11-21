/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const res = [];
    const paths = [];

    function dfs(start, sum) {
        if (sum === 0) {
            // res.push(paths.slice());
            let arr = new Array(11).fill(0);
            paths.forEach(item => {
                arr[item] = 1;
            });
            const time = arr.join('');
            const hour = parseInt(time.slice(0,4),2);
            let minute = parseInt(time.slice(4),2);

            if (hour < 12 && minute < 60) {
                minute = minute >= 10 ? minute : `0${minute}`;
                res.push(`${hour}:${minute}`);
            }

            return;
        }

        for (let i = start; i < 11; i++) {
            paths.push(i);
            dfs(i+1, sum - 1);
            paths.pop();
        }
    }

    dfs(0, num);

    // console.log('res',res);
    return res;
};

module.exports = readBinaryWatch;