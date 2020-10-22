/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var removeElements = function(head, val) {
    let dumb = new ListNode(-1);
    dumb.next = head;
    let cur = head;
    let pre = dumb;

    while (cur){
        if (cur.val === val){
            pre.next = cur.next;
        } else {
            pre = cur;
        }
        cur = cur.next
    }

    return dumb.next;
};

// var removeElements = function(head, val) {
//     let dumb = new ListNode(-1);
//     dumb.next = head;
//     let cur = dumb;
//     while (cur && cur.next){
//         if (cur.next.val === val){
//             cur.next = cur.next.next;
//         } else {
//             cur = cur.next
//         }
//     }
//
//     return dumb.next;
// };

module.exports = removeElements;