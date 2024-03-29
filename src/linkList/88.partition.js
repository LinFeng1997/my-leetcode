/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const { ListNode } = require('./util');
var partition = function(head, x) {
    let small = new ListNode(-1);
    let large = new ListNode(-1);
    
    let sHead = small;
    let lHead = large;
    
    while (head) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        
        head = head.next;
    }

    large.next = null;
    small.next = lHead.next;

    return sHead.next;
};

module.exports = partition;