class MaxHeap{
    constructor(){
        this.heap=[]
    }
    getLeftChildIndex(parentIndex){
        return (2*parentIndex)+1
    }
    getLeftChild(parentIndex){
        return this.heap[(2*parentIndex)+1]
    }
    getRightChildIndex(parentIndex){
        return (2*parentIndex)+2
    }
    getRightChild(parentIndex){
        return this.heap[(2*parentIndex)+2]
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getParent(index){
        return this.heap[Math.floor((index-1)/2)]
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]]=[this.heap[index2], this.heap[index1]]
    }
    heapifyUp(index=this.heap.length-1){
        let parentIndex=this.getParentIndex(index)
        console.log("------------")
        while(index>0 && this.heap[index] > this.heap[parentIndex] ){
            console.log(index)
            this.swap(parentIndex, index)
            index=parentIndex
            parentIndex= this.getParentIndex(index)
        }
    }
    buildHeap(array){
        this.heap=array;
        let length = array.length;
        let lastParent = Math.floor(length-1/2);
        for(let i=lastParent;i>=0;i--){
            this.heapifyDown(i);
        }
    }
    heapifyDown(index=0){
        let largeChildrenIndex= this.getLeftChildIndex(index);
        while(
            this.heap[this.getLeftChildIndex(index)] && 
            this.heap[index] < this.heap[largeChildrenIndex]
            ){
                if(this.heap[this.getRightChildIndex(index)] && this.heap[this.getLeftChildIndex(index)]<this.heap[this.getRightChildIndex(index)]){
                    largeChildrenIndex=this.getRightChildIndex(index)
                }
                this.swap(largeChildrenIndex, index)
                index=largeChildrenIndex
            }
    }
    extractMax(){
        if(this.heap.length===0){
            return null;
        }
        let max= this.heap[0]
        if(this.heap.length===1){
            this.heap.pop();
            return max;
        }
        this.heap[0]= this.heap.pop();
        this.heapifyDown();
        return max
    }
    sort(){
        let output=[]
        let max=this.extractMax()
        while(max){
            output.unshift(max)
            max=this.extractMax()
        }
        console.log(output)
        // let i=0;
        // while(i<this.heap.length){
        //     this.heapifyDown(i);
        //     i++;
        // }
        
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp();
    }
}

const maxHeap= new MaxHeap();
// maxHeap.insert(10)
// maxHeap.insert(20)
// maxHeap.insert(30)
// maxHeap.insert(15)
// maxHeap.insert(25)
maxHeap.buildHeap([10, 20, 15, 7, 5, 2, 5, 3])

console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)
console.log(maxHeap.extractMax())
console.log(maxHeap.heap)

// maxHeap.sort()
