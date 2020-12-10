/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const {ListNode} = require('../../test/util')
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let head = null;
    let tail = null;

    while (l1 || l2) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = parseInt(sum / 10);

        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next
        }

        if (l1) {
            l1 = l1.next
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry) {
        tail.next = new ListNode(carry);
    }

    return head;
};

module.exports = addTwoNumbers;