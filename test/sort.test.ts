describe('sort', () => {
  test('75. sort colors', () => {
    const sortColors = require('../src/sort/75.sortColors');
    expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
    expect(sortColors([2, 0, 1])).toEqual([0, 1, 2]);
  });

  test('88. merge sort array', () => {
    const mergeSortArray = require('../src/sort/88.mergeSortArray');
    let nums1 = [1, 2, 3, 0, 0, 0];
    mergeSortArray(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);

    let nums1_1 = [0];
    mergeSortArray(nums1_1, 0, [1], 1);
    expect(nums1_1).toEqual([1]);
  });

  test('215. find kth largest', () => {
    const findKthLargest = require('../src/sort/215.findKthLargest');
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
  });

  test('31.nextPermutation', () => {
    const nextPermutation = require('../src/sort/31.nextPermutation');

    //
    expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
    expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
    expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1]);
    expect(nextPermutation([1])).toEqual([1]);
    expect(nextPermutation([4, 5, 2, 6, 3, 1])).toEqual([4, 5, 3, 1, 2, 6]);
    expect(nextPermutation([1, 5, 1])).toEqual([5, 1, 1]);
  });
});
