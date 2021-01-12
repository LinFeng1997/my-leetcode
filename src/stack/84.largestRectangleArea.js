/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let len = heights.length;
    let left = new Array(len).fill(-1);
    let right = new Array(len).fill(len);

    let stack = [];

    const peek = () => stack[stack.length - 1]
    for (let i = 0; i < len; i++) {
        while (stack.length && heights[peek()] >= heights[i]) {
            right[peek()] = i;
            stack.pop();
        }

        left[i] = stack.length ? peek() : -1;
        stack.push(i);
    }

    let ans = 0;

    for (let i = 0; i < len; i++) {
        ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
    }

    return ans;
};

module.exports = largestRectangleArea;