describe('recursion', () => {
  test('100. isSameTree', () => {
    const { createTree } = require('./util');
    const isSameTree = require('../src/recursion/100.isSameTree');

    expect(isSameTree(createTree([1, 2, 3]), createTree([1, 2, 3]))).toBe(true);

    expect(isSameTree(createTree([1, 2]), createTree([1, null, 2]))).toBe(
      false
    );
  });

  test('101. isSymmetric', () => {
    const { createTree } = require('./util');
    const isSymmetric = require('../src/recursion/101.isSymmetric');

    expect(isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);

    expect(isSymmetric(createTree([1, 2, 2, null, 3, null, 3]))).toBe(false);
  });

  test('104. maxDepth', () => {
    const { createTree } = require('./util');
    const maxDepth = require('../src/recursion/104.maxDepth');

    expect(maxDepth(createTree([3, 9, 20, null, null, 15, 7]))).toBe(3);
  });

  test('226. invertTree', () => {
    const { createTree } = require('./util');
    const invertTree = require('../src/recursion/226.invertTree');

    expect(invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(
      createTree([4, 7, 2, 9, 6, 3, 1])
    );
  });

  test('110. isBalanced', () => {
    const { createTree } = require('./util');
    const isBalanced = require('../src/recursion/110.isBalanced');

    expect(isBalanced(createTree([3, 9, 20, null, null, 15, 7]))).toEqual(true);

    expect(isBalanced(createTree([1, 2, 2, 3, 3, null, null, 4, 4]))).toEqual(
      false
    );

    expect(isBalanced(null)).toEqual(true);

    expect(
      isBalanced(createTree([1, 2, 2, 3, null, null, 3, 4, null, null, 4]))
    ).toEqual(false);
  });

  test('112. hasPathSum', () => {
    const { createTree } = require('./util');
    const hasPathSum = require('../src/recursion/112.hasPathSum');

    expect(
      hasPathSum(
        createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
        22
      )
    ).toEqual(true);

    expect(hasPathSum(null, 0)).toEqual(false);
  });

  test('404. sumOfLeftLeaves', () => {
    const { createTree } = require('./util');
    const sumOfLeftLeaves = require('../src/recursion/404.sumOfLeftLeaves');

    expect(sumOfLeftLeaves(createTree([3, 9, 20, null, null, 15, 7]))).toEqual(
      24
    );
    expect(sumOfLeftLeaves(createTree([1, 2, 3, 4, 5]))).toEqual(4);
  });

  test('257. binaryTreePaths', () => {
    const { createTree } = require('./util');
    const binaryTreePaths = require('../src/recursion/257.binaryTreePaths');

    expect(binaryTreePaths(createTree([1, 2, 3, null, 5]))).toEqual([
      '1->2->5',
      '1->3',
    ]);

    expect(binaryTreePaths(createTree([1]))).toEqual(['1']);
  });

  test('113. pathSumII', () => {
    const { createTree } = require('./util');
    const pathSumII = require('../src/recursion/113.pathSumII');

    expect(
      pathSumII(
        createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]),
        22
      )
    ).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });

  test('129. sumNumbers', () => {
    const { createTree } = require('./util');
    const sumNumbers = require('../src/recursion/129.sumNumbers');

    expect(sumNumbers(createTree([1, 2, 3]))).toEqual(25);

    expect(sumNumbers(createTree([4, 9, 0, 5, 1]))).toEqual(1026);
  });

  test('437. pathSum', () => {
    const { createTree } = require('./util');
    const pathSum = require('../src/recursion/437.pathSum');

    expect(
      pathSum(createTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)
    ).toEqual(3);
    expect(pathSum(createTree([1, -2, -3, 1, 3, -2, null, -1]), -1)).toEqual(4);
  });

  describe('binary search tree', () => {
    test('235.lowestCommonAncestor', () => {
      const { createTree, TreeNode } = require('./util');
      const lowestCommonAncestor = require('../src/recursion/235.lowestCommonAncestor');

      expect(
        lowestCommonAncestor(
          createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
          new TreeNode(2),
          new TreeNode(8)
        ).val
      ).toEqual(6);
      expect(
        lowestCommonAncestor(
          createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
          new TreeNode(2),
          new TreeNode(4)
        ).val
      ).toEqual(2);
    });

    test('98.isValidBST', () => {
      const { createTree } = require('./util');
      const isValidBST = require('../src/recursion/98.isValidBST');

      expect(isValidBST(createTree([2, 1, 3]))).toEqual(true);
      expect(isValidBST(createTree([5, 1, 4, null, null, 3, 6]))).toEqual(
        false
      );

      expect(isValidBST(createTree([10, 5, 15, null, null, 6, 20]))).toEqual(
        false
      );
    });

    test('450. deleteNode', () => {
      const { createTree } = require('./util');
      const deleteNode = require('../src/recursion/450.deleteNode');

      expect(deleteNode(createTree([5, 3, 6, 2, 4, null, 7]), 3)).toEqual(
        createTree([5, 4, 6, 2, null, null, 7])
      );
    });

    test('108. sortedArrayToBST', () => {
      const { createTree } = require('./util');
      const sortedArrayToBST = require('../src/recursion/108.sortedArrayToBST');

      expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(
        createTree([0, -3, 9, -10, null, 5])
      );
    });

    test('108. sortedArrayToBST', () => {
      const { createTree } = require('./util');
      const kthSmallest = require('../src/recursion/230.kthSmallest');

      expect(kthSmallest(createTree([3, 1, 4, null, 2]), 1)).toBe(1);
      expect(kthSmallest(createTree([5, 3, 6, 2, 4, null, null, 1]), 3)).toBe(
        3
      );
    });
  });

  test('236. lowestCommonAncestor', () => {
    const { createTree, TreeNode } = require('./util');
    const lowestCommonAncestor = require('../src/recursion/236.lowestCommonAncestor');

    expect(
      lowestCommonAncestor(
        createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
        new TreeNode(5),
        new TreeNode(1)
      ).val
    ).toEqual(3);
    expect(
      lowestCommonAncestor(
        createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
        new TreeNode(5),
        new TreeNode(4)
      ).val
    ).toEqual(5);
  });

  test('38.countAndSay', () => {
    const countAndSay = require('../src/recursion/38.countAndSay');

    //
    expect(countAndSay(1)).toEqual('1');
    expect(countAndSay(2)).toEqual('11');
    expect(countAndSay(3)).toEqual('21');
    expect(countAndSay(4)).toEqual('1211');
    expect(countAndSay(5)).toEqual('111221');
    expect(countAndSay(6)).toEqual('312211');
  });

  test('95.generateTrees', () => {
    const generateTrees = require('../src/recursion/95.generateTrees');
    const { createTree } = require('./util');

    //
    expect(generateTrees(3)).toEqual([
      createTree([1, null, 2, null, 3]),
      createTree([1, null, 3, 2]),
      createTree([2, 1, 3]),
      createTree([3, 1, null, null, 2]),
      createTree([3, 2, null, 1]),
    ]);
  });

  test('105.buildTree', () => {
    const buildTree = require('../src/recursion/105.buildTree');
    const { createTree } = require('./util');

    //
    expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual(
      createTree([3, 9, 20, null, null, 15, 7])
    );
  });

  test('106.buildTree', () => {
    const buildTree = require('../src/recursion/106.buildTree');
    const { createTree } = require('./util');

    //
    expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toEqual(
      createTree([3, 9, 20, null, null, 15, 7])
    );
  });

  test('109.sortedListToBST', () => {
    const sortedListToBST = require('../src/recursion/109.sortedListToBST');
    const { createTree, makeLinkList } = require('./util');

    //
    expect(sortedListToBST(makeLinkList([-10, -3, 0, 5, 9]))).toEqual(
      createTree([0, -3, 9, -10, null, 5])
    );
  });

  test('114.flatten', () => {
    const flatten = require('../src/recursion/114.flatten');
    const { createTree } = require('./util');

    //
    expect(flatten(createTree([1, 2, 5, 3, 4, null, 6]))).toEqual(
      createTree([1, null, 2, null, 3, null, 4, null, 5, null, 6])
    );
  });

  test('116.connect', () => {
    const connect = require('../src/recursion/116.connect');
    const { createTree } = require('./util');

    const check = function(root: any) {
      if (root === null) {
        return root;
      }

      // 初始化队列同时将第一层节点加入队列中，即根节点
      const Q = [root];

      // 外层的 while 循环迭代的是层数
      while (Q.length > 0) {
        // 记录当前队列大小
        const size = Q.length;

        // 遍历这一层的所有节点
        for (let i = 0; i < size; i++) {
          // 从队首取出元素
          const node = Q.shift();

          // 连接
          if (i < size - 1) {
            node.next = Q[0];
          } else {
            node.next = null;
          }

          // 拓展下一层节点
          if (node.left !== null) {
            Q.push(node.left);
          }
          if (node.right !== null) {
            Q.push(node.right);
          }
        }
      }

      // 返回根节点
      return root;
    };

    expect(connect(createTree([1, 2, 3, 4, 5, 6, 7]))).toEqual(
      check(createTree([1, 2, 3, 4, 5, 6, 7]))
    );
  });

  test('253.minMeetingRooms', () => {
    const minMeetingRooms = require('../src/array/253.minMeetingRooms');

    expect(
      minMeetingRooms([
          [0, 30],
          [5, 10],
          [15, 20],
      ])
    ).toEqual(2);

    expect(
      minMeetingRooms([
        [7, 10],
        [2, 4],
      ])
    ).toEqual(1);
  });
});
