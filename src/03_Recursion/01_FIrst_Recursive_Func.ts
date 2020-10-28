
//Simple for loop
const countDown = (n:number) => {
    for(n; n >=0; n--){
       console.log(n); 
    }
    console.log("all done!!");
}
countDown(3);


const countDown2 = (n:number) => {
    if(n==0)return;
    console.log(n);
    n--;
    countDown2(n);
}

countDown2(4)