/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head;
    }

    let length = getLinkLength(head);
    let step = k % length;

    if (step === 0) {
        return head;
    }

    let fast = head,slow = head; // 这题和 19 的区别就在于它不需要考虑移除头节点的情况

    for (let i = 0;i < step;i++) {
        fast = fast.next;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    const newHead = slow.next;
    slow.next = null;
    fast.next = head;

    return newHead;
};

function getLinkLength(head) {
    let i = 0;
    while (head) {
        head = head.next;
        i++
    }

    return i;
}

module.exports = rotateRight;