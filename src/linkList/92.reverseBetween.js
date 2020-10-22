/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let left = head;
    let stop = false;
    
    function reverse(right,m,n) {
        if (n === 1) {
            return;
        }

        right = right.next;

        if (m > 1) {
            left = left.next;
        }

        reverse(right,m-1,n-1);
        
        if (left === right
        || right.next === left
        ){
            stop = true;
        }

        if (!stop) {
            const temp = left.val;
            left.val = right.val;
            right.val = temp;

            left = left.next;
        }
    }
    
    reverse(head,m,n);
    
    return head;
};

var reverseBetween2 = function(head, m, n) {
    let cur = head;
    let pre = null;

    while (m > 1) {
        pre = cur;
        cur = cur.next;
        m--;
        n--;
    }

    let con = pre;
    let tail = cur;

    while (n > 0)  {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        n--;
    }

    if (con !== null) {
        con.next = pre
    } else {
        head = pre
    }

    tail.next = cur;
    return head;
};

module.exports = reverseBetween;
module.exports.reverseBetween2 = reverseBetween2;