const swap = (arr:number[],idx1:number,idx2:number) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

const bubbleSort = (arr:number[]):number[] => {
    let nSorted = 0;
    while(nSorted<arr.length){
        for(let idx = 0; idx<arr.length-1; idx++){
            if(arr[idx]>arr[idx+1])swap(arr,idx,idx+1);
        }
        nSorted++;
    }
    return arr;
}

console.log(bubbleSort([4,1,6,3,7,2,4,1,9]));//Time complexity = O(n²);