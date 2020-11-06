/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    let queue = [];
    let res = [];
    queue.push(root);

    while (queue.length) {
        let level = queue.length;// 关键逻辑，当前层数

        // 满二叉树的情况，就是 1 层 1 个，2 层 2 个，3 层 4 个
        for (let i = 0; i < level; i++) {
            const node = queue.shift();

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            if (i === level - 1) {
                res.push(node.val);
            }
        }
    }

    return res;
};

module.exports = rightSideView;