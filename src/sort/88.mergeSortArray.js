/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let cur = m + n - 1;

    while ((p1 >= 0) && (p2 >= 0)) {
        const num1 = nums1[p1];
        const num2 = nums2[p2];
        if (num1 < num2) {
            nums1[cur] = num2;
            p2--
        } else {
            nums1[cur] = num1;
            p1--
        }
        cur--
    }

    // add missing elements from nums2
    nums2.slice(0, p2 + 1).forEach((item, index) => {
        nums1[index] = item;
    })
};
module.exports = merge;

// module.exports = merge;var merge = function (nums1, m, nums2, n) {
//     let rst = [];
//     let p1 = p2 = 0;
//     let cur = 0;
//
//     while ((p1 < m) && (p2 < n)) {
//         const num1 = nums1[p1]
//         const num2 = nums2[p2]
//         if (num1 < num2) {
//             rst[cur] = num1;
//             p1++
//         } else {
//             rst[cur] = num2;
//             p2++
//         }
//         cur++
//     }
//
//     if (p1 < m) {
//         rst = rst.concat(nums1.slice(p1));
//     }
//
//     if (p2 < n) {
//         rst = rst.concat(nums2.slice(p2));
//     }
//
//     rst.forEach((item,index)=>{
//         nums1[index] = item;
//     });
//
//     return rst;
// };
// module.exports = merge;