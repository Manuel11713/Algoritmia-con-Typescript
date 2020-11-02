class DLLNode{
    next:any;
    prev:any;
    val:any;
    constructor(val:any){
        this.next = null;
        this.prev = null;
        this.val = val; 
    }
}

class DLL{
    length:number;
    head:any;
    tail:any;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val:any){
        let nNode = new DLLNode(val);
        if(this.length === 0){

            this.head = nNode;
            this.tail = nNode;
        }else if(this.length == 1){
            this.tail === nNode;
            this.tail.prev = this.head;
            this.head.next = this.tail;
        }
        else{
            this.tail.next === nNode;
            nNode.prev = this.tail;
            this.tail = nNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.tail) return null;
        if(this.length == 1){
            let removed = this.tail;
            this.head = null;
            this.tail = null;      
            return removed;
        }
        let removed = this.tail;
        this.tail = removed.prev;
        this.length--;
        return removed;
    }

    shift(){
        if(this.length===0)return null;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        this.length--;
        this.head = this.head.next; 
        this.head.prev = null;
        return this;

    }

    unshift(val:any){
        let nNode = new DLLNode(val);
        if(!this.head){
            this.head == nNode;
            this.tail == nNode;
        }else{
            this.head.prev = nNode;
            nNode.next = this.head;
            this.head = nNode;
        }
        this.length++;
        return this;
    }
    get(idx:number){
        if(idx<0 || idx>=this.length )return null;
        if(idx < Math.floor(this.length/2)){
            let i=0;
            let curr = this.head;
            while(idx != i){
                curr = curr.next;
                i++;
            }
            return curr;
        }else{
            let i=this.length-1;
            let curr = this.tail;
            while(idx != i){
                curr = curr.prev;
                i--;
            }
            return curr;
        }
    }
    set(idx:number,val:any){
        let currNode = this.get(idx);
        if(!currNode)return false;
        currNode.val = val;
        return true;
    }
    insert(idx:number, val:any){
        if(idx<0 || idx>this.length)return null;

        if(idx==0)return this.unshift(val);
        if(idx==this.length) this.push(val);

        let beforeNode = this.get(idx-1);
        let afterNode = beforeNode.next;
        let nNode = new DLLNode(val);

        afterNode.prev = nNode;
        nNode.next = afterNode;
        nNode.prev = beforeNode;
        beforeNode.next = nNode;

        this.length++;

        return this;
    }   

    remove(idx:number){
        if(idx<0 || idx>=this.length)return null;

        if(idx==0)return this.shift();
        if(idx==this.length-1)return this.pop();

        let removedNode = this.get(idx);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }    
}

//Big 0 of Doubly Linked Lists:
//Insertion: 0(1)
//Removal: O(1)
//Searching: O(n)
//Access: O(n) (Technically searching is O(n/2) but that is O(n));


let Dlist = new DLL();
Dlist.push(5);console.log(Dlist.head.val);console.log("push 5")
Dlist.push(10);console.log("push 10")
Dlist.push(15);
console.log(Dlist.pop().val)

