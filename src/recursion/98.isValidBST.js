/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    return helper(root,-Infinity,Infinity)
};

function helper(node,lower,upper) {
    if (!node) return true;

    if (node.val <= lower || node.val >= upper) {
        return false;
    }

    return helper(node.left,lower,node.val) && helper(node.right,node.val,upper)
}

module.exports = isValidBST;