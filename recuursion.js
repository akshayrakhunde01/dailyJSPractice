// Recursion 
// Write a recursive function to calculate the factorial of a given number.

function calculateFactorial(number){
    number = Number(number)
    if(number <0 ||number===0 || number===1){
        return 1
    }else{
        
        return number *(calculateFactorial(number-1))
    }
}


let number=-1;

console.log(calculateFactorial(number))