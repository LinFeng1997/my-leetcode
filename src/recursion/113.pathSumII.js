/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let paths = [];

    const dfs = (node, path,num) => {
        if (!node) return;

        const newPath = [...path, node.val];

        let rest = num - node.val;

        if (isLeft(node) && rest === 0) {
            paths.push(newPath);
            return;
        }

        dfs(node.left, newPath,rest);
        dfs(node.right, newPath,rest);
    };

    dfs(root, [],sum);

    return paths;
};


function isLeft(node) {
    return node && !node.left && !node.right;
}

module.exports = pathSum;