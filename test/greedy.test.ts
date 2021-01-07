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

  test('45.jump', () => {
    const jump = require('../src/greedy/45.jump');

    //
    expect(jump([2, 3, 1, 1, 4])).toEqual(2);
  });

  test('55.canJump', () => {
    const canJump = require('../src/greedy/55.canJump');

    //
    expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
    expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
    expect(canJump([0])).toEqual(true);
  });

  test('56.merge', () => {
    const merge = require('../src/greedy/56.merge');

    //
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
    expect(
      merge([
        [1, 4],
        [4, 5],
      ])
    ).toEqual([[1, 5]]);
  });

  test('68.fullJustify', () => {
    const fullJustify = require('../src/greedy/68.fullJustify');

    //
    expect(
      fullJustify(
        ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
        16
      )
    ).toEqual(['This    is    an', 'example  of text', 'justification.  ']);
    expect(
      fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)
    ).toEqual(['What   must   be', 'acknowledgment  ', 'shall be        ']);

    expect(
      fullJustify(
        [
          'Science',
          'is',
          'what',
          'we',
          'understand',
          'well',
          'enough',
          'to',
          'explain',
          'to',
          'a',
          'computer.',
          'Art',
          'is',
          'everything',
          'else',
          'we',
          'do',
        ],
        20
      )
    ).toEqual([
      'Science  is  what we',
      'understand      well',
      'enough to explain to',
      'a  computer.  Art is',
      'everything  else  we',
      'do                  ',
    ]);
  });
});
