/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    while (left < right) {
        area = Math.max(area, caclArea(height, left, right));

        if (height[right] > height[left]) {
            left++;
        } else {
            right--;
        }
    }

    return area;
};

function caclArea(height, left, right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    return area;
}

module.exports = maxArea;