## Data Structures.

#### Data Structures are collections of values, the relationships among them, and the functions and operations that can be applied to the data.

## Why so many?

#### Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

The more time you spend as a developer, the more likely you'll need to use one of these data structures.

#### What is a class?

It's a blueprint for creating objects with pre-defined properties and methods.

### We are going to implement data structures as classes!

**Single Linked Lists:** A data Structure that contains a head, tail and length property. Linked lists consist of nodes, and each node has a value and a pointer to another node or null. **Singly Linked List are an excellent alternative to arrays when insertion and deletion at the beginning are frecuently required.**

**Lists**
* Do not have indexes.
* Connected via nodes with a next pointer.
* Random access not allowed.

**Arrays**
* Indexed in order.
* Insertion and deletion can be expensive.
* Can quickly be accessed at specific index.    

**Doubly Linked Lists:**Almost identical to Singly Linked Lists, exept every node has another pointer to the previous node.
* More memory.
* More Flexibility.

**Stacks:** it's a LIFO (last in firt out) data structure. The last element added to the stack will be the first element removed from the stack. It's simllar to the callstack in JS.

* Managing functions invocations.
* Undo / Redo.
* Routing (the history object ) is treated like a stack.
* There are many ways to implement a stack.

**Queues:** It's a FIFO(First in First out) data structure.

* Background tasks.
* Upload resources.
* Printing/task processing.
