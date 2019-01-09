/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var arr=[]
    for(var k=left;k<=right;k++){
        var numArr=k+""
        var len=numArr.length
        for(var i=0;i<len;i++)
            if( k%numArr[i]!=0 ) break
        if(i==len) arr.push(k)
    }
    return arr
};