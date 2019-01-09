/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var sum=0;
    var vldIndx=[];
    var len = ops.length
    for(var i=0; i<len; i++){
        if(ops[i]==="C"){
            sum = sum - parseInt(ops[vldIndx.pop()]);
        } else if(ops[i]==="D"){
            let temp = ( 2 * parseInt(ops[vldIndx[vldIndx.length-1]]) )
            sum += temp
            ops[i] = temp
            vldIndx.push(i)
        } else if(ops[i]==="+"){
            let temp = parseInt(ops[vldIndx[vldIndx.length-1]]) + parseInt(ops[vldIndx[vldIndx.length-2]])
            sum += temp
            ops[i]=temp
            vldIndx.push(i)
        }else{
          sum += parseInt(ops[i]);
          vldIndx.push(i);
        }    
    }
    return sum
};