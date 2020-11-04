import {swapArr} from './05_Binary_Heaps';

class NodePQ{
    priority:number;
    val:any;
    constructor(priority:number, val:any){
        this.priority = priority;
        this.val = val;
    }

}

export class PriorityQueue{
    values:any[];
    constructor(){
        this.values = [];
    }

    insert(priority:number, val:any){
        let nNode = new NodePQ(priority, val);
        this.values.push(nNode);

        let lastIdx = this.values.length-1;
        while(lastIdx>0){
            let idxParent = Math.floor((lastIdx-1)/2);
            if(this.values[lastIdx].priority<this.values[idxParent].priority){
                swapArr(this.values,lastIdx,idxParent);
                lastIdx = idxParent;
            }else break;
        }
        return this.values;
    }
    //Extract Min
    extractMin(){
        let smallest = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        let fIdx = 0;
        while(fIdx<this.values.length-1){
            if(this.values[fIdx].priority>this.values[2*fIdx+1].priority){
                swapArr(this.values,fIdx,2*fIdx+1);
                fIdx = 2*fIdx+1;
            }else if(this.values[fIdx].priority<this.values[2*fIdx+2].priority){
                swapArr(this.values,fIdx,2*fIdx+2);
                fIdx = 2*fIdx+2;
            }else break;
        }
        return smallest;
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.insert(3,"hola");
priorityQueue.insert(8,"como");
priorityQueue.insert(2,"estas");
priorityQueue.insert(1,"juan");
priorityQueue.insert(10,"esteban");
console.log(priorityQueue.values);
priorityQueue.extractMin();
console.log(priorityQueue.values);
