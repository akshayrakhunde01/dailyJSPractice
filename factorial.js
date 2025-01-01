// find factorial number of given number
//1st first approach

// function findFactorial(num){
//     let factorial=1;
// for(let i=1; i<=num;i++){
//     factorial*=i
// }
// return factorial;
// }

// 2nd Approach

function findFactorial(num){
    if(num===0 || num===1){
        return 1
    }
    return num * findFactorial(num-1)

}

console.log(findFactorial(10))