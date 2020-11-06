import { sortedArrayToBST } from './util';

describe('queue', () => {
  test('102. levelOrder', () => {
    const levelOrder = require('../src/queue/102.levelOrder');

    expect(
      levelOrder(sortedArrayToBST([3, 9, 20, null, null, 15, 7]))
    ).toEqual([[3], [9, 20], [15, 7]]);
  });

  test('107. levelOrderBottom', () => {
    const levelOrderBottom = require('../src/queue/107.levelOrderBottom');

    expect(
      levelOrderBottom(sortedArrayToBST([3, 9, 20, null, null, 15, 7]))
    ).toEqual([[15, 7], [9, 20], [3]]);
  });

  test('103. zigzagLevelOrder', () => {
    const zigzagLevelOrder = require('../src/queue/103.zigzagLevelOrder');

    expect(
      zigzagLevelOrder(sortedArrayToBST([3, 9, 20, null, null, 15, 7]))
    ).toEqual([[3], [20, 9], [15, 7]]);
  });

  test('199. rightSideView', () => {
    const rightSideView = require('../src/queue/199.rightSideView');
    const case1 = sortedArrayToBST([1, 2, 3, null, 5, null, 4]);

    expect(rightSideView(case1)).toEqual([1, 3, 4]);
  });
});
