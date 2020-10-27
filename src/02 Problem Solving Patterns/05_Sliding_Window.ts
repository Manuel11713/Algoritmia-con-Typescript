//Write a function called "maxSubArrySum" wich accepts and array of integers and a number called "n". The function should
//calculate the maximum sum of "n" consecutives elements in the array.

//Examples:
//maxSubArraySum([1,2,5,2,8,1,5],2) => 10
//maxSubArraySum([1,2,5,2,8,1,5],4) => 17
//maxSubArraySum([4,2,1,6],1) => 6
//maxSubArraySum([],4) => null

//Solution 1: 
const maxSubArraySum1 = (arr:number[],n:number):(number|null) => {
    
    if(n>arr.length) return null;
    let maxVal = -Infinity;

    for(let i = 0; i<arr.length-n+1;i++){
        let temp = 0;
        for(let j = 0; j<n;j++ ){
            temp +=arr[i+j];
        }
        if(temp>maxVal)maxVal = temp

    }
    return maxVal;
}

console.log(maxSubArraySum1([1,2,5,2,8,1,5],4));//It works but has time complexity = O(n²);

//Solution 2:

const maxSubArraySum2 = (arr:number[],n:number):(number|null) => {

    let maxSum = 0;
    let tempSUm = 0;

    if(n>arr.length)return null;
    for(let i = 0; i < n; i++){
        maxSum += arr[i]
    }
    tempSUm = maxSum;

    for(let i = n; i<arr.length;i++){
        tempSUm = tempSUm - arr[i-n]+arr[i]
        maxSum = Math.max(maxSum,tempSUm);
    }

    return maxSum;
}
console.log(maxSubArraySum2([1,2,5,2,8,1,5],4));
