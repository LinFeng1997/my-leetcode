/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const reverseList = require('./206.reverseList');
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }
    // find middle
    let slow = head,fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // cut
    let left = head;
    let right = cut(head,slow);

    // reverse right
    let reverseRight = reverseList(right);

    // diff
    return diff(left,reverseRight);
};

function diff(l1, l2) {
    let node1 = l1;
    let node2 = l2;
    while (node1 && node2) {
        if (node1.val !== node2.val) {
            return false;
        }

        node1 = node1.next;
        node2 = node2.next;
    }

    if (!node1 || !node2) {
        return true;
    }

    return false;
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

module.exports = isPalindrome;