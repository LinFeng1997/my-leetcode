describe('stack', () => {
  class TreeNode {
    val: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: any, left?: TreeNode, right?: TreeNode) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  var sortedArrayToBST = function(nums: any[]) {
    if (nums == null || nums.length == 0) return null;
    let len = nums.length;
    let index = 0;
    let head = new TreeNode(nums[index]);
    let nodeQueue: TreeNode[] = [];
    nodeQueue.unshift(head);
    let cur: TreeNode | undefined;

    while (index < len) {
      index++;
      if (index >= len) return head;
      cur = nodeQueue.shift();
      let left = nums[index];
      if (cur && left != null) {
        cur.left = new TreeNode(left);
        nodeQueue.unshift(cur.left);
      }

      index++;
      if (index >= len) return head;
      let right = nums[index];
      if (cur && right != null) {
        cur.right = new TreeNode(right);
        nodeQueue.unshift(cur.right);
      }
    }
    return head;
  };

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
    const case1 = sortedArrayToBST([1, null, 2, 3]);

    expect(preorderTraversal(case1)).toEqual([1, 2, 3]);
    expect(preorderTraversal(sortedArrayToBST([]))).toEqual([]);
    expect(preorderTraversal(sortedArrayToBST([1]))).toEqual([1]);
    expect(preorderTraversal(sortedArrayToBST([1, 2]))).toEqual([1, 2]);
    expect(preorderTraversal(sortedArrayToBST([1, null, 2]))).toEqual([1, 2]);
    expect(preorderTraversal(sortedArrayToBST([3, 1, 2]))).toEqual([3, 1, 2]);
  });

  test('144. inorderTraversal', () => {
    const inorderTraversal = require('../src/stack/94.inorderTraversal');
    const case1 = sortedArrayToBST([1, null, 2, 3]);

    expect(inorderTraversal(case1)).toEqual([1, 3, 2]);
  });

  test('145. postorderTraversal', () => {
    const postorderTraversal = require('../src/stack/145.postorderTraversal');
    const case1 = sortedArrayToBST([1, null, 2, 3]);

    expect(postorderTraversal(case1)).toEqual([3, 2, 1]);
  });
});
