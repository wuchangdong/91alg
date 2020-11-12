/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if (!head || !head.next || k === 0) return head;
    
    let count = 0;
    let curr = head;
    while(curr) {
        curr = curr.next;
        count++;
    }
    k %= count;
    let slow = head;
    let fast = head;

    
    while(fast.next) {
        if (k-- <= 0) {
            slow = slow.next
        }
        fast = fast.next;
    }
    fast.next = head;
    const resHead = slow.next;
    slow.next = null;
    return resHead;
};
