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

  test('435.eraseOverlapIntervals', () => {
    const eraseOverlapIntervals = require('../src/greedy/435.eraseOverlapIntervals');
    //
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ])
    ).toBe(1);
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ])
    ).toBe(2);
  });

  test('12.intToRoman', () => {
    const intToRoman = require('../src/greedy/12.intToRoman');

    //
    expect(intToRoman(3)).toEqual('III');
    expect(intToRoman(4)).toEqual('IV');
    expect(intToRoman(9)).toEqual('IX');
    expect(intToRoman(58)).toEqual('LVIII');
    expect(intToRoman(1994)).toEqual('MCMXCIV');
  });
});
