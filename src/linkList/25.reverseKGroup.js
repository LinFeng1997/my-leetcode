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