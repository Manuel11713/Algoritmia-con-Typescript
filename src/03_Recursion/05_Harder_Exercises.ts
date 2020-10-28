const reverse = (str:string):string => {//accepts and string and returns its reverse.
    if(str.length==0)return '';
    return str.charAt(str.length-1)+reverse(str.slice(0,-1))
}

//console.log(reverse("hola"));

const isPalindrome = (str:string):boolean => {
    if(str.length <=1 )return true;
    if(str.charAt(0) !== str.charAt(str.length-1))return false;

    return isPalindrome(str.substring(1).slice(0,-1));
}

//console.log(isPalindrome("tacocat"))


const someRecursive = (arr:number[],cb?:(value:number)=>boolean):boolean => {//Create a function to do some with values of and an array if return true if match with some value
    if(!cb)return false;
    if(arr.length===0)return false;

    if(cb(arr[0]))return true;
    arr.shift();

    return someRecursive(arr,cb);
}


// console.log(someRecursive([1,2,3,5],(value:number)=>{
//     return value>10;
// }));

const flatten = (arr:(any[])):number[] => {//accepts an array with nested arrays and return a flattened array.
    if(arr.length===0) return arr;
    let res:number[] = [];
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]=="number")res.push(arr[i]);
        else{
            res = res.concat( flatten(arr[i]))
        }
    }

    return res;
}

//console.log(flatten([1, [2, [3, 4], [[5]]]]))

const capitalizeFirst = (arr:string[]):string[] => {
    if(arr.length<=1)return [arr[0][0].toUpperCase()+arr[0].substr(1)];
    let res = arr[0][0].toUpperCase()+arr[0].substr(1);
    arr.shift();
    return [res].concat(capitalizeFirst(arr));
}

//console.log(capitalizeFirst(['car','taco','banana']))

interface iObj{
    [key:string]:any
}

const nestedEvenSum = (obj:iObj):number => {
    let res:number = 0;

    for(let key of Object.keys(obj)){
        if(typeof obj[key] === "number" && obj[key]%2==0)res+=obj[key];
        else if(typeof obj[key] === "object" ) res += nestedEvenSum(obj[key]);
    }
    return res;
}


var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

//console.log(nestedEvenSum(obj1));


const capitalizeWords  = (arr:string[]):string[] => {

    if(arr.length<=1) return [arr[0].toUpperCase()];
    let res = arr[0].toUpperCase();
    arr.shift();
    return [res].concat(capitalizeWords(arr));
}


//console.log(capitalizeWords(["asdf","asdf","iiuoh"]))
interface IOjb{
    [key:string]:any
}
const stringifyNumbers = (objO:IOjb) => {
    let obj:IOjb = {}
    Object.assign(obj,objO);
    for(let key of Object.keys(obj)){
        if(typeof obj[key] === "number") obj[key] = obj[key].toString();
        else if (typeof obj[key] === "object" && !Array.isArray(obj[key]))obj[key] = stringifyNumbers(obj[key]);
    }
    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
// console.log(stringifyNumbers(obj));
// console.log(obj)


const collectStrings = (obj:iObj) => {
    let res:string[] = [];
    for(let key of Object.keys(obj)){
        if(typeof obj[key]==="string")res.push(obj[key])
        else res = res.concat(collectStrings(obj[key]))
    }
    return res;
}

const ob = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(ob))