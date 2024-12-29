
const checkPelindrome =(x)=>{
    let reverse= x.toString().split('').reverse().join('')
console.log(reverse)
    if(x==reverse){
        console.log(`TRUE: its pelindrome`)
    }else{
        console.log('FALSE: its not pelindrome')
    }
}

checkPelindrome(121)