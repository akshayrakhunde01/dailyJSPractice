// *Closures Create a counter function using 
// closures that increments and returns the count on each call.

function createCounter(){
    let counter =0;

    return function(){
        return ++counter 
    }
}

let counter = createCounter()

console.log(counter())
console.log(counter())
console.log(counter())