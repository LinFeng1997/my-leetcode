/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let paths = [];

    const dfs = (node, path) => {
        if (!node) return;

        const newPath = [...path, node.val];

        if (isLeft(node)) {
            paths.push(newPath);
            return;
        }

        dfs(node.left, newPath);
        dfs(node.right, newPath);
    };

    dfs(root, []);

    const num = paths.reduce((pre,cur) => {
        return pre + trans(cur);
    },0);
    return num;
};

function isLeft(node) {
    return node && !node.left && !node.right;
}

function trans(arr) {
    const length = arr.length;
    return arr.reduce((pre,cur,index) => {
        return pre + cur * Math.pow(10,length - 1 - index)
    },0)
}

module.exports = sumNumbers;