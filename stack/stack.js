class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.top=node;
        }
        else{
            node.next=this.top
            this.top=node;
        }
        this.size++;
    }
    pop(){
        if(this.isEmpty()){
            console.log("nothing to delete");
        }
        else{
            let value= this.top.data;
            this.top=this.top.next;
            console.log(value)
            this.size--;
            return value
        }
    }
    peak(){
        if(this.isEmpty()){
            console.log("no value found");
        }
        else{
            console.log(this.top.data)
            return this.top.data
        }
    }
    print(){
        let current= this.top;
        let arr=[]
        while(current){
            arr.push(current.data)
            current=current.next;    
        }
        console.log(arr)
        return arr;
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

stack.print()

stack.pop()
stack.pop()

stack.print()

stack.peak()