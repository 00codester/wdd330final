import { getLocalStorage, setLocalStorage } from "./utils.mjs";

let btn = document.getElementById("learnbtn");
const lsWord = "wordCount";

btn.addEventListener("click", (btn) => {
    let quantity = getLocalStorage(lsWord);
    quantity += 1;
    setLocalStorage(lsWord, quantity);
    displayer();
    location.reload();
})

const displayCount = document.getElementById("wordCount");
const lsdisplay = getLocalStorage("wordCount");

if (!lsdisplay){
    setLocalStorage("wordCount", 0);
    
} 
function displayer(){
    displayCount.textContent = getLocalStorage("wordCount");
}

displayer();
