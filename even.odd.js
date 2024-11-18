//  Even or Odd 

// 1 find even number


// function checkEvenOrOdd(number){
//     if(number %2===0){
//         return ` given number ${number} is even `
//     }else{
//         return ` given number is odd`
//     }
// }
// console.log(checkEvenOrOdd(21))

    
function sumOfOddEven(numbers){
    let oddSum=0;
    let evenSum=0;
     numbers.forEach(num=>{
        if(num %2===0){
            oddSum+=num
        }else{
            evenSum +=num
        }
     })
     console.log(oddSum)
    console.log(evenSum)
    }

    sumOfOddEven([1,2,3,,4,56,7,7,88,7])