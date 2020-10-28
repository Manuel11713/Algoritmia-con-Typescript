const power = (base:number,exp:number):number => {
    if(exp==0)return 1;
    if(exp==1)return base;
    return base*power(base,exp-1);
}

console.log(power(5,3))//8

const factor = (n:number):number => {
    if(n <= 0)return 1;
    return n*factor(n-1);
}

console.log(factor(5));

const productOfArray = (arr:number[]):number => {
    if(arr.length===0)return 1;
    return arr[0]*productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3]));

const recursiveRange = (num:number):number => {
    if(num <= 0 )return 0;

    return num+recursiveRange(num-1);
}

console.log(recursiveRange(3));

const fib= (n:number):number => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(3));