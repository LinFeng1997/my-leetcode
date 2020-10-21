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
var reverseList = function(head) {
    let pre = null;
    let cur = head;

    while (cur !== null) {
        let next = cur.next;
        // 右 -> 左，同时 左 -> 右也被切断
        cur.next = pre;
        // 指针移动
        pre = cur;
        cur = next;
    }
    return pre;
};

var reverseList2 = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let p = reverseList2(head.next);
    // 环
    head.next.next = head;
    // 去掉左 -> 右
    head.next = null;
    return p;
};

module.exports = reverseList;
module.exports.reverseList2 = reverseList2;