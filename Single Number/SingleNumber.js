var singleNumber = function(nums) {
    var len = nums.length   
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if(nums[i]==nums[j])
                nums[i]=nums[j]=0     
        }
        if(nums[i]!=0) return nums[i]
    }
    for(var k=0;k<len;k++) if(nums[k]!=0) return nums[k]
    return 0;
};
