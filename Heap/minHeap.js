class Heap{
    constructor(arr=[]) {
        this.heap=[]
        for(let i=0; i<arr.length; i++){
            this.insert(arr[i])
        }
    }
    buildHeap(arr){
        let index=arr[arr.length-1]
        while(index>=0){
            let parentIndex=this.getParentIndex(index)
            let smallChildrenIndex=this.getLeftChildIndex(parentIndex)
            if(
                this.heap[this.getRightChildIndex(parentIndex)] && 
                this.heap[smallChildrenIndex] > this.heap[this.getRightChildIndex(parentIndex)] 
            ){
                smallChildrenIndex=this.getRightChildIndex(parentIndex)
            }
            this.swap(this.heap[smallChildrenIndex], this.heap[parentIndex])
            index--;
        }

    }
    getParentIndex(index){
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return index * 2 + 1;
    }
    getRightChildIndex(index) {
        return index * 2 + 2    ;
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]]=[this.heap[index2], this.heap[index1]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index= this.heap.length-1;
        while(index>0 && 
            this.heap[index]< this.heap[this.getParentIndex(index)]
        ){
            let parentIndex= this.getParentIndex(index);
            this.swap(index, parentIndex);
            index=parentIndex
        }
    }
    heapifyDown(index=0){
        while(this.heap[this.getLeftChildIndex(index)]){
            let smallChildrenIndex=this.getLeftChildIndex(index)
            if(this.heap[this.getRightChildIndex(index)] && this.heap[smallChildrenIndex]>this.heap[this.getRightChildIndex(index)]){
                smallChildrenIndex=this.getRightChildIndex(index)
            }
            if(this.heap[index] < this.heap[smallChildrenIndex]){
                break;
            }
            this.swap(index, smallChildrenIndex)
            index=smallChildrenIndex
        }

    }
    isEmpty(){
        return this.heap.length === 0
    }
    extractMin(){
        if(this.isEmpty()) return null;
        const min= this.heap[0]
        if(this.heap.length===1){
            return this.heap.pop()
        }
        this.heap[0]=this.heap.pop()
        this.heapifyDown();
        return min
    }
    sort(){
        let i=0;
        while(i<this.heap.length){
            // console.log(this.heap[i], this.heap[this.heap.length-1])
            this.swap(i, this.heap.length-1);
            // this.heapifyDown(i);
            i++;
        }
        console.log(this.heap)
    }
    print(){
        console.log(this.heap)
    }
    
}

const heap= new Heap([10,3,1,5,2,8,6,0]);
// const heap = new Heap()


// heap.print()

// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
// console.log(heap.extractMin())
heap.sort()

// heap.print()j