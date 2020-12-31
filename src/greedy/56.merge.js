/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 0) {
        return [];
    }

    let rst = [];
    intervals.sort((a,b) => a[0] - b[0]);

    for (let i = 0;i < intervals.length;i++) {
        let interval = intervals[i];
        let left = interval[0];
        let right = interval[1];

        // 新增
        if (!rst.length || rst[rst.length - 1][1] < left) {
            rst.push([left,right])
        } else {
            // 修改
            rst[rst.length - 1][1] = Math.max(rst[rst.length - 1][1],right);
        }

    }

    return rst;
};

// 贪心：要合并，肯定是连续的。不然就独立的。
module.exports = merge;