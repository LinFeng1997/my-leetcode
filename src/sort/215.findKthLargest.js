/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const solution = new Solution(nums);
    return solution.quickselect(0, nums.length - 1, nums.length - k);
};

class Solution {
    constructor(nums) {
        this.nums = nums;
    }

    swap(source, target) {
        const array = this.nums;
        if (array[source] === array[target]) {
            return;
        }
        let temp = array[source];
        array[source] = array[target];
        array[target] = temp;
    }

    partition(left, right, index) {
        const pivot = this.nums[index];

        // 1. move pivot to end
        this.swap(index, right);

        // 2. move all smaller elements to the left
        for (let i = left; i <= right; i++) {
            if (this.nums[i] < pivot) {
                this.swap(i, left);
                left++
            }
        }
        // 3. move pivot to its final place
        this.swap(left, right);

        return left;
    }

    quickselect(left, right, k) {
        /*
       Returns the k-th smallest element of list within left..right.
       */

        if (left === right) {
            return this.nums[left]
        }

        // select a random pivot_index
        const random = Math.random() * (right - left);
        let pivotIndex = left + Math.floor(random);

        pivotIndex = this.partition(left, right, pivotIndex);

        // the pivot is on (N - k)th smallest position
        if (k === pivotIndex) {
            return this.nums[k]
        } else if (k < pivotIndex) {
            return this.quickselect(left, pivotIndex - 1, k)
        } else {
            return this.quickselect(pivotIndex + 1, right, k)
        }

    }

}

module.exports = findKthLargest;