//Given an array, simplest way to search for and value is to look at every element  in the array and check if
// it's the value we want.

const linearSearch = (arr:number[],value:number) => {
    let idx = 0;
    while(idx<arr.length){
        if(arr[idx]==value)return idx;
        idx++
    }
    return -1
}

console.log(linearSearch([14,6,8,9],38)); // Time complex O(n²);
