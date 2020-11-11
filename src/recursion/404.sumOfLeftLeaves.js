/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;

    let node = root.left;

    return (node && isLeft(node) ? node.val : 0) + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};

function isLeft(node){
    return node.left == null && node.right == null;
}

module.exports = sumOfLeftLeaves;