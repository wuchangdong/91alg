// bfs
var findBottomLeftValue = function(root) {
    
    let result = root;
    let currLevel = [root];
    
    while (currLevel.length) {
        const newLevel = [];
        result = currLevel[0];
        for(let i = 0; i < currLevel.length; i++) {
            const currItem = currLevel[i];
            
            if (currItem.left) {
                newLevel.push(currItem.left);
            }
            if (currItem.right) {
                newLevel.push(currItem.right);
            }
        }
        currLevel = newLevel;
    }
    return result.val;
};

// dfs
var findBottomLeftValue = function(root) {
    let result = root;
    let maxDepth = -1;
    
    function dfs(root, num) {
        if (!root) return;
        
        if (num > maxDepth) {
            result = root;
            maxDepth = num;
        }
        
        dfs(root.left, num + 1);
        dfs(root.right, num + 1);
    }
    dfs(root, 0);
    return result.val;
};
