var findDisappearedNumbers = function(nums) {
    var missingArr=[]
    var len=nums.length
    for(var i=0;i<len;i++){
        if(!nums.includes(i+1))
            missingArr.push(i+1)
        else continue
    }
    return missingArr
};
