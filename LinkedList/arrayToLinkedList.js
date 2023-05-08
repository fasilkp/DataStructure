class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

function arrayToLinkedList(arr){
    let head= null;
    let current=head;
    for(let i=0; i<arr.length; i++){
        if(head==null){
            head=new Node(arr[i]);
            current=head;
        }
        else{
            current.next= new Node(arr[i])
            current=current.next;
        }
    }
    return head
}


let linkedListValues = arrayToLinkedList([1,2,3,4,55,6])
console.log(linkedListValues)

let current=linkedListValues;

while(current){
    console.log(current.value)
    current= current.next
}