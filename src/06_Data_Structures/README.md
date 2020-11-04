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

**Trees:** a data struture that consist of nodes in a parent/child relationship. They are no linear.  
* **Root:** top node in a tree.
* **Child:** A node directly connected to another node when moving away from the root.
* **Parent:** The converse notion of a child.
* **Sibblings:** A group of nodes with the same parent.
* **Leaf:** A node with no children.
* **Edge:** The connection between one node to another.

**Uses**
* HTML DOM.
* Network Routing.
* Abstract Syntax Tree (Diagrama de flujo). 
* Artificial Intelligence.
* JSON structure.

**Binary Trees Search:**
* Every parent node has at most two children.
* Every node to the left of a parent node is always lower than the parent.
* Every node to the rigth of a parent node is always greater than the parent.

**Tree Binary Heaps:** Very similar to a binary search tree, but with some differents rules.
* In a **MaxBinaryHeap**, parents nodes are always larger than child nodes.
* In a **MinBinaryHeap**, parents nodes are always smaller than child nodes.


**Priority Queue**: A data structure where each element has a priority. Elements with higher priorities are served before priorities 


**HashTable:** are used to store key-value pairs, but the keys are not ordered. Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values.
Nearly every programming language has some sort of hash table data structure. Because of their speed, hash tables are very commonly used.

##### What makes a good hash?
* Fast (constant time).
* Does't cluster outputs at specific indices, but distributes uniformly.
* Deterministic (same inputs yields same output ).

**Graphs:**A graph data structure consist of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

**Uses:**
* Social Networks.
* Location/Mapping.
* Routing/Algorithms.
* Visual Hierarchy.
* File System Optimizations.
* **Everywhere**

    