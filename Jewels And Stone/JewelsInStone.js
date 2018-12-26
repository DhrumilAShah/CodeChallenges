var numJewelsInStones = function(J, S) {
    var lenj=J.length,lens=S.length,counter=0
    for(var i=0;i<lenj;i++)
        for(var k=0;k<lens;k++)
            if(J[i]==S[k]) counter++
    return counter
};
