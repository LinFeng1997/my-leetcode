describe('dynamic planning', () => {
  test('70.climbStairs', () => {
    const climbStairs = require('../src/dynamicPlanning/70.climbStairs');

    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
  });

  test('120.minimumTotal', () => {
    const minimumTotal = require('../src/dynamicPlanning/120.minimumTotal');

    expect(minimumTotal([
      [2],
      [3,4],
      [6,5,7],
      [4,1,8,3]
    ])).toBe(11);
  });
});
