/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    var nums=[];
    var inc = 0;
    var dsr = S.length;
    for(let i=0;i<=S.length;i++)
        nums.push( (S[i]==="I") ? inc++: dsr--);
    return nums;  
};
