/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return inverse(root);
};

function inverse(root){
    if(root==null) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    inverse(root.left);
    inverse(root.right);
    return root  
}