// 双向链表
class ListNode {
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.pre = null;
        this.next = null;
    }

}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = new Map();
        this.length = 0;

        this.dummyHead = new ListNode(0);
        this.dummyTail = new ListNode(0);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.pre = this.dummyHead;
    }

    get(key) {
        const node = this.hash.get(key);

        if (!node) return -1;

        // 此次访问更新，将节点移到头部
        this.moveToHead(node);
        return node.value;
    }

    put(key, value) {
        const node = this.hash.get(key);

        if(!node) {
            // 容量判断
            if (this.capacity === this.length) {
                this.remove()
            }

            let newNode = new ListNode(key,value);
            this.hash.set(key,newNode);
            this.addToHead(newNode);
            this.length ++;
        } else {
            node.value = value;
            this.moveToHead(node);
        }
    }

    remove() {
        const tail = this.dummyTail.pre;
        this.removeNode(tail);
        this.hash.delete(tail.key);
        this.length--;
    }

    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }

    removeNode(node) {
        let pre = node.pre;
        let next = node.next;
        pre.next = next;
        next.pre = pre;
    }

    addToHead(node) {
        node.next = this.dummyHead.next;
        node.pre = this.dummyHead;

        this.dummyHead.next.pre = node;
        this.dummyHead.next = node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;