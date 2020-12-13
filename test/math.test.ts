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
});
