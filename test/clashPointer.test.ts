describe('clash pointer', () => {
  test('167. two sum', () => {
    const twoSum = require('../src/clashPointer/167.twoSum');
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test('125. is palindrome', () => {
    const isPalindrome = require('../src/clashPointer/125.isPalindrome');
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
    expect(isPalindrome('race a car')).toEqual(false);
  });

  test('344. reverse string', () => {
    const reverseString = require('../src/clashPointer/344.reverseString');
    expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
    expect(reverseString(["H","a","n","n","a","h"])).toEqual(["h","a","n","n","a","H"]);
  });
});
