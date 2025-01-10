// Implement a try-catch block to handle an error that occurs during API data fetching.

async function  fetchData(url){
    

    try{
        let response = await fetch(url)
        let data= await response.json() 
        console.log(data)
    }catch(err){
        console.log('error occurd:',err)
    }
}

let url ='https://jsonplaceholder.typicode.com/posts/1';

console.log(fetchData(url))