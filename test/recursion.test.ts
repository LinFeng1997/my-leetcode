describe('recursion', () => {
  test('100. isSameTree', () => {
    const { createTree } = require('./util');
    const isSameTree = require('../src/recursion/100.isSameTree');

    expect(isSameTree(createTree([1, 2, 3]), createTree([1, 2, 3]))).toBe(true);

    expect(isSameTree(createTree([1, 2]), createTree([1, null, 2]))).toBe(
      false
    );
  });

  test('101. isSymmetric', () => {
    const { createTree } = require('./util');
    const isSymmetric = require('../src/recursion/101.isSymmetric');

    expect(isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);

    expect(isSymmetric(createTree([1, 2, 2, null, 3, null, 3]))).toBe(false);
  });

  test('104. maxDepth', () => {
    const { createTree } = require('./util');
    const maxDepth = require('../src/recursion/104.maxDepth');

    expect(maxDepth(createTree([3, 9, 20, null, null, 15, 7]))).toBe(3);
  });

  test('226. invertTree', () => {
    const { createTree } = require('./util');
    const invertTree = require('../src/recursion/226.invertTree');

    expect(invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(
      createTree([4, 7, 2, 9, 6, 3, 1])
    );
  });

  test('110. isBalanced', () => {
    const { createTree } = require('./util');
    const isBalanced = require('../src/recursion/110.isBalanced');

    expect(isBalanced(createTree([3, 9, 20, null, null, 15, 7]))).toEqual(true);

    expect(isBalanced(createTree([1, 2, 2, 3, 3, null, null, 4, 4]))).toEqual(
      false
    );

    expect(isBalanced(null)).toEqual(true);

    expect(
      isBalanced(createTree([1, 2, 2, 3, null, null, 3, 4, null, null, 4]))
    ).toEqual(false);
  });

  test('112. hasPathSum', () => {
    const { createTree } = require('./util');
    const hasPathSum = require('../src/recursion/112.hasPathSum');

    expect(
      hasPathSum(
        createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
        22
      )
    ).toEqual(true);

    expect(hasPathSum(null, 0)).toEqual(false);
  });

  test('404. sumOfLeftLeaves', () => {
    const { createTree } = require('./util');
    const sumOfLeftLeaves = require('../src/recursion/404.sumOfLeftLeaves');

    expect(sumOfLeftLeaves(createTree([3, 9, 20, null, null, 15, 7]))).toEqual(
      24
    );
    expect(sumOfLeftLeaves(createTree([1, 2, 3, 4, 5]))).toEqual(4);
  });

  test('257. binaryTreePaths', () => {
    const { createTree } = require('./util');
    const binaryTreePaths = require('../src/recursion/257.binaryTreePaths');

    expect(binaryTreePaths(createTree([1, 2, 3, null, 5]))).toEqual([
      ['1->2->5', '1->3'],
    ]);

    expect(binaryTreePaths(createTree([1]))).toEqual(['1']);
  });

  test('113. pathSumII', () => {
    const { createTree } = require('./util');
    const pathSumII = require('../src/recursion/113.pathSumII');

    expect(
      pathSumII(
        createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]),
        22
      )
    ).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });

  test('129. sumNumbers', () => {
    const { createTree } = require('./util');
    const sumNumbers = require('../src/recursion/129.sumNumbers');

    expect(sumNumbers(createTree([1, 2, 3]))).toEqual(25);

    expect(sumNumbers(createTree([4, 9, 0, 5, 1]))).toEqual(1026);
  });

  test('437. pathSum', () => {
    const { createTree } = require('./util');
    const pathSum = require('../src/recursion/437.pathSum');

    expect(
      pathSum(createTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)
    ).toEqual(3);
    expect(pathSum(createTree([1, -2, -3, 1, 3, -2, null, -1]), -1)).toEqual(4);
  });
});
