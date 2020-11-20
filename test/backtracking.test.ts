describe('backtracking', () => {
  test('17.letterCombinations', () => {
    const letterCombinations = require('../src/backtracking/17.letterCombinations');
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);

    expect(letterCombinations('')).toEqual([]);
  });

  test('131.partition', () => {
    const partition = require('../src/backtracking/131.partition');

    expect(partition('aab')).toEqual([
      ['a', 'a', 'b'],
      ['aa', 'b'],
    ]);
  });

  test('93.restoreIpAddresses', () => {
    const restoreIpAddresses = require('../src/backtracking/93.restoreIpAddresses');

    expect(restoreIpAddresses('25525511135')).toEqual([
      '255.255.11.135',
      '255.255.111.35',
    ]);

    expect(restoreIpAddresses('0000')).toEqual(['0.0.0.0']);

    expect(restoreIpAddresses('1111')).toEqual(['1.1.1.1']);
    expect(restoreIpAddresses('010010')).toEqual(['0.10.0.10', '0.100.1.0']);
    expect(restoreIpAddresses('101023')).toEqual([
      '1.0.10.23',
      '1.0.102.3',
      '10.1.0.23',
      '10.10.2.3',
      '101.0.2.3',
    ]);
  });

  test('46.permute', () => {
    const permute = require('../src/backtracking/46.permute');

    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test('47.permuteUnique', () => {
    const permuteUnique = require('../src/backtracking/47.permute');

    expect(permuteUnique([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);

    expect(permuteUnique([1, 1, 2])).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]);
  });

  test('77.permuteUnique', () => {
    const combine = require('../src/backtracking/77.combine');

    expect(combine(4, 2)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });

  test('39.combinationSum', () => {
    const combinationSum = require('../src/backtracking/39.combinationSum');

    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });

  test('77.permuteUnique', () => {
    const combinationSum2 = require('../src/backtracking/40.combinationSum2');

    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]);
  });
});
