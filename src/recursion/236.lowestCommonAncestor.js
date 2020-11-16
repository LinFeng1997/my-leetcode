/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let parentMap = {};

    function dfs(node,parent = node) {
        if (!node) return;

        if (parent !== node) {
            parentMap[node.val] = parent;
        }
        dfs(node.left,node);
        dfs(node.right,node);
    }

    dfs(root);

    let visited = {};
    while (p) {
        visited[p.val] = true;
        p = parentMap[p.val];
    }

    while (q) {
        if (visited[q.val]) {
            return q;
        }
        q = parentMap[q.val];
    }

    return null;
};


module.exports = lowestCommonAncestor;