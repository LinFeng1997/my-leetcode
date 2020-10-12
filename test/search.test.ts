describe('search', () => {
  test('349. intersection', () => {
    const intersection = require('../src/search/349.intersection');
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });

  test('350. intersect', () => {
    const intersection = require('../src/search/350.intersection-II');
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    expect(intersection([1, 2], [1, 1])).toEqual([1]);
    expect(intersection([3, 1, 2], [1, 1])).toEqual([1]);
  });

  test('242. isAnagram', () => {
    const isAnagram = require('../src/search/242.isAnagram');
    expect(isAnagram('anagram', 'nagaram')).toEqual(true);
    expect(isAnagram('rat', 'car')).toEqual(false);
    expect(isAnagram('aacc', 'ccac')).toEqual(false);
  });

  test('202. isHappy', () => {
    const isHappy = require('../src/search/202.isHappy');
    expect(isHappy(19)).toEqual(true);
    expect(isHappy(1)).toEqual(true);
  });

  test('290. wordPattern', () => {
    const wordPattern = require('../src/search/290.wordPattern');
    expect(wordPattern('abba', 'dog cat cat dog')).toEqual(true);
    expect(wordPattern('abba', 'dog cat cat fish')).toEqual(false);
    expect(wordPattern('aaaa', 'dog cat cat dog')).toEqual(false);
    expect(wordPattern('abba', 'dog dog dog dog')).toEqual(false);
  });

  test('205. isIsomorphic', () => {
    const isIsomorphic = require('../src/search/205.isIsomorphic');
    expect(isIsomorphic('egg', 'add')).toEqual(true);
    expect(isIsomorphic('foo', 'bar')).toEqual(false);
    expect(isIsomorphic('paper', 'title')).toEqual(true);
  });

  test('451. frequencySort', () => {
    const frequencySort = require('../src/search/451.frequencySort');
    expect(['eert', 'eetr']).toContainEqual(frequencySort('tree'));
    expect(['cccaaa']).toContainEqual(frequencySort('cccaaa'));
    expect(['bbAa']).toContainEqual(frequencySort('Aabb'));
    expect(['aaaaacccceeeffdb', 'aaaaacccceeeffbd']).toContainEqual(
      frequencySort('abaccadeeefaafcc')
    );
    expect(['eeeeoollvtdc', 'eeeelloovtdc', 'eeeelloovtcd']).toContainEqual(
      frequencySort('loveleetcode')
    );
  });

  test('454. fourSumCount', () => {
    const fourSumCount = require('../src/search/454.fourSumCount');
    expect(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2])).toEqual(2);
    expect(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1])).toEqual(6);
  });

  test('49. groupAnagrams', () => {
    const groupAnagrams = require('../src/search/49.groupAnagrams');
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual(
      expect.arrayContaining([
        expect.arrayContaining(['ate', 'eat', 'tea']),
        expect.arrayContaining(['nat', 'tan']),
        ['bat'],
      ])
    );

    expect(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc'])).toEqual(
      expect.arrayContaining([['bbbbbbbbbbc'], ['bdddddddddd']])
    );
  });

  test('447. numberOfBoomerangs', () => {
    const numberOfBoomerangs = require('../src/search/447.numberOfBoomerangs');
    expect(
      numberOfBoomerangs([
        [0, 0],
        [1, 0],
        [2, 0],
      ])
    ).toEqual(2);
  });
});
