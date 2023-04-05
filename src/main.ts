import { LinkedList, ListNode } from "./LinkedList";

namespace Test {

    export function runLinkedList() {
        let linkedList = new LinkedList<string>()

        linkedList.push(new ListNode("hello node 1"))
        linkedList.push(new ListNode("hello node 2"))
        linkedList.push(new ListNode("hello node 3"))
        linkedList.push(new ListNode("hello node 4"))
        linkedList.push(new ListNode("hello node 5"))

        linkedList.printNodes()

        console.log(linkedList.pop())
        console.log(linkedList.insertAt(1, new ListNode("hello 6")))

        console.log(linkedList.indexOf(new ListNode("hello node 1")))
        console.log(linkedList.isExist(new ListNode("hello node 2")))

        linkedList.printNodes()
    }

    export function runBinaryTree(){
        
    }

}

//Test.runLinkedList()

Test.runBinaryTree()

