/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let paths = [];

    const dfs = (node, path) => {
        if (!node) return;

        const newPath = [...path, String(node.val)];

        if (isLeft(node)) {
            paths.push(newPath);
            return;
        }

        dfs(node.left, newPath);
        dfs(node.right, newPath);
    };

    dfs(root, []);

    return paths.map(item => item.join('->'));
};

function isLeft(node) {
    return node && !node.left && !node.right;
}

module.exports = binaryTreePaths;