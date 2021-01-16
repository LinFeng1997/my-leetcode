/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfitCount = 0;
    let low = prices[0];

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];

        if (price < low) {
            low = price
        }

        maxProfitCount = Math.max(maxProfitCount, price - low);
    }

    return maxProfitCount;
};

module.exports = maxProfit;