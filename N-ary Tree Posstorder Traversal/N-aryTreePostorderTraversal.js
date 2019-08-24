/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var arr = [];
    traverse(root,arr);
    return arr;
};

function traverse(root,arr){
    if(root==null) return arr;
    let x = root.children;
    for(let i=0; i<x.length; i++)  traverse(x[i], arr)
    arr.push(root.val);
}