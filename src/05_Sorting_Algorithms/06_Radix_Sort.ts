const getDigtit = (num:number, place:number):number => {// Get digit at one place.
    return Math.floor(Math.abs(num) / Math.pow(10,place))%10;
}

const digitCount = (num:number) => {//Count number of digits from a number.
    if (num === 0 )return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

const mostDigits = (arr:number[]) => {//Return the max number of digits of an array;
    let max=0;
    for(let i =0; i<arr.length;i++){
        max=Math.max(digitCount(arr[i]),max);
    }
    return max;
}
//console.log(getDigtit(483,3));
//console.log(digitCount(239));
//console.log(mostDigits([232,24,2362,2,523,39,5,12,55678,34,75,5,23,7]));

interface IBucket{
    [key:number]:number[]
}
const radixSort = (arr:number[]) => {
    let nLoops = mostDigits(arr);
    let res = [];
    // let buckets:IBucket = { 
    //     0:[],
    //     1:[],
    //     2:[],
    //     3:[],
    //     4:[],
    //     5:[],
    //     6:[],
    //     7:[],
    //     8:[],
    //     9:[]
    // };
    let buckets:IBucket = Array.from({length:10},()=>[]);
    for(let i = 0 ;i <nLoops; i++ ){
        for(let j = 0; j<arr.length; j++){
            buckets[getDigtit(arr[j],i)].push(arr[j]);
        }
        for(let key in Object.keys(buckets)){
            for(let k=0; k<buckets[key].length; k++){
                res.push(buckets[key][k]);
            }
            buckets[key]=[];
        }
        //arr= [].concat(...buckets); //For JS
        res=[];
    }   
    return arr;
}

console.log(radixSort([4,5,2,62,83,34,5,75,98,2435,7,45,7,334,63,4]))//Time Complexity O(nk), Space Comple (n+k);