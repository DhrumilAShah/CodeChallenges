var mergeTwoLists = function(l1, l2) {
    if(l1==null && l2==null) return null
    else if(l1==null) return l2
    else if(l2==null) return l1
    
    var arr=[]
    while(l1!=null || l2!=null){
        if(l1!=null){ 
           arr.push(l1.val)
            l1=l1.next
        }
        if(l2!=null){
           arr.push(l2.val)
           l2=l2.next
        }
    }
    arr = arr.sort((a,b)=> a - b)
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