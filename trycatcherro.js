// Implement a try-catch block to handle an error that occurs during API data fetching.

async function  fetchData(url){
    let response = await fetch(url)

    try{}catch(err){
        console.log('error occurd:',err)
    }
}