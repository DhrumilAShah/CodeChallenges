var longestCommonPrefix = function(strs) {
    for(var i=0; i<strs.length-1; i++){
            let firAr = strs[i].split('');
            let secAr = strs[i+1].split('');
            let prefix="";
            let k=0;
            while(k<secAr.length && firAr[k] == secAr[k]){
              prefix += firAr[k]   
              k++;    
            }
            strs[i+1] = prefix;
    }
    return (strs[strs.length-1] === undefined) ? "" : strs[strs.length-1] ;
};