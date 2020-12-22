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

  test('149. maxPoints', () => {
    const maxPoints = require('../src/search/149.maxPoints');
    expect(
      maxPoints([
        [1, 1],
        [2, 2],
        [3, 3],
      ])
    ).toEqual(3);
    expect(
      maxPoints([
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ])
    ).toEqual(4);

    expect(
      maxPoints([
        [1, 1],
        [2, 2],
        [3, 3],
        [1, 1],
      ])
    ).toEqual(4); // 相同点

    expect(
      maxPoints([
        [0, 0],
        [1, 1],
        [0, 0],
      ])
    ).toEqual(3); // 有斜率无穷
    expect(
      maxPoints([
        [0, 1],
        [0, 2],
        [0, 3],
      ])
    ).toEqual(3);
    expect(
      maxPoints([
        [4, 0],
        [4, -1],
        [4, 5],
      ])
    ).toEqual(3);

    expect(
      maxPoints([
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toEqual(3); // 全相同点
    expect(
      maxPoints([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 2],
      ])
    ).toEqual(6);

    expect(
      maxPoints([
        [3, 1],
        [12, 3],
        [3, 1],
        [-6, -1],
      ])
    ).toEqual(4); // 精度
    expect(
      maxPoints([
        [0, 0],
        [94911151, 94911150],
        [94911152, 94911151],
      ])
    ).toEqual(2); // 精度
  });

  test('217. containsDuplicate', () => {
    const containsDuplicate = require('../src/search/217.containsDuplicate');
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });

  test('219. containsNearbyDuplicate', () => {
    const containsNearbyDuplicate = require('../src/search/219.containsNearbyDuplicate');
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true);
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true);
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toEqual(false);
    expect(containsNearbyDuplicate([1, 2, 3, 2, 4], 2)).toEqual(true);
  });

  test('220. containsNearbyAlmostDuplicate', () => {
    const containsNearbyAlmostDuplicate = require('../src/search/220.containsNearbyAlmostDuplicate');
    expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toEqual(true);
    expect(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)).toEqual(true);
    expect(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)).toEqual(
      false
    );
  });

  test('4.findMedianSortedArrays', () => {
    const findMedianSortedArrays = require('../src/search/4.findMedianSortedArrays');

    //
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);

    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);

    expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0);

    expect(findMedianSortedArrays([], [1])).toEqual(1);

    expect(findMedianSortedArrays([2], [])).toEqual(2);

    expect(
      findMedianSortedArrays([1, 3, 4, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])
    ).toEqual(4);
  });

  test('13.romanToInt', () => {
    const romanToInt = require('../src/search/13.romanToInt');

    //
    expect(romanToInt('III')).toEqual(3);
    expect(romanToInt('IV')).toEqual(4);
    expect(romanToInt('IX')).toEqual(9);
    expect(romanToInt('LVIII')).toEqual(58);
    expect(romanToInt('MCMXCIV')).toEqual(1994);
  });

  test('33.search', () => {
    const search = require('../src/search/33.search');

    //
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
    expect(search([4, 5, 6, 7, 1, 2, 3], 1)).toEqual(4);

    expect(search([4, 5, 6, 7, 1, 2, 3], 5)).toEqual(1);
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
    expect(search([6, 7, 0, 1, 2, 3, 4, 5], 3)).toEqual(5);
    expect(search([6, 7, 0, 1, 2, 3, 4, 5], 6)).toEqual(0);
  });

  test('34.searchRange', () => {
    const searchRange = require('../src/search/34.searchRange');

    //
    expect(searchRange([5, 7, 7, 8, 8], 8)).toEqual([3, 4]);
    expect(searchRange([5, 7, 7, 8, 8], 6)).toEqual([-1, -1]);
    expect(searchRange([], 0)).toEqual([-1, -1]);
    expect(searchRange([1], 1)).toEqual([0, 0]);
  });

  test('35.searchInsert', () => {
    const searchInsert = require('../src/search/35.searchInsert');

    //
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
    expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
  });

  test('36.isValidSudoku', () => {
    const isValidSudoku = require('../src/search/36.isValidSudoku');

    //
    expect(
      isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ])
    ).toEqual(true);

    expect(
      isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ])
    ).toEqual(false);
  });
});
