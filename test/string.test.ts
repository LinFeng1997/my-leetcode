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
    expect(lengthOfLastWord('Hello World')).toEqual(5);

    expect(lengthOfLastWord('Hello World  ')).toEqual(5);

    expect(lengthOfLastWord(' ')).toEqual(0);
  });

  test('65.isNumber', () => {
    const isNumber = require('../src/string/65.isNumber');

    //
    expect(isNumber('0')).toEqual(true);
    expect(isNumber(' 0.1 ')).toEqual(true);
    expect(isNumber('abc')).toEqual(false);
    expect(isNumber('1 a')).toEqual(false);
    expect(isNumber('2e10')).toEqual(true);
    expect(isNumber(' -90e3  ')).toEqual(true);
    expect(isNumber(' 1e')).toEqual(false);
    expect(isNumber('e3')).toEqual(false);
    expect(isNumber(' 6e-1')).toEqual(true);
    expect(isNumber(' 99e2.5 ')).toEqual(false);
    expect(isNumber('53.5e93')).toEqual(true);
    expect(isNumber(' --6 ')).toEqual(false);
    expect(isNumber('-+3')).toEqual(false);
    expect(isNumber('95a54e53')).toEqual(false);
  });

  test('151.reverseWords', () => {
    const reverseWords = require('../src/string/151.reverseWords');

    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
    expect(reverseWords("  hello world!  ")).toBe("world! hello");
    expect(reverseWords("a good   example")).toBe("example good a");
    expect(reverseWords("  Bob    Loves  Alice   ")).toBe("Alice Loves Bob");
    expect(reverseWords("Alice does not even like bob")).toBe("bob like even not does Alice");
  });
});
