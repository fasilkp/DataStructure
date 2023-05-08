class Node{
    constructor(value){
        this.prev=null;
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor() {
        this.size = 0
        this.head = null
    }
    isEmpty(){
        return this.size===0
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let current=this.head;
            let prev=null
            while(current.next){
                prev=current;
                current=current.next;
            }
            current.next=node
            current.prev=prev
        }
        this.size++
    }

    print(){
        let current= this.head;
        let str=''
        while(current){
            str+=" "+current.value;
            current=current.next;
        }
        console.log(str)
    }
    
}

const linkedList = new LinkedList()
linkedList.append(5)
linkedList.append(6)
linkedList.append(7)
linkedList.append(8)

linkedList.print()