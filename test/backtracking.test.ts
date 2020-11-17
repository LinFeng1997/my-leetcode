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
});
