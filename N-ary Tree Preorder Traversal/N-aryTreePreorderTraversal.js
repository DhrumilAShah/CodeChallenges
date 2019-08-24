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
var preorder = function(root) {
    var ary = [];
    traverse(root,ary);
    return ary
};

function traverse(root,ary){
    if(root==null) return ary
    ary.push(root.val)
    let x = root.children;
    for(let i=0; i < x.length;i++){
           traverse(x[i],ary);
     }
}