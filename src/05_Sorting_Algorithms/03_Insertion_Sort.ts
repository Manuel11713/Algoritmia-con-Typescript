const swap2 = (arr:number[],idx1:number,idx2:number) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

const insertionSort = (arr:number[]) => {
    for(let idx1 = 1;idx1 < arr.length; idx1++){
        let temp = idx1;
        for(let idx2 = idx1-1;idx2>=0;idx2--){
            if(arr[temp]<arr[idx2]){
                swap2(arr,temp,idx2);
                temp = idx2;
            }
        }
    }
    return arr;
}

console.log(insertionSort([3,6,8,2,1,3,6,9,3,6]));