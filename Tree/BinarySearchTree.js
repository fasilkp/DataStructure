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
    inOrder(node){
        if(!node) return;
        this.inOrder(node.left);
        console.log(node.value)
        this.inOrder(node.right)
    }

}

const bst= new BST()
bst.insert(10)
bst.insert(20)
bst.insert(7)
bst.insert(9)

console.log(bst.search(7))
console.log(bst.search(8))
console.log(bst.search(10))
console.log(bst.search(20))
console.log(bst.search(70))
console.log(bst.search(80))
console.log(bst)
bst.inOrder(bst.root)


