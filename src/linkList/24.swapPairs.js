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
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    const next = head.next;// 需要保存这个节点
    head.next = swapPairs(next.next);
    next.next = head;

    return next;
};

var swapPairs2 = function(head) {
    const dumb = new ListNode(-1);
    dumb.next = head;

    let pre = dumb;// 保存的节点

    while (pre.next && pre.next.next) {
        const node1 = pre.next;
        const node2 = pre.next.next;

        node1.next = node2.next;
        node2.next = node1;
        pre.next = node2;

        pre = node1;
    }


    return dumb.next ;
};

module.exports = swapPairs;
module.exports.swapPairs2 = swapPairs2;