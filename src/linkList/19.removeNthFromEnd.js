/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) { // 为什么需要虚拟头节点？因为可能删除的是头节点。
    let dummy = new head.constructor(-1);
    dummy.next = head;

    let slow = dummy,fast = head;
    for (let i = 0;i < n;i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

module.exports = removeNthFromEnd;