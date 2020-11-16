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
});
