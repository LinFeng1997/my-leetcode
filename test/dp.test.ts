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

    expect(knapsack01([1, 2, 3], [6, 10, 12], 5)).toBe(22);
  });

  test('416.canPartition', () => {
    const canPartition = require('../src/dynamicPlanning/416.canPartition');

    expect(canPartition([1, 5, 11, 5])).toBe(true);
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });

  test('322.coinChange', () => {
    const coinChange = require('../src/dynamicPlanning/322.coinChange');

    expect(coinChange([1, 2, 5], 11)).toBe(3);
    expect(coinChange([2], 3)).toBe(-1);
    expect(coinChange([1], 0)).toBe(0);
    expect(coinChange([1], 2)).toBe(2);
  });

  test('377.combinationSum4', () => {
    const combinationSum4 = require('../src/dynamicPlanning/377.combinationSum4');

    expect(combinationSum4([1, 2, 3], 4)).toBe(7);
  });

  test('474.findMaxForm', () => {
    const findMaxForm = require('../src/dynamicPlanning/474.findMaxForm');

    expect(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3)).toBe(4);
    expect(findMaxForm(['10', '0', '1'], 1, 1)).toBe(2);
  });

  test('139.wordBreak', () => {
    const wordBreak = require('../src/dynamicPlanning/139.wordBreak');

    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(
      false
    );
  });

  test('300.lengthOfLIS', () => {
    const lengthOfLIS = require('../src/dynamicPlanning/300.lengthOfLIS');

    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  test('376.wiggleMaxLength', () => {
    const wiggleMaxLength = require('../src/dynamicPlanning/376.wiggleMaxLength');
    //
    expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toBe(6);
    expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toBe(7);
    expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(2);
    expect(wiggleMaxLength([0, 0])).toBe(1);
  });

  test('5.longestPalindrome', () => {
    const longestPalindrome = require('../src/dynamicPlanning/5.longestPalindrome');

    //
    expect(longestPalindrome('babad')).toEqual('bab');
    expect(longestPalindrome('cbbd')).toEqual('bb');
    expect(longestPalindrome('aacabdkacaa')).toEqual('aca');
  });

  test('10.isMatch', () => {
    const isMatch = require('../src/dynamicPlanning/10.isMatch');

    //
    expect(isMatch('aa', 'a')).toEqual(false);
    expect(isMatch('aa', 'a*')).toEqual(true);
    expect(isMatch('ab', '.*')).toEqual(true);
    expect(isMatch('aab', 'c*a*b*')).toEqual(true);
    expect(isMatch('mississippi', 'mis*is*p*.')).toEqual(false);
    expect(isMatch('aaa', '.*')).toEqual(true);
  });

  test('42.trap', () => {
    const trap = require('../src/dynamicPlanning/42.trap');

    //
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
    expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9);
  });

  test('44.isMatch', () => {
    const isMatch = require('../src/dynamicPlanning/44.isMatch');

    //
    expect(isMatch('aa', 'a')).toEqual(false);
    expect(isMatch('aa', '*')).toEqual(true);
    expect(isMatch('cb', '?a')).toEqual(false);
    expect(isMatch('adceb', '*a*b')).toEqual(true);
    expect(isMatch('acdcb', 'a*c?b')).toEqual(false);
    expect(isMatch('aab', 'c*a*b')).toEqual(false);
  });

  test('72.minDistance', () => {
    const minDistance = require('../src/dynamicPlanning/72.minDistance');

    //
    expect(minDistance("horse","ros")).toEqual(3);
    expect(minDistance("intention","execution")).toEqual(5);
  });
});
