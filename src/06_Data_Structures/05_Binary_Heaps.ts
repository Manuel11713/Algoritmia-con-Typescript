export const swapArr = (arr:number[],idx1:number,idx2:number) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

class Heap{
    values:number[];
    constructor(){
        this.values = [];
    }

    insert(val:number){
        this.values.push(val);
        let lastIdx = this.values.length-1;
        while(lastIdx>0){
            let idxParent = Math.floor((lastIdx-1)/2);
            if(this.values[lastIdx]>this.values[idxParent]){
                swapArr(this.values,lastIdx,idxParent);
                lastIdx = idxParent;
            }else break;
        }
        return this.values;
    }
    //Extract Max
    extractMax(){
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        let fIdx = 0;
        while(fIdx<this.values.length-1){
            if(this.values[fIdx]<this.values[2*fIdx+1]){
                swapArr(this.values,fIdx,2*fIdx+1);
                fIdx = 2*fIdx+1;
            }else if(this.values[fIdx]<this.values[2*fIdx+2]){
                swapArr(this.values,fIdx,2*fIdx+2);
                fIdx = 2*fIdx+2;
            }else break;
        }
        return this.values;
    }
}

let heap = new Heap();
heap.insert(3);
heap.insert(6);
heap.insert(8);
heap.insert(2);
// console.log(heap.values);
heap.insert(9);
// console.log(heap.values);
// console.log(heap.extractMax());