/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let resHead = head.next;
    let currNode = head;
    let prevNode = new ListNode();
    prevNode.next = head;
    while(currNode && currNode.next) {
        let nextNode = currNode.next;
        let nnNode = nextNode.next;
        currNode.next = nnNode;
        nextNode.next = currNode;
        
        prevNode.next = nextNode;
        prevNode = currNode;
        
        currNode = nnNode;
    }
    return resHead;
};
