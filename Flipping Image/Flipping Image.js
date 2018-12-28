var flipAndInvertImage = function(A) {
    var len=A[0].length;
    for(var i=0;i<len;i++){
        A[i].reverse()
        for(var j=0;j<len;j++)
            A[i][j]=(A[i][j]==1)?0:1
    }
    return A
};
