/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let a = numbers[left];
        let b = numbers[right];
        const rst = a + b;

        if (rst === target) {
            return [left + 1, right + 1]
        } else if (rst < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};

module.exports = twoSum;