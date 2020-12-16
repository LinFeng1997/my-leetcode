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

  test('216.combinationSum3', () => {
    const combinationSum3 = require('../src/backtracking/216.combinationSum3');

    expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]]);

    expect(combinationSum3(3, 9)).toEqual([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ]);

    expect(combinationSum3(2, 18)).toEqual([]);
    expect(combinationSum3(9, 45)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
  });

  test('78.subsets', () => {
    const subsets = require('../src/backtracking/78.subsets');

    expect(subsets([1, 2, 3])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });

  test('90.subsetsWithDup', () => {
    const subsetsWithDup = require('../src/backtracking/90.subsetsWithDup');

    expect(subsetsWithDup([1, 2, 2])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 2],
      [2],
      [2, 2],
    ]);
  });

  describe('binary', () => {
    test('79.exist', () => {
      const exist = require('../src/backtracking/79.exist');
      const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
      ];
      expect(exist(board, 'ABCCED')).toEqual(true);

      expect(exist(board, 'SEE')).toEqual(true);
      expect(exist(board, 'ABCB')).toEqual(false);

      expect(exist([['a']], 'a')).toEqual(true);

      expect(
        exist(
          [
            ['C', 'A', 'A'],
            ['A', 'A', 'A'],
            ['B', 'C', 'D'],
          ],
          'AAB'
        )
      ).toBe(true);
    });

    test('200.numIslands', () => {
      const numIslands = require('../src/backtracking/200.numIslands');

      expect(
        numIslands(
          ['1', '1', '1', '1', '0'],
          ['1', '1', '0', '1', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '0', '0', '0']
        )
      ).toEqual(1);

      expect(
        numIslands([
          ['1', '1', '0', '0', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '1', '0', '0'],
          ['0', '0', '0', '1', '1'],
        ])
      ).toEqual(3);
    });

    test('130.solve', () => {
      const solve = require('../src/backtracking/130.solve');

      expect(
        solve([
          ['X', 'X', 'X', 'X'],
          ['X', 'O', 'O', 'X'],
          ['X', 'X', 'O', 'X'],
          ['X', 'O', 'X', 'X'],
        ])
      ).toEqual([
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ]);

      expect(
        solve([
          ['X', 'X', 'X', 'X'],
          ['X', 'O', 'X', 'X'],
          ['X', 'X', 'X', 'X'],
          ['X', 'X', 'X', 'X'],
        ])
      ).toEqual([
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
      ]);

      expect(
        solve([
          ['X', 'X', 'X', 'X'],
          ['X', 'O', 'X', 'X'],
          ['X', 'O', 'X', 'X'],
          ['X', 'O', 'X', 'X'],
        ])
      ).toEqual([
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ]);

      expect(
        solve([
          ['O', 'X', 'X', 'O', 'X'],
          ['X', 'O', 'O', 'X', 'O'],
          ['X', 'O', 'X', 'O', 'X'],
          ['O', 'X', 'O', 'O', 'O'],
          ['X', 'X', 'O', 'X', 'O'],
        ])
      ).toEqual([
        ['O', 'X', 'X', 'O', 'X'],
        ['X', 'X', 'X', 'X', 'O'],
        ['X', 'X', 'X', 'O', 'X'],
        ['O', 'X', 'O', 'O', 'O'],
        ['X', 'X', 'O', 'X', 'O'],
      ]);
    });

    test('417.pacificAtlantic', () => {
      const pacificAtlantic = require('../src/backtracking/417.pacificAtlantic');

      expect(
        pacificAtlantic([
          [1, 2, 2, 3, 5],
          [3, 2, 3, 4, 4],
          [2, 4, 5, 3, 1],
          [6, 7, 1, 4, 5],
          [5, 1, 1, 2, 4],
        ])
      ).toEqual([
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
      ]);
    });

    test('51.solveNQueens', () => {
      const solveNQueens = require('../src/backtracking/51.solveNQueens');

      expect(solveNQueens(4)).toEqual([
        [
          '.Q..', // 解法 1
          '...Q',
          'Q...',
          '..Q.',
        ],

        [
          '..Q.', // 解法 2
          'Q...',
          '...Q',
          '.Q..',
        ],
      ]);
    });

    test('52.totalNQueens', () => {
      const solveNQueens = require('../src/backtracking/52.totalNQueens');

      expect(solveNQueens(4)).toEqual(2);
    });

    test('37.solveSudoku', () => {
      const solveSudoku = require('../src/backtracking/37.solveSudoku');

      expect(
        solveSudoku([
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
      ).toEqual([
        ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
        ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
        ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
        ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
        ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
        ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
        ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
        ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
        ['3', '4', '5', '2', '8', '6', '1', '7', '9'],
      ]);
    });

    test('22.generateParenthesis', () => {
      const generateParenthesis = require('../src/backtracking/22.generateParenthesis');

      //
      expect(generateParenthesis(3)).toEqual([
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ]);
    });
  });
});
