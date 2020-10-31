/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const mergeTwoLists = require('./21.mergeTwoLists');
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const middle = getMiddle(head);
    const temp = middle.next;
    middle.next = null;

    const left = sortList(head);
    const right = sortList(temp);

    return mergeTwoLists(left,right);
};

function getMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function getLinkLength(head) {
    let i = 0;
    while (head) {
        head = head.next;
        i++
    }

    return i;
}

module.exports = sortList;