var findDisappearedNumbers = function(nums) {
    var len = nums.length
    nums = new Set(nums)
    var missingArr=[];
    for(var i=0;i<len;i++)  if(!nums.has(i+1))  missingArr.push(i+1) 
    return missingArr;
};
