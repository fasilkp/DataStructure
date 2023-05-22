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
    search(target){
        let current= this.root;
        while(current){
            if(current.value===target){
                return true;
            }
            else if(target<current.value){
                current=current.left;
            }
            else if(target>current.value){
                current=current.right;
            }
            else{
                return false;
            }
        }
        return false;
    }
    preOrder(node=this.root){
        if(!node) return;
        console.log(node.value)
        this.preOrder(node.left);
        this.preOrder(node.right)
    }
    inOrder(node=this.root){
        if(!node) return;
        this.inOrder(node.left);
        console.log(node.value)
        this.inOrder(node.right)
    }
    postOrder(node=this.root){
        if(!node) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

}

const bst= new BST()
bst.insert(10)
bst.insert(20)
bst.insert(7)
bst.insert(9)

console.log(bst.search(7))
console.log(bst.search(8))
console.log(bst)
console.log('----------------------------')
bst.inOrder()
console.log('----------------------------')
bst.postOrder()
console.log('----------------------------')
bst.preOrder()


