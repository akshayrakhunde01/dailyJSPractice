// Recursion: Implement a recursive function to find the nth Fibonacci number.

// function fibonacci(n) {
   
//     if (n === 0) return 0;
//     if (n === 1) return 1;
    
//     // Recursive case
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Example usage
// console.log(fibonacci(0));  
// console.log(fibonacci(1));   
// console.log(fibonacci(10)); 

//memozition

function fibonacci(n, memo = {}) {
    
    if (n in memo) return memo[n];
    
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive case with memoization
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}


console.log(fibonacci(5));  
console.log(fibonacci(10)); 
