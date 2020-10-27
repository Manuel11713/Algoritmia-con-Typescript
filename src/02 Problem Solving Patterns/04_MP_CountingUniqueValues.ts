//Implement a function called "countUniqueValues" wich accepts an sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will be always sorted.

interface HashTable{
    [key:string]:number
}

const countUniqueValues1 = (arr:number[]):number => {
    let uniquecount:HashTable = {};

    for(let n of arr){
        uniquecount[n] = (uniquecount[n] || 0) +1;
    }
    return Object.keys(uniquecount).length;
}

console.log(countUniqueValues1([-1,-1,-1,0,0,1,2,3,3,3,4,4,5]));

const countUniqueValues2 = (arr:number[]):number => {
    if(arr.length == 0) return 0;
    if(arr.length == 1) return 1;
    let res = 1;

    for(let idx = 1; idx<arr.length; idx++){
        if(arr[idx] != arr[idx-1]) res++
    }

    return res;

}

console.log(countUniqueValues2([-1,-1,-1,0,0,1,2,3,3,3,4,4,5]));
