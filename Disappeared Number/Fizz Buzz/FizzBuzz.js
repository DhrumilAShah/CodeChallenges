/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var arr=[]
    for(var i=1;i<=n;i++){
      let num="";
      var flag=false
      if(i%3==0) {flag=true; num += "Fizz"}
      if(i%5==0) {flag=true;num += "Buzz" }
      if(!flag) num+= i
      flag=false
      arr.push(num)
    }
    return arr
};