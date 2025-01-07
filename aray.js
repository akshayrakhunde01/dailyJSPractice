/* Write a function that takes an array 
of numbers and returns a new array with only the even numbers.*/

function findEvenNumber(array){

    let even =[]
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            even.push(array[i])
        }
    }
    return even
}
array=[1,2,3,4,5,6,7,8]

console.log(findEvenNumber(array))

