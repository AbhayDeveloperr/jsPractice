//Fetch API ------>
const URL = "https://dummyjson.com/quotes";

const getFacts = async() =>{
    console.log("getting data...")
    let response = await fetch(URL);
    console.log(response);       //json format
    let Data = response.json();    //to convert into JS from json
    console.log(Data);
}

console.log(getFacts());