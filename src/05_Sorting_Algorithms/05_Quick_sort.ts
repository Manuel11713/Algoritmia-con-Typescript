const swap3 = (arr:number[],idx1:number,idx2:number) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

const pivotHelper = (arr:number[],start:number=0,end:number=arr.length) => {
    let pivot = arr[start];
    let swapIdx = start;

    for(let idx=start+1;idx<arr.length;idx++){
        if(pivot>arr[idx]){
            swapIdx++;
            swap3(arr,swapIdx,idx);
        }
    }
    swap3(arr,start,swapIdx);

    //return arr;
    return swapIdx;
}

//console.log(pivotHelper([7,2,5,8,2,8,0,1,3,6]));//[6, 2, 5, 2, 0, 1, 3, 7, 8, 8];

const quickSort = (arr:number[],left=0,right=arr.length-1) => { 
    if(left<right){
    
        let pivotIndex = pivotHelper(arr,left,right);
        
        //Left 
        quickSort(arr,left,pivotIndex-1);
        //Right
        quickSort(arr,pivotIndex+1,right);
    }

    return arr;
}

console.log(quickSort([7,2,5,8,2,8,0,1,3,6]));//Time Complexity = O(nlogn);