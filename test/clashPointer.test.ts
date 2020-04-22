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
});
