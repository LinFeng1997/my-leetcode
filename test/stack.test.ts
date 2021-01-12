describe('stack', () => {
  const { createTree } = require('./util');

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

  test('144. preorderTraversal', () => {
    const preorderTraversal = require('../src/stack/144.preorderTraversal');
    const case1 = createTree([1, null, 2, 3]);

    expect(preorderTraversal(case1)).toEqual([1, 2, 3]);
    expect(preorderTraversal(createTree([]))).toEqual([]);
    expect(preorderTraversal(createTree([1]))).toEqual([1]);
    expect(preorderTraversal(createTree([1, 2]))).toEqual([1, 2]);
    expect(preorderTraversal(createTree([1, null, 2]))).toEqual([1, 2]);
    expect(preorderTraversal(createTree([3, 1, 2]))).toEqual([3, 1, 2]);
  });

  test('144. inorderTraversal', () => {
    const inorderTraversal = require('../src/stack/94.inorderTraversal');
    const case1 = createTree([1, null, 2, 3]);

    expect(inorderTraversal(case1)).toEqual([1, 3, 2]);
  });

  test('145. postorderTraversal', () => {
    const postorderTraversal = require('../src/stack/145.postorderTraversal');
    const case1 = createTree([1, null, 2, 3]);

    expect(postorderTraversal(case1)).toEqual([3, 2, 1]);
  });

  test('341. postorderTraversal', () => {
    const NestedIterator = require('../src/stack/341.NestedIterator');
    const NestedInteger = require('../src/stack/341.NestedIterator')
      .NestedInteger;

    NestedIterator.prototype.getData = function() {
      const res = [];
      while (this.hasNext()) {
        res.push(this.next());
      }
      return res;
    };
    const case1 = [[1, 1], 2, [1, 1]].map(NestedInteger.mapNestedInteger);

    expect(new NestedIterator(case1).getData()).toEqual([1, 1, 2, 1, 1]);

    const case2 = [[1, [4, [6]]]].map(NestedInteger.mapNestedInteger);

    expect(new NestedIterator(case2).getData()).toEqual([1, 4, 6]);
  });

  test('32.longestValidParentheses', () => {
    const longestValidParentheses = require('../src/stack/32.longestValidParentheses');

    //
    expect(longestValidParentheses('(()')).toEqual(2);
    expect(longestValidParentheses(')()())')).toEqual(4);
    expect(longestValidParentheses('()')).toEqual(2);
    expect(longestValidParentheses('()))))))))))()')).toEqual(2);
  });

  test('84.largestRectangleArea', () => {
    const largestRectangleArea = require('../src/stack/84.largestRectangleArea');

    //
    expect(largestRectangleArea([2,1,5,6,2,3])).toEqual(10);
  });
});
