/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const PriorityQueue = require('./priorityQueue');
const { ListNode } = require('../linkList/util');

var mergeKLists = function(lists) {
    if (lists.length <= 1) return lists[0] && lists[0].val != null ? lists[0] : null;
    const queue = new PriorityQueue((a,b) => b.value - a.value > 0);

    lists.forEach((list) => {
        if (list && list.val != null) {
            queue.push({
                key: list,
                value: list.val
            })
        }
    });

    if (queue.isEmpty()) {
        return null;
    }

    const dummy = new ListNode(-1);
    let cur = dummy;
    while (!queue.isEmpty()) {
        const {key} = queue.pop();
        cur.next = key;
        cur = cur.next;

        const next = key.next;

        if (next) {
            queue.push({
                key: next,
                value: next.val
            })
        }

    }
    return dummy.next;
};

module.exports = mergeKLists;