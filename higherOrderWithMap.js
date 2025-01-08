// Use `map()` to double all the elements in an array.

function dubbleArrayOfElement(arr){
    const dubble= arr.map((ele)=>{
        return ele*2
    })
    return dubble
}

const arr=[1,2,3,4,5,6,7]

console.log(dubbleArrayOfElement(arr))