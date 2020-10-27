//Crating a Pointers or values that correspond to an index o position and move towards the beginning,
//end o middle based on certain condition 

//Very efficient for solving problems with minimal space complexity as well.

//Example: Write a function called sumZero wich accepts an sorted array of integers. This function should find the first pair
//where the sum is 0. Return and array that includes both values that sum to zero or undifined if a pair does not exist

//sumZero([-3,-2,-1,0,1,2,3]) => [-3,3]
//sumZero([-2,0,1,3]) => []
//sumZero([1,2,3]) => []

//Solution 1: 

const sumZero1 = (arr:number[]):number[] => {
    for(let i = 0; i<arr.length; i++){
        for(let j= i+i; j<arr.length; j++){
            if(arr[i]+arr[j]===0)return [arr[i], arr[j]];
        }
    }
    return []
}

console.log(sumZero1([-3,-2,-1,0,1,2,3])) //It works but has time complexity O(n^2);

const sumZero2 = (arr:number[]):number[] => {
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left]+arr[right];
        if(sum === 0 ) return [arr[left], arr[right]];
        else if(sum>0) right--
        else left ++
    }
    return []
}

console.log(sumZero2([-2,0,1,3]))//Time complexity O(n^2);