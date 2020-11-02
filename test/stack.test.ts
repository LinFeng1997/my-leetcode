describe('stack', () => {
  test('20. isValid', () => {
    const isValid = require('../src/stack/20.isValid.js');
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[]}')).toBe(true);
  });

  test('150. evalRPN', () => {
    const evalRPN = require('../src/stack/150.evalRPN.js');
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
    expect(
      evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
      ])
    ).toBe(22);
  });

  test('71. simplifyPath', () => {
    const simplifyPath = require('../src/stack/71.simplifyPath.js');
    expect(simplifyPath('/home/')).toBe('/home');
    expect(simplifyPath('/../')).toBe('/');
    expect(simplifyPath('/home//foo/')).toBe('/home/foo');
    expect(simplifyPath('/a/./b/../../c/')).toBe('/c');
    expect(simplifyPath('/a/../../b/../c//.//')).toBe('/c');
    expect(simplifyPath('/a//b////c/d//././/..')).toBe('/a/b/c');
  });
});
