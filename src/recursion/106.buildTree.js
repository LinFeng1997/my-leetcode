/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const {TreeNode} = require('../../test/util');

var buildTree = function(inorder, postorder) {
    let map = new Map();

    inorder.forEach((item,index) => {
        map.set(item,index)
    });

    let postorderEnd = postorder.length - 1;

    function build(inorderStart,inorderEnd) {
        if (inorderStart > inorderEnd) {
            return null;
        }

        let rootVal = postorder[postorderEnd--];
        let rootIndex = map.get(rootVal);
        let root = new TreeNode(rootVal);

        root.right = build(rootIndex + 1, inorderEnd);
        root.left = build(inorderStart, rootIndex - 1);

        return root;
    }

    return build(0, inorder.length - 1);
};

// 中序能根据根区分左右子树
// 后序能找到根
// 理论上子函数入参有四个索引（但其实可以去掉 postorderStart,而 postorderEnd 是全局变量，且必须先构造右子树）
// 注意 null 节点的情况
module.exports = buildTree;