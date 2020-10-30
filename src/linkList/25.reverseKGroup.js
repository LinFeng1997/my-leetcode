/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let tail = head;

    for (let i = 0;i<k;i++){
        if (tail) {
            tail = tail.next;
        } else {
            return head;
        }
    }

    const newHead = reverse(head,tail);
    head.next = reverseKGroup(tail,k);
    return newHead;
};

function reverse(head,tail){
    let pre = null;
    let next = head.next;

    while (head !== tail) {
        next = head.next;
        head.next = pre;

        pre = head;
        head = next;
    }

    return pre;
}
module.exports = reverseKGroup;


const reversePartial = (head, tail) => {
    let cur = head; // 1
    let prev = tail.next; // 4

    while (cur !== tail){
        // 2 !! 3
        const next = cur.next;

        // 1 -> 4 !! 2 -> 1
        cur.next = prev;

        // 1 !! 2
        prev = cur;
        // 2 !! 3
        cur = next;
    }

    // 3 -> 2 -> 1 -> 4...
    tail.next = prev;

    return tail;
};

module.exports.reverseKGroupWithLoop = (head, k) => {
    const hair = new head.constructor(-1);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }

        const newHead = tail.next;
        pre.next = reversePartial(head, tail);
        pre = head;
        head = newHead;
    }

    return hair.next;
};