class NodeLinkedList{
    val:any;
    next:any;

    constructor(val:any){
        this.val=val;
        this.next = null;
    }
}


// This is a wrong way to represent Singly LInked Lists.
let first = new NodeLinkedList("Hi");
first.next = new NodeLinkedList("there!!!");
first.next.next = new NodeLinkedList("How");
first.next.next.next = new NodeLinkedList("are");
first.next.next.next.next = new NodeLinkedList("you");

//console.log(first.next.next);

class SinglyLinkedList{
    head:any;
    length:number;
    tail:any;

    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    push(val:any){
        let nNode = new NodeLinkedList(val);
        if(!this.head){
            this.head = nNode;
            this.tail = this.head;
        }else{
            this.tail.next = nNode;//Here we modify the node
            this.tail = nNode;   
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.tail) return null;
        let current = this.head;
        let nTail = current;
        while(current.next){
            nTail = current;
            current = current.next;
        }
        this.tail = nTail;
        this.tail.next = null;
        this.length--;

        return current;//Return last Value;
    }
    shift(){
        if(!this.head)return null;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        return currentHead;
    }
    unshift(val:any){//Add new item at the beggining.
        let nNode = new NodeLinkedList(val);
        if(!this.head){
            this.head = nNode;
            this.tail = this.head;
        }else{
            nNode.next = this.head;
            this.head = nNode;
        }
        this.length++;
        return nNode;
    }
    get(idx:number){//retrive item by its position, 
        if(idx<0 || idx >= this.length)return null;

        let counter = 0;
        let current = this.head;

        while(counter !== idx){
            current = current.next;
            counter ++;
        }
        return current;
    }
    set(idx:number,value:any){//Change value based on its position 
        let node = this.get(idx);
        if(!node)return null;
    
        node.val = value;
        return node;
    }
    insert(idx:number,val:any){//Time Complexity=  O(1)
        if(idx<0  || idx>this.length)return null;
        let nNode = new NodeLinkedList(val);
        if(!this.head){
            this.head = nNode;
            this.tail = this.head;
        }
        if(idx == this.length)this.push(val);
        if(idx == 0)this.unshift(val);
        let prevNode = this.get(idx-1);
        nNode.next = prevNode.next;
        prevNode.next = nNode;
        this.length++;
        return nNode;
    }
    remove(idx:number,val:any){//Time Complex: O(n)
        if(idx<0  || idx>=this.length)return null;
        if(idx === this.length-1)return this.pop();
        if(idx === 0)return this.shift();

        let prevNode = this.get(idx);
        prevNode.next = prevNode.next.next;

        return true;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let prev = null;
        let next = null;

        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

let list = new SinglyLinkedList();
console.log(list)
console.log(list.push("Hello"));
console.log(list.push("you"));
console.log(list.push(99))
console.log('pop: ', list.pop());
console.log("get", list.get(3));

console.log("reverse",list.reverse());

