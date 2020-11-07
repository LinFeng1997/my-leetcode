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

// Todo: 在 dfs 遍历二叉树里的用例构造出来不对
export const sortedArrayToBST = function(nums: any[]) {
  if (nums == null || nums.length == 0) return null;
  let len = nums.length;
  let index = 0;
  let head = new TreeNode(nums[index]);
  let nodeQueue: (TreeNode | null)[] = [];
  nodeQueue.unshift(head);
  let cur: TreeNode | undefined;

  while (index < len) {
    index++;
    if (index >= len) return head;
    // @ts-ignore
    cur = nodeQueue.pop();
    let left = nums[index];
    if (cur) {
      cur.left = left ? new TreeNode(left) : null;
      nodeQueue.unshift(cur.left);
    }

    index++;
    if (index >= len) return head;
    let right = nums[index];
    if (cur) {
      cur.right = right ? new TreeNode(right) : null;
      nodeQueue.unshift(cur.right);
    }
  }
  return head;
};
