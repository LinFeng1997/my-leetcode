/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }

    const len = coins.length;
    const dp = new Array(amount + 1).fill(amount + 1);

    dp[0] = 0;

    for (let j = 1; j <= amount; j++) {
        for (let i = 0; i < len; i++) {
            const coin = coins[i];

            if (j >= coin) {
                dp[j] = Math.min(dp[j], dp[j - coin] + 1)
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

// dp[j] 表示总共有 j 块钱的情况下，最小兑换的零钱数
// F(j) = min(F(j - coins[0]),F(j - coins[1])...F(j - coins[i]))  + 1

// 完全背包问题，dp 循环放外面
module.exports = coinChange;