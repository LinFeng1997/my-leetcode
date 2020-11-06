/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let queue = [];
    let res = [];
    queue.push(root);

    while (queue.length) {
        res.push([]);
        let level = queue.length;// 关键逻辑，当前层数

        // 满二叉树的情况，就是 1 层 1 个，2 层 2 个，3 层 4 个
        for (let i = 0; i < level; i++) {
            const node = queue.shift();
            const arr = res[res.length - 1];
            arr.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return res;
};

module.exports = levelOrder;