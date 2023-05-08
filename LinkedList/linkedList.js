class Node {
    constructor(value) {
        this.value = value
        this.next=null
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
    } // O(1)


    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let currrent = this.head
            while (currrent.next) {
                currrent = currrent.next
            }
            currrent.next = node;
        }
        this.size++;
    } // O(n)


    getELements() {
        if (this.isEmpty()) {
            console.log("no values found")
        }
        let currrent = this.head
        while (currrent) {
            console.log(currrent.value);
            currrent = currrent.next
        }
    } // O(n)

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index")
            return
        }
        if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    } // O(n)

    set(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index")
        }
        else {
            let currrent = this.head;
            for (let i = 0; i < index ; i++) {
                currrent = currrent.next;
            }
            currrent.value= value
        }
    }// O(n)

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index")
            return
        }
        if(index===0){
            this.head=this.head.next
        }
        else {
            let currrent = this.head;
            for (let i = 0; i < index-2 ; i++) {
                currrent = currrent.next;
            }
            currrent.next= currrent.next.next
        }
        this.size--;
    } //O(n)

    removeValue(value){
        if(this.head.value===value){
            this.head=this.head.next
        }
        else{
            let currrent = this.head;
            while(currrent.next){
                if(currrent.next.value==value){
                    currrent.next= currrent.next.next
                    return
                }
                currrent=currrent.next
            }
        }
    }

    search(value){
        let count=0;
        let current=this.head
        while(current.next){
            if(current.value==value){
                return count
            }
            current=current.next
            count++;
        }
        return 'not found'
    }

    reverse(){
        let current= this.head;
        let prev= null;
        while(current){
            let temp=current.next;
            current.next=prev;
            prev=current;
            current=temp
        }
        this.head=prev;   
    }
}

const linkedList = new LinkedList()

linkedList.prepend(1)
linkedList.prepend(2)
linkedList.prepend(3)
linkedList.append(4)
linkedList.append(5)
linkedList.append(6)
linkedList.append(6)

// linkedList.insert(54, 1)
// linkedList.set(23, 1)
// linkedList.removeFrom(23)

// linkedList.removeValue(6)




linkedList.getELements()

linkedList.reverse()
console.log("--------------------------")
linkedList.getELements()


// console.log(linkedList.search(989))

// let arr = [1,2,3,4,5,56,7]

// for(let i=0; i<arr.length; i++){
//     linkedList.append(arr[i])
// }

// linkedList.getELements()
