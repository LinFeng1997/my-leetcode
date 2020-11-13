/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) return 0;

    let res = 0;

    const dfs = (node,sum) => {
        if (!node) return 0;

        res += _pathSum(node,sum);

        dfs(node.left,sum);
        dfs(node.right,sum);

        return res;
    };

    dfs(root,sum);

    return res;
};

function _pathSum(root, sum) {
    // let paths = [];
    let res = 0;

    const dfs = (node, path,num) => {
        if (!node) return;

        const newPath = [...path, node.val];

        let rest = num - node.val;

        if (rest === 0) {
            // paths.push(newPath);
            res += 1;
            // return;
        }

        dfs(node.left, newPath,rest);
        dfs(node.right, newPath,rest);
    };

    dfs(root, [],sum);

    // return paths.length;
    return res;
};


module.exports = pathSum;