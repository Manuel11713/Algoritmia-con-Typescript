const merge = (arr1:number[], arr2:number[]):number[] => {
    let res:number[] = [];
    let idx1 = 0;
    let idx2 = 0;
    if(arr1.length===0)return arr2;
    if(arr2.length===0)return arr1;
    
    while(idx1<arr1.length && idx2<arr2.length){
        if(arr1[idx1]<arr2[idx2]){
            res.push(arr1[idx1]);
            idx1++;
        }else{
            res.push(arr2[idx2]);
            idx2++;
        }
    }

    if(idx1 != arr1.length)res = res.concat(arr1.slice(idx1));
    if(idx2 != arr2.length)res = res.concat(arr2.slice(idx2));

    return res;
}

//console.log(merge([],[2]));

const mergeSort = (arr:number[]):number[] => {
    if(arr.length <=1 )return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}

console.log(mergeSort([2,7,3,5,7,2,9,1]));//Time complexity O(nlogn), space complexity O(n).
