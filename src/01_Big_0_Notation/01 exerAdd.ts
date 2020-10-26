//Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number "n".

const addUpTo = (n:number) => {
    var result:number = 0;
    for(let i = 1; i<=n ; i++){
        result += i
    }
    return result;
}

const addUpTo2 = (n:number) => {
    return n*(n+1)/2;
}

//Wich is better
//What does better mean?
//  *Faster
//  *Less memory-intensive
//  *More-readeable

console.time("addUpTo")
console.log(addUpTo(1000000));
console.timeEnd("addUpTo");

console.time("addUpTo2");
console.log(addUpTo2(1000000));
console.timeEnd("addUpTo2");

//The problem with time.
// *Different machines will record different times.
// *The same machine will reccord different times.
// *For fast algorithms, speed measures may not be precise enough. 