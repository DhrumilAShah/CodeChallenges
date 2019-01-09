/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var root1Arr=[]
    var root2Arr=[]
    getLeaf(root1,root1Arr)
    getLeaf(root2,root2Arr)
    //if(root1Arr.length!=root2Arr.length) return false
    for(var i=0; i<root1Arr.length; i++) if(root1Arr[i]!=root2Arr[i]) return false
    return true; 
};
var getLeaf = function(root,arr){
    if(root==null) return null
    if(root.right == null && root.left==null) arr.push(root.val)
    root.left = getLeaf(root.left,arr)
    root.right = getLeaf(root.right,arr);
}