/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let len = nums1.length + nums2.length;

    function getKthElement(k) { // index = k - 1
        let len1 = nums1.length;
        let len2 = nums2.length;
        let index1 = 0, index2 = 0;// 两个指针

        while (true) {
            // 边界情况，返回长数组的第 k 个元素
            if (index1 === len1) {
                return nums2[index2 + k - 1]
            }

            if (index2 === len2) {
                return nums1[index1 + k - 1]
            }

            // 循环结束条件
            if (k === 1) {
                return Math.min(nums1[index1], nums2[index2])
            }

            // 想办法排除 k/2 个元素，整两个新指针来知道排除谁
            let half = Math.floor(k / 2);
            let newIndex1 = Math.min(index1 + half, len1) - 1;
            let newIndex2 = Math.min(index2 + half, len2) - 1;
            let pivot1 = nums1[newIndex1];
            let pivot2 = nums2[newIndex2];

            if (pivot1 < pivot2) { // 排除 pivot1 及其左边的元素
                k -= (newIndex1 - index1 + 1);
                index1 = newIndex1 + 1
            } else { // 排除 pivot1 及其右边的元素
                k -= (newIndex2 - index2 + 1);
                index2 = newIndex2 + 1
            }
        }

    }

    if (len % 2 === 1) { // 中位数为一个
        let mid = Math.floor(len / 2);
        let median = getKthElement(mid + 1);

        return median;

    } else { // 中位数为两个除 2
        let mid = Math.floor(len / 2);
        let mid2 = Math.floor(len / 2) - 1;

        let median = (getKthElement(mid + 1) + getKthElement(mid2 + 1)) / 2;
        return median;
    }

};

module.exports = findMedianSortedArrays;