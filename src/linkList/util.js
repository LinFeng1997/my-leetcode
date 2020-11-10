class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const makeLinkList = (arr) => {
    let cur = new ListNode(arr[0]);
    let head = cur;

    for (let i = 1; i < arr.length; i++) {
        const node = new ListNode(arr[i]);
        cur.next = node;
        cur = node;
    }

    cur.next = null;
    return head;
};

module.exports.ListNode = ListNode;
module.exports.makeLinkList = makeLinkList;