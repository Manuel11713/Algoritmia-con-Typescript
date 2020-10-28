
//We have a helper functions that modifies outside variable;

const collectOdds = (arr:number[]) => {
    let res:number[] = [];

    const helper = (inputhelper:number[]) => {
        if(inputhelper.length===0)return;
        if(inputhelper[0]%2==1)res.push(inputhelper[0]);
        
        helper(inputhelper.slice(1));
    }
    helper(arr);
    return res;
}

console.log(collectOdds([1,2,3,5,34,5,71,3,4,71,23,5]));