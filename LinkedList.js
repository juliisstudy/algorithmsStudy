import LinkedListNode from './LinkedListNode.js';

/**
 * + Nodes can easily be removed or added from a linked list without reorganizing the entire data structure
 * - search operations are slow, random access data element is not allowed.
 * - It used more memory than array because of pointer.
 */

export default class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value,this.head);
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    /**
   * @param {*} value
   * @param {number} index
   * @return {LinkedList}
   */

    insert(value,rawIndex) {
        const index = rawIndex < 0 ? 0 : rawIndex;
        if(index == 0) {
            this.prepend(value);
        }else{
            let count = 1;
            let currentNode = this.head;
            const newNode = new LinkedListNode(value);
            while (currentNode) {
                if(count == index)
                    break;
                currentNode = currentNode.next;
                count += 1;
            }
            if(currentNode) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            } else {
                if(this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode;
                } else {
                    this.head = newNode;
                    this.tail = newNode;
                }
            }
        }
        return this;
    }

    /**
   * @param {*} value
   * @return {LinkedList}
   */

    delete(value) {
        if(!this.head) {
            return null;
        }

        let deleteNode = null;

        while (this.head){
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        
        }
    


 }

