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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    let stack = [];
    let res = [];

    let cur = root;
    let pre;

    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left
        }

        cur = stack.pop();

        if (cur.right && pre !== cur.right) { // pre !== cur.right 说明左右子树都遍历完了
            stack.push(cur);
            cur = cur.right;
        } else {
            res.push(cur.val);
            pre = cur;
            cur = null;
        }
    }

    return res;
};

module.exports = postorderTraversal;