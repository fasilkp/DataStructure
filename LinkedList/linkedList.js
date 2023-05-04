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


    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let currrent = this.head
            while (currrent.next) {
                currrent = currrent.next
            }
            currrent.next=node;
        }
        this.size++;
    }


    getELements() {
        if (this.isEmpty()) {
            console.log("no values found")
        }
        let currrent = this.head
        while (currrent) {
            console.log(currrent.value);
            currrent = currrent.next
        }
    }


}



const linkedList = new LinkedList()
linkedList.prepend(5)
linkedList.prepend(6)
linkedList.prepend(7)

linkedList.append(8)
linkedList.prepend(10)
linkedList.append(11)



linkedList.getELements()

