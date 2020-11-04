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
var preorderTraversal = function(root) {
    if (!root) return [];
    let stack = [];
    let res = [];

    stack.push(root);

    while (stack.length) {
        let cur = stack.pop();
        res.push(cur.val);

        // 我们先打印左子树，然后右子树
        // 所以先加入栈的是右子树，然后左子树

        if (cur.right) {
            stack.push(cur.right)
        }

        if (cur.left) {
            stack.push(cur.left)
        }
    }

    return res;
};

module.exports = preorderTraversal;