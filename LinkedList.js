class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head            //start at the head
        if(!this.head) {                    // if the list is empty, return null
            return null
        }
                                            //check for the item
        while(currNode.value !== item) {    //return null if it's the end of the list and item is
            if(currNode.next === null) {    //not on the list
                return null
            }
            else {
                currNode = currNode.next    //otherwise, keep looking
            }
        }
        return currNode                     //found it
    }
}