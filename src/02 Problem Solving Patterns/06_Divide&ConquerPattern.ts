//This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

//Given a sorted array of integers, write a function called search, wich accepts a value and returns the index 
//where the value passed of the function is located. If the value is not found, return -1.

//Examples:
//search([1,2,3,4,5,6],4) => 3
//search([1,2,3,4,5,6],6) => 5
//search([1,2,3,4,5,6],22) => -1

const search = (arr:number[], val:number):number => {
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]===val)return idx;
    }
    return -1
}

console.log(search([1,2,3,4,5,6],22));//It works and has time complexity = O(n) 


const search2 = (arr:number[], val:number):number => {
    let min = 0;
    let max = arr.length-1;

    while(min <= max){
        let middle = Math.floor((min+max)/2);
        let currentElement = arr[middle];
        if(arr[middle] < val) min = middle+1;
        else if (arr[middle] > val) max = middle - 1    
        else return middle;
    }
    return -1
}

console.log(search2([1,2,3,4,5,6],6));//Solo busca en la mitad del array
