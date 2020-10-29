const swap1 = (arr:number[],idx1:number,idx2:number) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

const selectionSort = (arr:number[]):number[] => {

    for(let idx = 0; idx<arr.length; idx++){
        let minidx = idx;
        for(let idx2=idx+1; idx2<arr.length; idx2++){
            if(arr[idx2]<arr[minidx])minidx=idx2;
        } 
        swap1(arr,idx,minidx);
    }
    return arr;
}

console.log(selectionSort([4,6,2,6,8,9,3,5,6]));// O(n²)