describe('clash pointer', () => {
  test('209. Min SubArray Len', () => {
    const minSubArrayLen = require('../src/slidingWindow/209.minSubArrayLen');
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  });

  test('3. length of longest substring', () => {
    const minSubArrayLen = require('../src/slidingWindow/3.lengthOfLongestSubstring');
    expect(minSubArrayLen('abcabcbb')).toEqual(3);
    expect(minSubArrayLen('bbbbb')).toEqual(1);
    expect(minSubArrayLen('pwwkew')).toEqual(3);
  });

  test('438. find an agrams', () => {
    const findAnagrams = require('../src/slidingWindow/438.findAnagrams');
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
    expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
  });

  test('76. min window', () => {
    const minWindow = require('../src/slidingWindow/76.minWindow');
    expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC');
    expect(minWindow('ab', 'a')).toEqual('a');
    expect(minWindow('abc', 'b')).toEqual('b');
  });

  test('28.strStr', () => {
    const strStr = require('../src/slidingWindow/28.strStr');

    //
    expect(strStr('hello', 'll')).toEqual(2);
    expect(strStr('aaaaa', 'bba')).toEqual(-1);
    expect(strStr('', '')).toEqual(0);
    expect(strStr('a', 'a')).toEqual(0);
  });

  test('30.findSubstring', () => {
    const findSubstring = require('../src/slidingWindow/30.findSubstring');

    //
    expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
    expect(findSubstring('wordgoodgoodgoodbestword', ['foo', 'bar'])).toEqual(
      []
    );
  });
});
