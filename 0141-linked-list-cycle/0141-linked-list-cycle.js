/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let newNode={ val : -1, next : null };
    if(head==null){
        return false;
    }
    while(head.next!=null){
        
        if(head.next === newNode){
            // console.log(head)
            // console.log(newNode)
            return true;
        }
        let temp = head.next;
        head.next = newNode;
        head = temp;
    }
    return false;
};