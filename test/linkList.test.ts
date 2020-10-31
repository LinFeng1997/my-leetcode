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

  test('83. deleteDuplicates', () => {
    const deleteDuplicates = require('../src/linkList/83.deleteDuplicates');

    expect(deleteDuplicates(makeLinkList([1, 1, 2]))).toEqual(
      makeLinkList([1, 2])
    );
    expect(deleteDuplicates(makeLinkList([1, 1, 2, 3, 3]))).toEqual(
      makeLinkList([1, 2, 3])
    );
  });

  test('203. removeElements', () => {
    const removeElements = require('../src/linkList/203.removeElements');

    expect(removeElements(makeLinkList([1, 2, 6, 3, 4, 5, 6]), 6)).toEqual(
      makeLinkList([1, 2, 3, 4, 5])
    );
  });

  test('82. deleteDuplicates', () => {
    const deleteDuplicates = require('../src/linkList/82.deleteDuplicates');

    expect(deleteDuplicates(makeLinkList([1, 2, 3, 3, 4, 4, 5]))).toEqual(
      makeLinkList([1, 2, 5])
    );

    expect(deleteDuplicates(makeLinkList([1, 1, 1, 2, 3]))).toEqual(
      makeLinkList([2, 3])
    );
  });

  test('21. mergeTwoLists', () => {
    const mergeTwoLists = require('../src/linkList/21.mergeTwoLists');

    expect(
      mergeTwoLists(makeLinkList([1, 2, 4]), makeLinkList([1, 3, 4]))
    ).toEqual(makeLinkList([1, 1, 2, 3, 4, 4]));
  });

  test('24. swapPairs', () => {
    const swapPairs = require('../src/linkList/24.swapPairs');

    expect(swapPairs(makeLinkList([1, 2, 3, 4]))).toEqual(
      makeLinkList([2, 1, 4, 3])
    );

    expect(swapPairs(makeLinkList([]))).toEqual(makeLinkList([]));

    expect(swapPairs(makeLinkList([1]))).toEqual(makeLinkList([1]));
  });

  test('24. swapPairs with loop', () => {
    const swapPairs = require('../src/linkList/24.swapPairs').swapPairs2;

    expect(swapPairs(makeLinkList([1, 2, 3, 4]))).toEqual(
      makeLinkList([2, 1, 4, 3])
    );

    expect(swapPairs(makeLinkList([]))).toEqual(makeLinkList([]));

    expect(swapPairs(makeLinkList([1]))).toEqual(makeLinkList([1]));
  });

  test('25. reverseKGroup', () => {
    const reverseKGroup = require('../src/linkList/25.reverseKGroup');

    expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 10)).toEqual(
      makeLinkList([1, 2, 3, 4, 5])
    );

    expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 2)).toEqual(
      makeLinkList([2, 1, 4, 3, 5])
    );
    expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 3)).toEqual(
      makeLinkList([3, 2, 1, 4, 5])
    );

    expect(reverseKGroup(makeLinkList([1, 2]), 2)).toEqual(
      makeLinkList([2, 1])
    );
  });

  test('25. reverseKGroup with loop', () => {
    const reverseKGroup = require('../src/linkList/25.reverseKGroup')
      .reverseKGroupWithLoop;

    expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 10)).toEqual(
      makeLinkList([1, 2, 3, 4, 5])
    );

    expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 2)).toEqual(
      makeLinkList([2, 1, 4, 3, 5])
    );

    expect(reverseKGroup(makeLinkList([1, 2, 3, 4, 5]), 3)).toEqual(
      makeLinkList([3, 2, 1, 4, 5])
    );

    expect(reverseKGroup(makeLinkList([1, 2]), 2)).toEqual(
      makeLinkList([2, 1])
    );
  });

  test('147. insertionSortList', () => {
    const insertionSortList = require('../src/linkList/147.insertionSortList');

    expect(insertionSortList(makeLinkList([4, 2, 1, 3]))).toEqual(
      makeLinkList([1, 2, 3, 4])
    );

    expect(insertionSortList(makeLinkList([1, 2, 3, 4]))).toEqual(
      makeLinkList([1, 2, 3, 4])
    );

    expect(insertionSortList(makeLinkList([-1, 5, 3, 4, 0]))).toEqual(
      makeLinkList([-1, 0, 3, 4, 5])
    );
  });

  test('148. sortList', () => {
    const sortList = require('../src/linkList/148.sortList');

    expect(sortList(makeLinkList([4, 2, 1, 3]))).toEqual(
      makeLinkList([1, 2, 3, 4])
    );
    //
    expect(sortList(makeLinkList([1, 2, 3, 4]))).toEqual(
      makeLinkList([1, 2, 3, 4])
    );

    expect(sortList(makeLinkList([-1, 5, 3, 4, 0]))).toEqual(
      makeLinkList([-1, 0, 3, 4, 5])
    );
  });
});
