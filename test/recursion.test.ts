describe('recursion', () => {
  test('100. isSameTree', () => {
    const { sortedArrayToBST } = require('./util');
    const isSameTree = require('../src/recursion/100.isSameTree');

    expect(isSameTree(
        sortedArrayToBST([1,2,3]),
        sortedArrayToBST([1,2,3])
    )).toBe(true);

    expect(isSameTree(
        sortedArrayToBST([1,2]),
        sortedArrayToBST([1,null,2])
    )).toBe(false);
  });
});
