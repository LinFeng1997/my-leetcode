/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        if (nums[i] === val) {
            nums[i] = nums[j];
            j--;
        } else {
            i++;
        }
    }
    return j + 1;
    // let index = 0
    // for(let i = 0; i < nums.length; i++) {
    //     if(nums[i] !== val) {
    //         nums[index] = nums[i]
    //         index ++
    //     }
    // }
    // return index
};

module.exports = removeElement;