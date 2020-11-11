describe('recursion', () => {
  test('100. isSameTree', () => {
    const { sortedArrayToBST } = require('./util');
    const isSameTree = require('../src/recursion/100.isSameTree');

    expect(
      isSameTree(sortedArrayToBST([1, 2, 3]), sortedArrayToBST([1, 2, 3]))
    ).toBe(true);

    expect(
      isSameTree(sortedArrayToBST([1, 2]), sortedArrayToBST([1, null, 2]))
    ).toBe(false);
  });

  test('101. isSymmetric', () => {
    const { sortedArrayToBST } = require('./util');
    const isSymmetric = require('../src/recursion/101.isSymmetric');

    expect(isSymmetric(sortedArrayToBST([1, 2, 2, 3, 4, 4, 3]))).toBe(true);

    expect(isSymmetric(sortedArrayToBST([1, 2, 2, null, 3, null, 3]))).toBe(
      false
    );
  });

  test('34. maxDepth', () => {
    const { sortedArrayToBST } = require('./util');
    const maxDepth = require('../src/recursion/34.maxDepth');

    expect(maxDepth(sortedArrayToBST([3, 9, 20, null, null, 15, 7]))).toBe(3);
  });
});
