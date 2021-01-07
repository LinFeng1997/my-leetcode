describe('math', () => {
  test('7.reverse', () => {
    const reverse = require('../src/math/7.reverse');

    //
    expect(reverse(123)).toEqual(321);
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(120)).toEqual(21);
    expect(reverse(1534236469)).toEqual(0);
  });

  test('9.isPalindrome', () => {
    const isPalindrome = require('../src/math/9.isPalindrome');

    //
    expect(isPalindrome(121)).toEqual(true);
    expect(isPalindrome(-121)).toEqual(false);
    expect(isPalindrome(10)).toEqual(false);
  });

  test('29.divide', () => {
    const divide = require('../src/math/29.divide');

    //
    expect(divide(10, 3)).toEqual(3);
    expect(divide(7, -3)).toEqual(-2);
    expect(divide(-2147483648, -1)).toEqual(2147483647);
  });

  test('43.multiply', () => {
    const multiply = require('../src/math/43.multiply');

    //
    expect(multiply('2', '3')).toEqual('6');
    expect(multiply('123', '456')).toEqual('56088');
  });

  test('48.rotate', () => {
    const rotate = require('../src/math/48.rotate');

    //
    expect([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);

    expect(
      rotate([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  test('50.pow', () => {
    const pow = require('../src/math/50.pow');

    //
    expect(pow(2, 10)).toEqual(1024);
    expect(pow(2.1, 3).toFixed(3)).toEqual('9.261');
    expect(pow(2, -2)).toEqual(0.25);
    expect(pow(0.00001, 2147483647)).toEqual(0);
  });

  test('53.maxSubArray', () => {
    const maxSubArray = require('../src/dynamicPlanning/53.maxSubArray');

    //
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  test('66.plusOne', () => {
    const plusOne = require('../src/math/66.plusOne');

    //
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(plusOne([0])).toEqual([1]);

    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  test('67.addBinary', () => {
    const addBinary = require('../src/math/67.addBinary');

    //
    expect(addBinary('11', '1')).toEqual('100');
    expect(addBinary('1010', '1011')).toEqual('10101');
  });
});
