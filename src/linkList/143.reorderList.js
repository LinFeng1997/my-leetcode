/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reverseList = require('./206.reverseList');

var reorderList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let slow = head,fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // cut
    let left = head;
    let right = cut(head,slow);

    // reverse
    let reverseRight = reverseList(right);

    // merge
    mergeTwoLists(left,reverseRight);

    return head;
};

function cut(head,node) {
    let cur = head;

    while (cur && cur !== node) {
        cur = cur.next
    }

    if (!cur) return null;

    let next = cur.next;
    cur.next = null;

    return next;
}

function mergeTwoLists(l1, l2) {
    while (l1 && l2) {
        const node1 = l1.next;
        const node2 = l2.next;

        l1.next = l2;
        l1 = node1;

        l2.next = l1;
        l2 = node2;
    }
};

module.exports = reorderList;