describe('greedy', () => {
  test('455.findContentChildren', () => {
    const findContentChildren = require('../src/greedy/455.findContentChildren');
    //
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
    expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
  });

  test('392.isSubsequence', () => {
    const isSubsequence = require('../src/greedy/392.isSubsequence');
    //
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  });
});
