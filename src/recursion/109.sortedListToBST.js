/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const { TreeNode } = require('../../test/util');

var sortedListToBST = function(head) {
    return buildTree(head,null);
};

function buildTree(left,right) {
    if (left === right) return null;

    let mid = getMid(left,right);
    let root = new TreeNode(mid.val);
    // 注意边界
    root.left = buildTree(left, mid);
    root.right = buildTree(mid.next, right);

    return root
}

function getMid(head,tail) {
    let slow = head;
    let fast = head;

    // 这里快指针是和右节点比较
    while (fast && fast.next && fast !== tail && fast.next !== tail) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = sortedListToBST;