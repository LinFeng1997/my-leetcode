/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const {TreeNode} = require('../../test/util');

var generateTrees = function (n) {
    if (n === 0) {
        return [];
    }

    return generateTree(1, n);
};

function generateTree(start, end) {
    const all = [];

    if (start > end) {
        return [null];
    }
    for (let i = start; i <= end; i++) {
        let leftTrees = generateTree(start, i - 1);
        let rightTrees = generateTree(i + 1, end);

        leftTrees.forEach(left => {
            rightTrees.forEach(right => {
                const cur = new TreeNode(i);
                cur.left = left;
                cur.right = right;
                all.push(cur);
            })
        })
    }

    return all;
}

module.exports = generateTrees;