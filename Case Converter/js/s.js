let textarea = document.querySelector("textarea");

let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");



upperCaseButton.addEventListener("click",function (){
    textarea.value = textarea.value.toUpperCase();
});

lowerCaseButton.addEventListener("click",function (){
    textarea.value = textarea.value.toLowerCase();
})

properCaseButton.addEventListener("click",function (){
    let words = textarea.value.split(" ");
    let updatedLine ="";

    for (let i =0;i<words.length;i++){
        if (words[i].match(/\d+/)){
            updatedLine += words[i]+ " ";
            continue;
        }
        let pref;
        if (!words[i][0].match(/[aA-zZ]/)){
            pref = words[i].substr(1,2).toUpperCase();}
        else pref = words[i].substr(0,1).toUpperCase();

        let suf = words[i].substr(1,words[i].length).toLowerCase();
        updatedLine += (pref+suf);
        if (i !== words.length-1){
            updatedLine +=  " ";
        }
    }
    textarea.value = updatedLine;
})


sentenceCaseButton.addEventListener("click",function (){
    let words = textarea.value.split(".");
    let updatedLine ="";
    for (let i = 0; i < words.length-1; i++) {
        words[i] = words[i].trim();
        let pref = words[i].substr(0, 1).toUpperCase();
        let suf = words[i].substr(1, words[i].length).toLowerCase();
        updatedLine += (pref + suf +".");
        if (i!== words.length-2){
            updatedLine += " ";
        }
    }
    textarea.value = updatedLine;

})

