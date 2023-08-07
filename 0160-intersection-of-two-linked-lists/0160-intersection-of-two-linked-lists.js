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
    let nodeA = headA;
    let nodeB = headB;
   let countNodesLL1 = 0;
    while(headA){
        headA=headA.next;
        countNodesLL1++;
    }
    // console.log(countNodesLL1);
    let countNodesLL2 = 0;
    while(headB){
        headB=headB.next;
        countNodesLL2++;
    }
    // console.log(countNodesLL2);
    let countDiff;
    if(countNodesLL1>countNodesLL2){
        countDiff=countNodesLL1-countNodesLL2;
        while(countDiff!=0){
            nodeA=nodeA.next;
            countDiff--;
        }
    }else{
        countDiff=countNodesLL2-countNodesLL1;
        while(countDiff!=0){
            // console.log(countDiff);
            nodeB=nodeB.next;
            countDiff--;
        }
        console.log(nodeB)
        // console.log(countDiff);
    }
    while(nodeA!=null){
        if(nodeA===nodeB){
            return nodeA;
        }
        nodeA=nodeA.next;
        nodeB=nodeB.next;
    }
    return null
};