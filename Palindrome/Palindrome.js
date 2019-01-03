/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   x=x+""
   x = x.split('')
   let y = x.slice(0).reverse()
   let len=x.length
   for(let i=0;i<len;i++)
     if(x[i] != y[i]) return false
   return true
};