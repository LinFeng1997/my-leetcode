describe('string', () => {
  test('6.convert', () => {
    const convert = require('../src/string/6.convert');

    //
    expect(convert('LEETCODEISHIRING', 3)).toEqual('LCIRETOESIIGEDHN');
    expect(convert('LEETCODEISHIRING', 4)).toEqual('LDREOEIIECIHNTSG');
  });

  test('8.myAtoi', () => {
    const myAtoi = require('../src/string/8.myAtoi');

    //
    expect(myAtoi('42')).toEqual(42);
    expect(myAtoi('   -42')).toEqual(-42);
    expect(myAtoi('words and 987')).toEqual(0);
    expect(myAtoi('-91283472332')).toEqual(-2147483648);
  });

  test('14.longestCommonPrefix', () => {
    const longestCommonPrefix = require('../src/string/14.longestCommonPrefix');

    //
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });

  test('58.lengthOfLastWord', () => {
    const lengthOfLastWord = require('../src/string/58.lengthOfLastWord');

    //
    expect(
        lengthOfLastWord("Hello World")
    ).toEqual(5);

    expect(
        lengthOfLastWord("Hello World  ")
    ).toEqual(5);

    expect(
        lengthOfLastWord(" ")
    ).toEqual(0);


  });
});
