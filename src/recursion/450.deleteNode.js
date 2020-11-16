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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return root;

    if (root.val === key) {
        if (isLeft(root)) {
            root = null;
        }
        
        else if (root.right) {
            root.val = successor(root);
            root.right = deleteNode(root.right,root.val);
        } else {
            root.val = predecessor(root);
            root.left = deleteNode(root.left,root.val);
        }
    } else if (root.val < key) {
        root.right = deleteNode(root.right,key);
    } else if (root.val > key) {
        root.left = deleteNode(root.left,key);
    }

    return root;
};

function isLeft(node){
    return node.left == null && node.right == null;
}

// 比 node 大的最小节点值
function successor(node) {
    node = node.right;
    while (node.left) node = node.left;

    return node.val;
}

// 比 node 小的最大节点值
function predecessor(node) {
    node = node.left;
    while (node.right) node = node.right;

    return node.val;
}

module.exports = deleteNode;