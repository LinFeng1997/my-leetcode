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

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var mergeTwoLists = function(l1, l2) {
    const dumb = new ListNode(-1);
    let cur = dumb;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }

        cur = cur.next;
    }

    if (l1 === null) {
        cur.next = l2;
    }

    if (l2 === null) {
        cur.next = l1;
    }

    return dumb.next;
};

module.exports = mergeTwoLists;