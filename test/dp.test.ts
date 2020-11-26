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

    expect(minPathSum([[1,3,1],[1,5,1],[4,2,1]])).toBe(7);
    expect(minPathSum([[1,2,3],[4,5,6]])).toBe(12);
  });
});
