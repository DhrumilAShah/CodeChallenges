var isHappy = function(n) {
    var visited=[]
    while(true){
        n = (n+"").split('')
        let sqr=0
        let len = n.length
        for(var i=0;i<len;i++) sqr += (n[i]*n[i]);
        if(sqr==1) return true;
        if(visited.includes(sqr)) return false
        else visited.push(sqr)
        n=sqr; 
    }
};