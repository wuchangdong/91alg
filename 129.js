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
// dfs
var sumNumbers = function(root) {
    let sum = 0;
    
    function dfs(root, curNum) {
        if (!root) {
            return;
        }
        
        let curSum = curNum * 10 + root.val;
        
        if (!root.left && !root.right) {
            sum += curSum;
            return;
        }
        
        dfs(root.left, curSum);
        dfs(root.right, curSum);
    }
    dfs(root, 0);
    return sum;
};

// bfs
var sumNumbers = function(root) {
    
    let sum = 0;
    let currLevel = [];
    if (root) {
        currLevel.push(root);
    }
    
    while (currLevel.length) {
        const nextLevel = [];
        
        for (let i = 0; i < currLevel.length; i++) {
            const curItem = currLevel[i];
            
            if (curItem.left) {
                curItem.left.val = curItem.val * 10 + curItem.left.val;
                nextLevel.push(curItem.left);
            }
            
            if (curItem.right) {
                curItem.right.val = curItem.val * 10 + curItem.right.val;
                nextLevel.push(curItem.right);
            }
            
            if (!curItem.right && !curItem.left) {
                sum += curItem.val;
            }
        }
        
        currLevel = nextLevel;
    }
    
    return sum;
};
