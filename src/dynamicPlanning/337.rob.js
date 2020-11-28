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
var rob = function (root) {
    let f = new Map();
    let g = new Map();

    function getG(key) {
        return g.get(key) || 0;
    }

    function getF(key) {
        return f.get(key) || 0;
    }

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);

        f.set(node, getG(node.left) + getG(node.right) + node.val);
        g.set(node, Math.max(getF(node.left), getG(node.left)) + Math.max(getF(node.right), getG(node.right)))
    }

    dfs(root);
    return Math.max(getF(root), getG(root))
};

// 设两个函数: f(x) 表示从 x 出发，x 树能抢的最多的钱，g(x) 表示从不 x 出发，x 树能抢的最多的钱
// 当 o 被选中时，左右节点不选,f(o) = g(o.left) + g(o.right) + o.val
// 当 o 不被选中时，左右节点都可以选，g(o) = max{f(o.left), g(o.left)} + max{f(o.right), g(o.right)}

module.exports = rob;