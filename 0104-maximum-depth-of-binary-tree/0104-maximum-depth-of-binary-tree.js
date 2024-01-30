/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
     if (!root) return 0;
    let level=0;
    let queue=[root];
    while(queue.length){
        let size = queue.length;
        while(size){
            let temp = queue.shift();
            size-=1;
            if(temp.left) queue.push(temp.left);
            if(temp.right) queue.push(temp.right);
        }
        level+=1;
    }
    return level
};