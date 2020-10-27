//Write a function called same, wich accepts two arrays. The function should return true if every value in the array
//has it's corresponding value squared in the second array. The frequency of the values must be the same.

//Examples 
// same([1,2,3],[4,1,9]) => true
// same([1,2,3],[1,9]) => false 
// same([1,2,1],[4,4,1]) => false (must be same frequency)

//Solution 1:
const same1 = (arr1:number[], arr2:number[]):boolean => {
    if(arr1.length != arr2.length)return false;

    for(let i = 0; i<arr1.length; i++){

        let correctIdx = arr2.indexOf(arr1[i]**2);

        if(correctIdx == -1) return false;

        arr2.splice(correctIdx,1);
    }
    return true
}

console.log(same1([1,3,3],[9,1,9])) // But this solutions has time complexity O(n^2);

//Solution 2:

interface HasTable{
    [key:number]:number
}

const same2 = (arr1:number[], arr2:number[]):boolean => {
    if(arr1.length != arr2.length)return false;
    let freqCounter1:HasTable = {}, freqCounter2:HasTable = {};

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    for(let key in freqCounter1){
        if(!(Number(key)**2 in freqCounter2)) return false;

        if(freqCounter2[Number(key)**2] != freqCounter1[key]) return false;
    }
    console.log(freqCounter1)
    console.log(freqCounter2)
    return true
}

console.log(same2([1,3,3],[9,1,9])) 