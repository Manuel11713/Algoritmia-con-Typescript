const sumRange = (num:number):number => {

    if(num==1)return 1;

    return num + sumRange(num-1);
}

console.log(sumRange(6));

const factorial = (num:number):number => {
    if(num===0 ) return 1;
    return num*factorial(num-1);
}

console.log(factorial(1));
