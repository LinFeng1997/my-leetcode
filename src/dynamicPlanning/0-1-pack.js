function knapsack01(w,v,c) {
    let n = w.length;
    if (!n) return 0;
    const dp = new Array(c + 1).fill(0); // dp[i] 表示放 v[i] 时，不超过 i 容量，最大的价值

    for (let j = 0;j <= c;j++) {
        dp[j] = j >= w[0] ? v[0] : 0;
    }

    for (let i = 1; i < n; i++) {
        for (let j = c; j >= w[i]; j--) {
            // 放了 v[i],容量仍然没有超
            dp[j] = Math.max(dp[j], v[i] + dp[j - w[i]]);
        }
    }

    return dp[c];
}

// F(i,c) = max(F(i-1,c), v(i) + F(i-1,c - w(i)))
module.exports = knapsack01;