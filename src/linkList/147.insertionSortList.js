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
var insertionSortList = function(head) {
    if (!head) {
        return null;
    }
    // 1 2 4 3 5
    let dummy = new head.constructor(-1);

    let cur = head;
    let pre = dummy;
    let next;

    while (cur) {
        next = cur.next;

        while (pre.next && pre.next.val <= cur.val ) {
            pre = pre.next
        }

        // cur 3 pre 2

        // 3 -> 4
        cur.next = pre.next;
        // 2 -> 3 -> 4
        // 第一次 -1 => 1，第二次 -1 -> 1 -> 2
        pre.next = cur;

        // 还原 pre
        pre = dummy;

        cur = next;
    }

    return dummy.next;
};

module.exports = insertionSortList;