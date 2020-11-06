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
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let queue = [];
    let res = [];
    queue.push(root);

    let fromLeft = true;
    while (queue.length) {
        res.push([]);
        let level = queue.length;// 关键逻辑，当前层数

        // 满二叉树的情况，就是 1 层 1 个，2 层 2 个，3 层 4 个
        for (let i = 0; i < level; i++) {
            const node = queue.shift();
            const arr = res[res.length - 1];
            fromLeft ? arr.push(node.val) : arr.unshift(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        fromLeft = !fromLeft;
    }

    return res;
};

module.exports = zigzagLevelOrder;