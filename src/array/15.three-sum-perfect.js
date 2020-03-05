/**
 * 延续 two-sum 的思路，用配对，但这道题要 3 个指针
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let rst = [];
    if (nums.length < 3) {
        return [];
    }

    // sort to search
    nums.sort((a, b) => a - b);

    for (let now = 0; now < nums.length - 2; now++) {
        // optimize
        if (nums[now] > 0) {
            return rst;
        }

        // repeat target
        if (now > 0 && nums[now] === nums[now - 1]) {
            continue;
        }

        for (let left = now + 1, right = nums.length - 1; left < right;) {
            if (nums[now] + nums[left] + nums[right] === 0) {
                rst.push([nums[now], nums[left], nums[right]]);
                left++;
                right--;

                // repect left
                while (nums[left] === nums[left - 1]) left++;

                // repect right
                while (nums[right] === nums[right + 1]) right--;
            } else if (nums[now] + nums[left] + nums[right] > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return rst;
};

module.exports = threeSum;