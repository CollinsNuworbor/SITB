let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

let memory = 0;
let calcHistory = [];


// INSERT BUTTON VALUES
function insert(value) {
    display.value += value;
}


// CLEAR
function clearDisplay() {
    display.value = "";
}


// DELETE LAST
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// CALCULATE
function calculate() {

    try {

        let expression = display.value;

        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/\^/g, "**");

        let result = eval(expression);

        addHistory(expression + " = " + result);

        display.value = result;

    } catch {

        display.value = "Error";

    }

}


// HISTORY
function addHistory(text) {

    calcHistory.unshift(text);

    if (calcHistory.length > 10) {
        calcHistory.pop();
    }

    if(historyList){

        historyList.innerHTML = "";

        calcHistory.forEach(item => {

            let li = document.createElement("li");
            li.textContent = item;
            historyList.appendChild(li);

        });

    }

}



// SCIENTIFIC FUNCTIONS

function scientific(type) {

    let num = Number(display.value);

    if(type === "sin") display.value = Math.sin(num);
    if(type === "cos") display.value = Math.cos(num);
    if(type === "tan") display.value = Math.tan(num);

    if(type === "sqrt") display.value = Math.sqrt(num);
    if(type === "cbrt") display.value = Math.cbrt(num);

}



function power(num){

    display.value = Math.pow(Number(display.value), num);

}



function factorial(){

    let number = Number(display.value);
    let answer = 1;

    for(let i = 1; i <= number; i++){

        answer *= i;

    }

    display.value = answer;

}



// MEMORY

function memoryClear(){

    memory = 0;

}


function memoryRecall(){

    display.value = memory;

}


function memoryAdd(){

    memory += Number(display.value);

}


function memorySubtract(){

    memory -= Number(display.value);

}



// DARK MODE

let themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick = function(){

    document.body.classList.toggle("dark");

};

}



// LANGUAGE SEARCH

let languages = [
"English",
"French",
"Spanish",
"German",
"Chinese",
"Japanese",
"Korean",
"Arabic",
"Hindi",
"Portuguese",
"Russian",
"Swahili",
"Italian",
"Greek",
"Turkish"
];


let languageSearch = document.getElementById("languageSearch");
let languageList = document.getElementById("languageList");


function showLanguages(){

    if(!languageList) return;

    languageList.innerHTML = "";

    languages.forEach(lang => {

        let p = document.createElement("p");
        p.textContent = lang;

        languageList.appendChild(p);

    });

}


if(languageSearch){

languageSearch.oninput = function(){

    let search = this.value.toLowerCase();

    languageList.innerHTML = "";

    languages
    .filter(lang => lang.toLowerCase().includes(search))
    .forEach(lang => {

        let p = document.createElement("p");
        p.textContent = lang;

        languageList.appendChild(p);

    });

};

}


// EXPLANATION

function showExplanation(){

    let expression = display.value;

    if(expression === ""){
        alert("Enter a calculation first.");
        return;
    }

    let answer;

    try{

        let clean = expression.replace(/\^/g,"**");
        answer = eval(clean);

    }
    catch{

        alert("Cannot explain this calculation.");
        return;

    }


    alert(
`SITB Explanation:

Expression:
${expression}

Step 1:
Read the numbers and operations.

Step 2:
Follow BODMAS mathematical order.

Step 3:
Solve the calculation.

Answer:
${answer}

💎 SITB Premium Version 5.0:
AI Tutor will give advanced step-by-step explanations.`
    );

}



// SHARE

function shareApp(){

    if(navigator.share){

        navigator.share({

            title:"SITB Calculator",
            text:"Try SITB Calculator"

        });

    }

}


console.log("SITB v3 Loaded");
