export class ListNode<T>{
    data: T | null = null
    next: ListNode<T> | null = null

    constructor(data: T) {
        this.data = data
    }
}

export class LinkedList<T>{
    head: ListNode<T> | null = null

    /** 
     * Store total size of linked list 
     * */
    private size = 0

    /** It will return node at index or null if not exist
     * @returns ListNode<T> | null
     */
    private getNodeAt(searchIndex: number): ListNode<T> | null {

        if (searchIndex < 0 || searchIndex >= this.size) {
            return null
        }
        // 0 position node
        var node = this.head

        // node from 0 position
        var index = 0
        while (index < searchIndex) {
            index++
            node = node!!.next
        }

        return node
    }


    /**
     * add new node to list
     * @param node 
     */

    push(node: ListNode<T>) {
        if (this.size == 0) {
            this.head = node
        } else {
            let lastNode = this.getNodeAt(this.size - 1)
            lastNode!!.next = node
        }

        this.size++
    }


    /**
     * delete the last node
     * @returns last deleted node | null
     */
    pop(): ListNode<T> | null {
        var lastNode: ListNode<T> | null = null
        if (this.size > 0) {
            lastNode = this.getNodeAt(this.size - 1)

            let secondLastNode = this.getNodeAt(this.size - 2)
            secondLastNode!!.next = null
            this.size--
        }

        return lastNode
    }



    /**
     * @returns total size of list
     */
    length() {
        return this.size
    }


    /**
     * Print all nodes
     */
    printNodes() {
        var nodeData = ""
        var index = 0
        while (index < this.size) {
            nodeData += this.getNodeAt(index)!!.data + "\n"
            index++
        }

        console.log(nodeData)
    }



    /**
     * insert new node to specific index
     * @param index 
     * @param node 
     * @returns true if inserted, otherwise false
     */
    insertAt(index: number, node: ListNode<T>): boolean {
        if (index < 0 || index >= this.size) {
            return false
        }

        let nodeAtIndex = this.getNodeAt(index)!!
        let nodeBeforeIndex = this.getNodeAt(index - 1)

        if (nodeBeforeIndex == null) {
            this.head = node
            this.head.next = nodeAtIndex
        } else {
            nodeBeforeIndex.next = node
            node.next = nodeAtIndex
        }

        this.size++
        return true
    }

    /**
     * delete node from specific index
     * @param index 
     * @returns ListNode<T> | null 
     */
    removeAt(index: number): ListNode<T> | null {
        if (index < 0 || index >= this.size) {
            return null
        }

        let nodeAtIndex = this.getNodeAt(index)!!
        let nodeBeforeIndex = this.getNodeAt(index - 1)

        if (nodeBeforeIndex == null) {
            this.head = nodeAtIndex.next
        } else {
            nodeBeforeIndex.next = nodeAtIndex.next
        }

        this.size--
        return nodeAtIndex
    }


    /**
     * @returns index of node if possible, otherwise -1
     */
    indexOf(node: ListNode<T>): number {
        var tempNode = this.head
        var index = -1
        while (tempNode != null) {
            index++
            if (tempNode.data == node.data) {
                return index
            }

            tempNode = tempNode.next
        }
        return -1
    }

    /**
     * check whether node exist or not
     * @param node 
     * @returns index of node if possible, otherwise -1
     */
    isExist(node: ListNode<T>): boolean {

        var tempNode = this.head

        while (tempNode != null) {

            if (tempNode.data == node.data) {
                return true
            }

            tempNode = tempNode.next
        }
        return false
    }
}

