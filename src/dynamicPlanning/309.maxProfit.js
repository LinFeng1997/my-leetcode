/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    if (!n) return 0;
    const f = makeBinaryArray(n + 1,3);
    f[1][0] = -prices[0];

    for (let i = 2; i <= n; i++) {
        // i 代表第 i 天，对应价格数组索引要减 1
        f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i - 1]);
        f[i][1] = f[i - 1][0] + prices[i - 1];
        f[i][2] = Math.max(f[i - 1][1], f[i - 1][2])
    }

    return Math.max(f[n][2],f[n][1])
};


function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(0));
}
// 我们用 f[i] 表示第 i 天结束之后的「累计最大收益」
// 我们目前持有一支股票，对应的「累计最大收益」记为 f[i][0]
// 我们目前不持有任何股票，并且处于冷冻期中，对应的「累计最大收益」记为 f[i][1]
// 我们目前不持有任何股票，并且不处于冷冻期中，对应的「累计最大收益」记为 f[i][2]

// f[i][0] = max(f[i−1][0],f[i−1][2] − prices[i - 1])
// f[i][1] = f[i−1][0] + prices[i - 1]
// f[i][2] = max(f[i−1][1],f[i−1][2])

// 如果在第 n 天还持有股票，无意义，要么卖，要么早卖了，所以结果是 max(f[n][1],f[n][2])
module.exports = maxProfit;