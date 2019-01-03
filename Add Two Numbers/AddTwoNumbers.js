var addTwoNumbers = function(l1, l2) {
    
if(l1==null && l2==null) return null
    
else if(l1==null) return l2
    
else if(l2==null) return l1
    
    
var arr=[],carry=0,sum=0
    
while(l1!=null || l2!=null){
        
let a=b=0;
        
if(l1!=null){ 
           
a=l1.val
            
l1=l1.next
        
}
if(l2!=null){
           
b=l2.val
           
l2=l2.next
}
        
sum=(a+b)+carry
        
arr.push((sum%10))   
        
carry=(sum>9)?1:0
    
}
    if(carry==1) arr.push(1)
    
var listNode,curr,len=arr.length;
    
listNode = new ListNode(arr[0])
    
curr = listNode;
    
for(var i=1;i<len;i++){
        
let temp=new ListNode()
        
temp.val=arr[i]
        
curr.next=temp;  
        
curr=temp;
    
}
    
return listNode

}