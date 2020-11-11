/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;

    if (!root.left && !root.right) {
        return 1;
    }

    let rst = 100000;
    if (root.left) {
        rst = Math.min(minDepth(root.left),rst)
    }

    if (root.right) {
        rst = Math.min(minDepth(root.right),rst)
    }

    return rst + 1;
};

module.exports = minDepth;