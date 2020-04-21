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
});
