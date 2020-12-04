/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let dp = makeBinaryArray(m + 1, n + 1);

    strs.forEach(str => {
        const map = countZerosOnes(str);

        for (let zeros = m; zeros >= map[0]; zeros--) {
            for (let ones = n; ones >= map[1]; ones--) {
                dp[zeros][ones] = Math.max(dp[zeros][ones], 1 + dp[zeros - map[0]][ones - map[1]])
            }
        }
    });

    return dp[m][n];
};

function countZerosOnes(s) {
    const map = {
        0: 0,
        1: 0
    };

    for (let i = 0; i < s.length; i++) {
        map[s[i]]++;
    }

    return map;
}


function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(0));
}

// dp[i][j] 表示总共有 i 个 0，j 个 1的情况下，符合条件的子串
// dp(i, j) = max(1 + dp(i - cost_zero[k], j - cost_one[k]),dp[i,j])
//     if i >= cost_zero[k] and j >= cost_one[k]
// k 代表第 k 个子串，cost_zero[k] 和 cost_one[k] 代表该子串中 0 和 1 的个数
// 有限背包，双重状态
module.exports = findMaxForm;