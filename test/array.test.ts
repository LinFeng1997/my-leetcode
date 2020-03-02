const twoSum = require('../src/array/1.two-sum');

describe('array', () => {
  test('1. two sum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
