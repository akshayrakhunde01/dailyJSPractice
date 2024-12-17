
function addSum(a){
    return function (b){
        if(b){
            return addSum(a+b);
        }
        return a
    }
}

console.log(addSum(4)(6)())