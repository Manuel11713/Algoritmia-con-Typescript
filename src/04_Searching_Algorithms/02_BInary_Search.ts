const binarySearch = (arr:number[],value:number) => {
    let start=0,end=arr.length-1;

    console.log(arr);
    while(start<=end){
        let mid = Math.floor((end+start)/2);
        if(arr[mid]>value)end=mid-1;
        else if(arr[mid]<value)start=mid+1;
        else return mid;
    }
    return -1

}

console.log(binarySearch([1,2,3,4,5],5));//just accepts sorted arrays. TIme complexity O(logn)
