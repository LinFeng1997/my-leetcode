/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const {ListNode} = require('../../test/util');

class Node extends ListNode{
    constructor(val,next,random){
        super(val);
        this.next = next;
        this.random = random;
    }
}

var copyRandomList = function(head) {
    let visited = new Map();

    function getCloneNode(node) {
        if (node) {
            if (visited.has(node)) {
                return visited.get(node);
            } else {
                const newNode = new Node(node.val,null,null);
                visited.set(node,newNode);
                return newNode;
            }
        } else {
            return null;
        }
    }

    if (!head) {
        return null;
    }

    let oldNode = head;
    let newNode = getCloneNode(oldNode);

    while (oldNode) {
        newNode.random = getCloneNode(oldNode.random);
        newNode.next = getCloneNode(oldNode.next);

        oldNode = oldNode.next;
        newNode = newNode.next;
    }

    return visited.get(head);
};

// 最后返回的是哈希表里存的链表
module.exports = copyRandomList;