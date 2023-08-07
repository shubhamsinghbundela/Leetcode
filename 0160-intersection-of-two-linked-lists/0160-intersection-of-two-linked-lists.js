/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
   // console.log(headA);
    // console.log(headB);
    let set = new Set();
    while(headA){
        set.add(headA);
        headA=headA.next;
    }
    // console.log(headA);
    while(headB){
        if(set.has(headB)){
            return headB;
        }
        headB=headB.next;
    }
    return null;
};