import { LinkedList, ListNode } from "./LinkedList";

let linkedList =new  LinkedList<string>()

linkedList.push(new ListNode("hello node 1"))
linkedList.push(new ListNode("hello node 2"))
linkedList.push(new ListNode("hello node 3"))
linkedList.push(new ListNode("hello node 4"))
linkedList.push(new ListNode("hello node 5"))

linkedList.printNodes()

console.log(linkedList.indexOf(new ListNode("hello node 1")))
console.log(linkedList.isExist(new ListNode("hello node 2")))

linkedList.printNodes()

