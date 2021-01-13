/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const {TreeNode} = require('../../test/util');

var buildTree = function(preorder, inorder) {
    let map = new Map();

    inorder.forEach((item,index) => {
        map.set(item,index)
    });

    function build(preorderStart,preorderEnd,inorderStart,inorderEnd) {
        if (preorderStart > preorderEnd) {
            return null;
        }
        
        let rootVal = preorder[preorderStart];
        let rootIndex = map.get(rootVal);
        let root = new TreeNode(rootVal);

        let leftCount = rootIndex - inorderStart;

        root.left = build(preorderStart + 1, preorderStart + leftCount, inorderStart, rootIndex - 1);
        root.right = build(preorderStart + leftCount + 1, preorderEnd, rootIndex + 1, inorderEnd);

        return root;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};

// 前序能找到根
// 中序能根据根区分左右子树
// 所以子函数入参有四个索引
// 注意 null 节点的情况
module.exports = buildTree;