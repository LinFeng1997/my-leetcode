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
var isSymmetric = function(root) {
    if (!root) return true;

    return check(root.left,root.right);
};

function check(p,q) {
    if (!p && !q) {
        return true
    }

    if (!p || !q) {
        return false
    }

    return p.val === q.val && check(p.left,q.right) && check(p.right,q.left);
}
module.exports = isSymmetric;