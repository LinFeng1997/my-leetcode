/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = [];
    let i = 0;
    let len = intervals.length;

    // 扫第三种情况
    while (i < len) {
        const interval = intervals[i];
        if (newInterval[0] > interval[1]){
            res.push(interval);
            i++;
        } else {
            break;
        }
    }

    // 扫第二种情况
    while (i < len) {
        const interval = intervals[i];
        if (interval[0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
            i++;
        } else {
            break;
        }
    }

    res.push(newInterval);

    // 已经插完，处理其他的区间（第一种情况）
    for (; i < len; i++) {
        const interval = intervals[i];
        res.push(interval);
    }

    return res;
};

// 新区间和已有区间三种可能：
// 1. 新区间不重叠，在左。插的是已有区间
// 2. 新区间重叠，需要合并。插的是改变后的新区间
// 3. 新区间不重叠，在右边。插的是已有区间
module.exports = insert;