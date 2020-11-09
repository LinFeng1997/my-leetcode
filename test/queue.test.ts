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

  test('279. rightSideView', () => {
    const numSquares = require('../src/queue/279.numSquares');

    expect(numSquares(12)).toEqual(3);
    expect(numSquares(13)).toEqual(2);
  });

  test('127. ladderLength', () => {
    const ladderLength = require('../src/queue/127.ladderLength');

    expect(
      ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
    ).toEqual(5);
    expect(
      ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])
    ).toEqual(0);
  });

  test('126. findLadders', () => {
    const ladderLength = require('../src/queue/126.findLadders');

    expect(
      ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])
    ).toEqual([
      ['hit', 'hot', 'dot', 'dog', 'cog'],
      ['hit', 'hot', 'lot', 'log', 'cog'],
    ]);

    expect(
      ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])
    ).toEqual([]);
  });

  test('347. topKFrequent', () => {
    const topKFrequent = require('../src/queue/347.topKFrequent');
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);

    expect(topKFrequent([1], 1)).toEqual([1]);

    expect(topKFrequent([4,1,-1,2,-1,2,3], 2)).toEqual([-1,2]);
  });
});
