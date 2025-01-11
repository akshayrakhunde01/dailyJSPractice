// Recursion: Implement a recursive function to find the nth Fibonacci number.

function fibonacci(n) {
   
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage
console.log(fibonacci(0));  
console.log(fibonacci(1));   
console.log(fibonacci(10)); 