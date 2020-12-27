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
    expect(multiply("2","3")).toEqual("6");
    expect(multiply("123","456")).toEqual("56088");
  });
});
