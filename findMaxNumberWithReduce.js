// Find the largest element in an array using the 'reduce()` method.

function findMaxWithReduce(arr){
    const findMaxx= arr.reduce((max,curr)=>{
        return curr>max?curr:max
    })

    return findMaxx
}

const array =[1,2,33,4,5,777,88,25,35]

console.log(findMaxWithReduce(array))