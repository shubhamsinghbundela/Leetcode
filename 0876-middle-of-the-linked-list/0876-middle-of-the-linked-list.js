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
var middleNode = function(head) {
    let count = 1;
    let currentNode= head;
    while(currentNode.next!=null){
        count++;
        currentNode=currentNode.next;
    }
    // console.log(count);
    let count1;
    if(count%2==0){
        count1= (count/2)+1;
    }else{
        count1= Math.ceil(count/2);
    }
    let count2=1;
    let newCurrentNode=head;
    while(count2<count1){
        newCurrentNode=newCurrentNode.next;
        count2++;
    }
    return newCurrentNode;
    
};