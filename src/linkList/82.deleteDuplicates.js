/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var deleteDuplicates = function(head) {
    const dumb = new ListNode(-1);
    dumb.next = head;
    let cur = head;
    let pre = dumb;

    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            // 平推
            while (cur && cur.next && cur.val === cur.next.val){
                cur = cur.next
            }

            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = cur;
            cur = cur.next;
        }
    }

    return dumb.next;
};

module.exports = deleteDuplicates;