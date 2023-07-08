


const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=a8e4fe6b-993e-41d7-8b08-675a378d5dff`;

async function apiFetch(url){
    try{
        const response = await fetch(url);
        if(response.ok){
            console.log(response);
        } else {
            throw Error(await response.text());
        }
       
    } catch (error){
        console.log(error);
    }

}

apiFetch(url);