/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let rst = [];
    if (nums.length < 4) {
        return rst;
    }

    nums.sort((a, b) => a - b);

    for (let now = 0; now < nums.length - 3; now++) {
        // optimize
        if (nums[now] + nums[now + 1] + nums[now + 2] + nums[now + 3] > target) {
            return rst;
        }

        // now repeat
        if (now > 0 && nums[now] === nums[now - 1]) {
            continue;
        }

        for (let left = now + 1; left < nums.length - 2; left++) {

            // left repeat
            if (left > now + 1 && nums[left] === nums[left - 1]) {
                continue;
            }

            for (let mid = left + 1, right = nums.length - 1; mid < right;) {
                if (nums[now] + nums[left] + nums[mid] + nums[right] === target) {
                    rst.push([nums[now], nums[left], nums[mid], nums[right]]);
                    right--;
                    mid++;

                    // mid repeat
                    while (nums[mid] === nums[mid - 1]) {
                        mid++;
                    }
                    // right repeat
                    while (nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (nums[now] + nums[left] + nums[mid] + nums[right] < target) {
                    mid++;
                } else {
                    right--;
                }
            }
        }

    }

    return rst;
};

module.exports = fourSum;