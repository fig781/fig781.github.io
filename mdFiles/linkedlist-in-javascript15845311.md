**What is a Linked List?**
A linked list data structure involves a series of Nodes linked together. Each Node will have a data value and a reference to the next Node in the list. In the last Node, the reference will be set to `null`. Linked lists are not commonly used in front end web development, but they are still very popular for interview coding problems.

**Implementation of a Linked List with a few helper methods**

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserts a Node into the Linked List
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // Returns the number of nodes
  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  // Returns the first Node
  getFirst() {
    return this.head;
  }

  // Returns the last Node
  getLast() {
    if (!this.head.next) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // Removes all Nodes from the Linked List
  clear() {
    this.head = null;
  }

  // Removes the first Node from the Linked List
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
}
```

Here it is in use:

```js
let list = new LinkedList();
list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
// list = {
//   head: {
//     data: 3,
//     next: {
//       data: 2,
//       next: {
//         data: 1,
//         next: null
//       }
//     }
//   }
// }

list.getFirst(); // { data: 3, next:... }
list.getLast(); // { data: 1, next: null }
list.size(); // 3
list.removeFirst(); // { head: { data: 2, next:... }}
list.clear(); // { head: null }
```

You will notice that a Linked List in JavaScript is simply a series of nested objects. The list will always start with a head, and the last node reference will be `null`.

**If you are preparing for coding interviews, here are a few coding challenges involving Linked Lists**

- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
- [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
- [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)
- [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
