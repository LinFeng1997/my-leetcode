/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    const len = intervals.length;
    let res = 1;

    if (!len) {
        return 0;
    }

    intervals.sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        else return a[0] - b[0]
    })


    let pre = 0;
    for (let i = 1; i < len; i++) {
        if (intervals[i][0] >= intervals[pre][1]) {
            res++;
            pre = i;
        }

    }

    return len - res;
};

module.exports = eraseOverlapIntervals;