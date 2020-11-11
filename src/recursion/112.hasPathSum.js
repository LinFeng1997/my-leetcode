/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;

    let val = root.val;
    let rest = sum - val;

    if (rest === 0 && !root.left && !root.right) return true;

    return hasPathSum(root.left,rest) || hasPathSum(root.right,rest)
};

module.exports = hasPathSum;