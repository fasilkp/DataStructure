
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
    levelOrder(){
        let queue=[]
        if(!this.root) return;
        queue.push(this.root)
        while(queue.length){
            let curr= queue.shift();
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    minNode(node=this.root){
        let current=node;
        if(!current) {
            console.log("no values found"); 
            return '';
        }
        while(current.left){
            current=current.left;
        }
        console.log(current.value)
        return current.value
    }
    maxNode(node=this.root){
        if(!node.right){
            console.log(node.value)
            return node.value
        }
        return this.maxNode(node.right)
    }
    delete(value){
        this.root= this.deleteNode(this.root, value)

    }
    deleteNode(root, value){
        if(!root){
            return root;
        }
        if(value < root.value){
            root.left= this.deleteNode(root.left, value)
        }
        else if(value > root.value){
            root.right= this.deleteNode(root.right, value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.minNode(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }

}

const bst= new BST()

bst.insert(10)
bst.insert(20)
bst.insert(7)
bst.insert(9)
console.log('----------------------------')
console.log(bst.search(7))
console.log(bst.search(8))
console.log(bst)
console.log('----in order------------------------')
bst.inOrder()
console.log('----post order------------------------')
bst.postOrder()
console.log('----pre order------------------------')
bst.preOrder()
console.log('----level order------------------------')
bst.levelOrder()
console.log('----min and max node------------------------')
bst.minNode()
bst.maxNode()
console.log('----delete  ------------------------')
bst.delete(10)
bst.inOrder()
console.log('----------------------------')


