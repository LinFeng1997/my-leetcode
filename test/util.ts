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

export function createTree(dat: any[]) {
  const len = dat.length;
  let root: any = null;
  let index = 0;
  if (len > 0) root = new TreeNode(dat[index]);
  else return null;

  let queue = [];
  queue.push(root);
  index++;

  while (index < len) {
    if (queue.length) {
      let cur = queue.shift();
      if (index < len) {
        if (dat[index] != null) {
          cur.left = new TreeNode(dat[index]);
          queue.push(cur.left);
        }
        index++;
      }
      if (index < len) {
        if (dat[index] != null) {
          cur.right = new TreeNode(dat[index]);
          queue.push(cur.right);
        }
        index++;
      }
    }
  }

  return root;
}
