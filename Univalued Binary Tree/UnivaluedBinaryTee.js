/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    var arr=[]
    arr=parseTree(root,arr)
    for(var i=0;i<arr.length;i++)
        if(arr[i]!=arr[0]) return false;
    return true;
}
parseTree=function(root,arr){
    if(root==null) return null;
    arr.push(root.val)
    root.left=parseTree(root.left,arr)
    root.right=parseTree(root.right,arr) 
    return arr;
};  