class Node {
    constructor(value) {
        this.value = value
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node
        this.size++;
    }


   


}



const linkedList = new LinkedList()


