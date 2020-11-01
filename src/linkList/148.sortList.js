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

const mergeTwoLists = require('./21.mergeTwoLists');
var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const middle = getMiddle(head);
    const temp = middle.next;
    middle.next = null;

    const left = sortList(head);
    const right = sortList(temp);

    return mergeTwoLists(left,right);
};

function getMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

module.exports = sortList;

var sortListWithLoop = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let length = getLinkLength(head);

    let dummy = new head.constructor(-1);
    dummy.next = head;

    for (let i = 1;i<length; i*=2) {
        let cur = dummy.next,
        pre = dummy;

        while (cur) {
            const left = cur;
            const right = cut(left,i);

            cur = cut(right,i);

            pre.next = mergeTwoLists(left,right);

            while (pre.next) {
                pre = pre.next; // pre 指向排序好的子链表尾部
            }
        }
    }

    return dummy.next;
};

// 切割并返回后面的链表
function cut(head,n) {
    let p = head;
    while (--n && p) {
        p = p.next;
    }

    if (!p) return null;
    const next = p.next;
    p.next = null;

    return next;
}

function getLinkLength(head) {
    let i = 0;
    while (head) {
        head = head.next;
        i++
    }

    return i;
}

module.exports.sortListWithLoop = sortListWithLoop;
