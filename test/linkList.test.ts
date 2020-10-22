describe('LinkList', () => {
  class ListNode {
    val: any;
    next: ListNode | null;

    constructor(val: any) {
      this.val = val;
      this.next = null;
    }
  }

  const makeLinkList = (arr: number[]) => {
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

  test('206. reverseList', () => {
    const reverseList = require('../src/linkList/206.reverseList');
    const reverseList2 = require('../src/linkList/206.reverseList')
      .reverseList2;
    const makeLinkList = (arr: number[]) => {
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

    expect(reverseList(makeLinkList([1, 2, 3, 4, 5]))).toEqual(
      makeLinkList([5, 4, 3, 2, 1])
    );
    expect(reverseList2(makeLinkList([1, 2, 3, 4, 5]))).toEqual(
      makeLinkList([5, 4, 3, 2, 1])
    );
  });

  test('92. reverseBetween', () => {
    const reverseBetween = require('../src/linkList/92.reverseBetween');
    const reverseBetween2 = require('../src/linkList/92.reverseBetween')
      .reverseBetween2;

    expect(reverseBetween(makeLinkList([1, 2, 3, 4, 5]), 2, 4)).toEqual(
      makeLinkList([1, 4, 3, 2, 5])
    );

    expect(reverseBetween(makeLinkList([1, 2, 3]), 2, 3)).toEqual(
      makeLinkList([1, 3, 2])
    );

    expect(reverseBetween2(makeLinkList([1, 2, 3, 4, 5]), 2, 4)).toEqual(
      makeLinkList([1, 4, 3, 2, 5])
    );
  });
});
