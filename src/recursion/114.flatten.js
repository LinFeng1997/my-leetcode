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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let cur = root;
    while (cur) {
        while (cur.left) {
            // 将 cur 的前置节点插入到右子树，消除左子树
            const next = cur.left;
            const preNode = predecessor(cur);
            preNode.right = cur.right;

            cur.left = null;
            cur.right = next;
        }

        cur = cur.right;
    }
    return root;
};

// 前序节点：比 node 小的最大节点值
function predecessor(node) {
    node = node.left;
    while (node.right) node = node.right;

    return node;
}

module.exports = flatten;