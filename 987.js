/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    pos = {};
    dfs(root, 0, 0);
    let list = Object.keys(pos).sort((a,b) => {
        return +a - +b;
    }).map(item => pos[item]);

    list = list.map(item => {
        item.sort((a,b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            }
            else {
                return b[0] - a[0];
            }
        })
        return item.map(g => g[1]);
    })

    return list;

    function dfs(root, x, y) {

        if (!root) return;

        if (!pos[x]) {
            pos[x] = [];
        }
        pos[x].push([y, root.val]);
        dfs(root.left, x - 1, y - 1);
        dfs(root.right, x + 1, y - 1);
    }
};
