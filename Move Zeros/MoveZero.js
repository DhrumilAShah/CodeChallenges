var moveZeroes = function(nums) {
    var zeroCounter=0;
    var len=nums.length
    for(var i=0; i<len; i++){
        if(nums[i] == 0){
            nums.splice(i,1)
            zeroCounter++
            i--
        }
    }
    while(zeroCounter>0){
         nums.push(0)
        zeroCounter--
    }
};
