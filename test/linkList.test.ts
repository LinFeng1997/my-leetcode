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

  test('148. sortList with loop', () => {
    const sortList = require('../src/linkList/148.sortList').sortListWithLoop;

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

    expect(sortList(makeLinkList([3, 2, 4]))).toEqual(makeLinkList([2, 3, 4]));
  });

  test('237. deleteNode', () => {
    const deleteNode = require('../src/linkList/237.deleteNode');
    const makeList = () => makeLinkList([4, 5, 1, 9]);

    const list1 = makeList();
    deleteNode(list1.next);
    expect(list1).toEqual(makeLinkList([4, 1, 9]));

    const list2 = makeList();
    // @ts-ignore
    deleteNode(list2.next.next);
    expect(list2).toEqual(makeLinkList([4, 5, 9]));
  });

  test('19. removeNthFromEnd', () => {
    const removeNthFromEnd = require('../src/linkList/19.removeNthFromEnd');
    expect(removeNthFromEnd(makeLinkList([1, 2, 3, 4, 5]), 2)).toEqual(
      makeLinkList([1, 2, 3, 5])
    );
    expect(removeNthFromEnd(makeLinkList([1]), 1)).toEqual(null);
  });

  test('61. rotateRight', () => {
    const rotateRight = require('../src/linkList/61.rotateRight');
    expect(rotateRight(makeLinkList([1, 2, 3, 4, 5]), 2)).toEqual(
      makeLinkList([4, 5, 1, 2, 3])
    );
    expect(rotateRight(makeLinkList([0, 1, 2]), 4)).toEqual(
      makeLinkList([2, 0, 1])
    );
  });

  test('143. reorderList', () => {
    const reorderList = require('../src/linkList/143.reorderList');
    expect(reorderList(makeLinkList([1, 2, 3, 4]))).toEqual(
      makeLinkList([1, 4, 2, 3])
    );
    expect(reorderList(makeLinkList([1, 2, 3, 4, 5]))).toEqual(
      makeLinkList([1, 5, 2, 4, 3])
    );
  });

  test('2.addTwoNumbers', () => {
    const addTwoNumbers = require('../src/linkList/2.addTwoNumbers');
    const { makeLinkList } = require('./util');

    //
    expect(
      addTwoNumbers(makeLinkList([2, 4, 3]), makeLinkList([5, 6, 4]))
    ).toEqual(makeLinkList([7, 0, 8]));

    expect(
      addTwoNumbers(
        makeLinkList([9, 9, 9, 9, 9, 9, 9]),
        makeLinkList([9, 9, 9, 9])
      )
    ).toEqual(makeLinkList([8, 9, 9, 9, 0, 0, 0, 1]));
  });

  test('88.partition', () => {
    const partition = require('../src/linkList/88.partition');
    const { makeLinkList } = require('../test/util');

    //
    expect(partition(makeLinkList([1, 4, 3, 2, 5, 2]), 3)).toEqual(
      makeLinkList([1, 2, 2, 4, 3, 5])
    );
  });
});
