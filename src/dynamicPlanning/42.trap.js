/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//
//     let sum = 0;
//
//     // i - 1 >= 0，所以从 1 开始，i + 1 <= height.length - 1，所以到 height.length - 2 结束
//     for (let i = 1; i < height.length - 1; i++) {
//         let maxLeft = 0;
//         let maxRight = 0;
//
//         for (let j = i - 1; j >= 0; j--) {
//             if (height[j] > maxLeft) {
//                 maxLeft = height[j]
//             }
//         }
//
//         for (let j = i + 1; j < height.length; j++) {
//             if (height[j] > maxRight) {
//                 maxRight = height[j]
//             }
//         }
//
//         let min = Math.min(maxLeft, maxRight);
//
//         // 只有较小的一段大于当前列的高度才会有水，其他情况不会有水
//         if (min > height[i]) {
//             sum += min - height[i]
//         }
//     }
//
//     return sum;
// };

var trap = function (height) {
    let sum = 0;
    let maxLeftMemo = new Array(height.length).fill(0);
    let maxRightMemo = new Array(height.length).fill(0);

    for (let i = 1; i < height.length - 1; i++) {
        // 不包含 i 自己的高度
        maxLeftMemo[i] = Math.max(maxLeftMemo[i - 1], height[i - 1])
    }

    for (let i = height.length - 2; i >= 0; i--) {
        // 不包含 i 自己的高度
        maxRightMemo[i] = Math.max(maxRightMemo[i + 1], height[i + 1])
    }

    for (let i = 1; i < height.length - 1; i++) {
        let min = Math.min(maxLeftMemo[i], maxRightMemo[i]);

        // 只有较小的一段大于当前列的高度才会有水，其他情况不会有水
        if (min > height[i]) {
            sum += min - height[i]
        }
    }

    return sum;
};

module.exports = trap;