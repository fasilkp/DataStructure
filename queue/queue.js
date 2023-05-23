class Node {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0
    }
    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.rear = node;
            this.front = node;
        }
        else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("nothing to delete")
        }
        else {
            let value = this.front.data;
            this.front = this.front.next;
            console.log(value)
            this.size--;
            return value
        }
    }
    print() {
        let current = this.front;
        let arr = []
        while (current) {
            arr.push(current.data)
            current = current.next
        }
        console.log(arr)
        return arr;
    }
    
}

const q= new Queue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

q.dequeue()

q.print()

export default Queue