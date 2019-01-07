var maxDepth = function(root) {
  if(root==null) return 0;
  let ldept=maxDepth(root.left)
  let rdept=maxDepth(root.right)
  return (++rdept > ++ldept) ? rdept : ldept
}