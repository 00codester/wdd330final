const word = document.getElementById("mainWord");
const def = document.getElementById("wordDef");
const origin = document.getElementById("wordOrigin");
const search = document.getElementById("wordSearchWord");
//const synonym = document.getElementById("wordOrigin");

const wordlist = `https://random-word-api.vercel.app/api?words=1`;

let ace = await wordGetter();
// let ace = await searchWord();
apiFetch();

async function apiFetch(){
    try{
        let url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${ace}?key=a8e4fe6b-993e-41d7-8b08-675a378d5dff`;
        //console.log(url);
        const response = await fetch(url);
       
        if(response.ok){
            const jsonify = await response.json();
            //console.log(jsonify);
            spawnPage(jsonify);
        } else {
            throw Error(await response.text());
        }
       
    } catch (error){
        console.log(error);
    }

}

function spawnPage(wordData){
    const pickedword = ace.toUpperCase();
    const defdata = wordData[0].shortdef;

    if(wordData[0].hasOwnProperty('et')){
        const wordo = wordData[0].et[0][1];
        origin.textContent = wordo;
    } else {
        origin.textContent = "Unknown";
    }
    word.innerHTML = "<h2>" + pickedword + "</h2>";
    def.textContent = defdata;
    search.textContent = pickedword;
}

async function wordGetter(){
    let myword = await fetch(wordlist);
    let jsonword = await myword.json();
    return jsonword[0];
    
}


// async function searchWord(){
//     let searchKey = document.getElementById("chosenWord");
//     let theWord = document.getElementById("theWord");
//     if(theWord.value == ""){
//         let searchword = await wordGetter();
//         return searchword;
//     } else{
//         return theWord.value;
//     }
// }

