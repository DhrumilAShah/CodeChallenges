/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    for(var i=0;i<A.length-1;i++) if(A[i] > A[i-1] && A[i] > A[i+1]) return i
};