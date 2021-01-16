/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return null;
    }

    if (!root.next) {
        root.next = null;
    }
    
    if (root && root.left && root.right) {
        // 相同父节点
        root.left.next = root.right;

        // 不同父节点
        root.right.next = root.next ? root.next.left : null;

        root.left = connect(root.left);
        root.right = connect(root.right);
    }

    return root;
};

module.exports = connect;