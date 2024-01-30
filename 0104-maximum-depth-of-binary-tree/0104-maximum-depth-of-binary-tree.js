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
    if(root==null){
        return 0;
    }
    let leftSubtree = maxDepth(root.left);
    let rightSubtree = maxDepth(root.right);
    return 1 + Math.max(leftSubtree, rightSubtree);
};