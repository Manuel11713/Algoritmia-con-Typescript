const Fibonacci = (nth:number):number => {
    if(nth<3)return 1;

    return Fibonacci(nth-1)+Fibonacci(nth-2);
}

//console.log(Fibonacci(20));//This algorithm has a time complexity = O(2^n)
interface Memo{
    [key:number]:number
}
const FibOptimized = (nth:number,memo:Memo={}):number => {
    if(memo[nth]) return memo[nth];

    if(nth <= 2) return 1;

    let res = FibOptimized(nth-1,memo)+FibOptimized(nth-2,memo);
    memo[nth] = res;
    return res;
}
console.log(FibOptimized(50));//This algorithm has a time complexity = O(n)