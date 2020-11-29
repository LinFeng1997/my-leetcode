describe('dynamic planning', () => {
  test('70.climbStairs', () => {
    const climbStairs = require('../src/dynamicPlanning/70.climbStairs');

    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
  });

  test('120.minimumTotal', () => {
    const minimumTotal = require('../src/dynamicPlanning/120.minimumTotal');

    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
  });

  test('64.minPathSum', () => {
    const minPathSum = require('../src/dynamicPlanning/64.minPathSum');

    expect(
      minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ])
    ).toBe(7);
    expect(
      minPathSum([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toBe(12);
  });

  test('62.uniquePaths', () => {
    const uniquePaths = require('../src/dynamicPlanning/62.uniquePaths');

    expect(uniquePaths(3, 2)).toBe(3);

    expect(uniquePaths(7, 3)).toBe(28);
  });

  test('63.uniquePathsWithObstacles', () => {
    const uniquePathsWithObstacles = require('../src/dynamicPlanning/63.uniquePathsWithObstacles');

    expect(
      uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toBe(2);

    expect(
      uniquePathsWithObstacles([
        [0, 1],
        [0, 0],
      ])
    ).toBe(1);

    expect(
      uniquePathsWithObstacles([
        [0, 0],
        [1, 1],
        [0, 0],
      ])
    ).toBe(0);
  });

  test('343.integerBreak', () => {
    const integerBreak = require('../src/dynamicPlanning/343.integerBreak');

    expect(integerBreak(2)).toBe(1);

    expect(integerBreak(10)).toBe(36);
  });

  test('279. numSquares', () => {
    const numSquares = require('../src/dynamicPlanning/279.numSquares');

    expect(numSquares(12)).toEqual(3);
    expect(numSquares(13)).toEqual(2);
  });

  test('91. numDecodings', () => {
    const numDecodings = require('../src/dynamicPlanning/91.numDecodings');

    expect(numDecodings('12')).toEqual(2);
    expect(numDecodings('226')).toEqual(3);
    expect(numDecodings('0')).toEqual(0);
    expect(numDecodings('1')).toEqual(1);
    expect(numDecodings('2')).toEqual(1);
  });

  test('198.rob', () => {
    const rob = require('../src/dynamicPlanning/198.rob');

    expect(rob([1, 2, 3, 1])).toEqual(4);
    expect(rob([2, 7, 9, 3, 1])).toEqual(12);
  });

  test('213.rob', () => {
    const rob = require('../src/dynamicPlanning/213.rob');

    expect(rob([1, 2, 3, 1])).toEqual(4);
    expect(rob([2, 3, 2])).toEqual(3);
    expect(rob([1])).toEqual(1);
  });

  test('337.rob', () => {
    const rob = require('../src/dynamicPlanning/337.rob');
    const { createTree } = require('./util');

    expect(rob(createTree([3, 2, 3, null, 3, null, 1]))).toEqual(7);
    expect(rob(createTree([3, 4, 5, 1, 3, null, 1]))).toEqual(9);
  });

  test('309.maxProfit', () => {
    const maxProfit = require('../src/dynamicPlanning/309.maxProfit');

    expect(maxProfit([1, 2, 3, 0, 2])).toBe(3);
  });

  test('knapsack01', () => {
    const knapsack01 = require('../src/dynamicPlanning/0-1-pack');

    expect(knapsack01([1,2,3],[6,10,12],5)).toBe(22);
  });
});
