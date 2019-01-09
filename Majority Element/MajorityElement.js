var majorityElement = function(nums) {
    var len=nums.length
    if(len==1) return nums[0]
    var map = new Map();   
    var no=0,val=0;
    for(var i=0;i<len;i++){
        if(map.has(nums[i])){ 
            let counter=map.get(nums[i])+1
            map.set(nums[i],counter)
            if(counter>val){
                no=nums[i];
                val=counter;
            }
        }else{    
            map.set(nums[i],1)
        }
    }
    return no
};