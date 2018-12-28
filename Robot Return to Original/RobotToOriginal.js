var judgeCircle = function(moves) {
    var obj={"U":2,"D":-2,"L":1,"R":-1}
    var len=moves.length;
    var counter=0;
    for(var i=0;i<len;i++)
        counter+=obj[moves[i]]
    return (counter==0)
};
