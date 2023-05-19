class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root=node;
        }else{
            let current= this.root;
            while(true){
                if(value<=current.value){
                    if(!current.left){
                        current.left=node;
                        return;
                    }
                    current=current.left;
                }
                else{
                    if(!current.right){
                        current.right=node;
                        return;
                    }
                    current=current.right;
                }
            }
        }
    }

}

const bst= new BST()
bst.insert(10)
bst.insert(20)
bst.insert(7)
bst.insert(8)
console.log(bst)