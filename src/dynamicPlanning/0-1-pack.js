function knapsack01(w,v,c) {
    let n = w.length;
    if (!n) return 0;
    const dp = makeBinaryArray(n,c); // dp[i][j] 表示放 v[i] 时，不超过 j 容量，最大的价值

    for (let j = 0;j <= c;j++) {
        dp[0][j] = j >= w[0] ? v[0] : 0;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= c; j++) {
            dp[i][j] = dp[i - 1][j];

            const diff = j - w[i];
            if (diff >= 0) {
                dp[i][j] = Math.max(dp[i][j], v[i] + dp[i - 1][diff])
            }
        }
    }


    return dp[n - 1][c];
}

function makeBinaryArray(m, n) {
    let arr = new Array(m).fill(null);

    return arr.map(_ => new Array(n).fill(0));
}

// F(i,c) = max(F(i-1,c), v(i) + F(i-1,c - w(i)))
module.exports = knapsack01;