// function sum(a,b){
//     return a + b;
// }

// let ans = sum(23,45)
// console.log(ans);

function sum(n){
    let ans = 0;
    for(let i=0; i<=n; i++ ){
        ans = ans + i;
    }
    return ans;
}

const ans = sum(100)
console.log(ans);
