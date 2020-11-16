/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return h(arr);
};

function h(res) {
    if (res.length === 0) return null;
    let mid = parseInt(res.length / 2);
    let root = new TreeNode(res[mid]);
    root.left = mid > 0 ? h(res.slice(0, mid)) : null
    root.right = mid >= res.length - 1 ? null : h(res.slice(mid + 1))
    return root;
}
