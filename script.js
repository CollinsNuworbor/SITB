let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

let memory = 0;
let history = [];


// BASIC CALCULATOR

function insert(value){
    display.value += value;
}


function clearDisplay(){
    display.value = "";
}


function deleteLast(){
    display.value = display.value.slice(0,-1);
}


function calculate(){

    try{

        let expression = display.value;

        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/e/g, Math.E);
        expression = expression.replace(/\^/g,"**");

        let answer = eval(expression);

        addHistory(expression + " = " + answer);

        display.value = answer;

    }
    catch(error){

        display.value = "Error";

    }

}


// HISTORY

function addHistory(text){

    history.unshift(text);

    if(history.length > 10){
        history.pop();
    }

    historyList.innerHTML="";

    history.forEach(item=>{

        let li=document.createElement("li");
        li.textContent=item;
        historyList.appendChild(li);

    });

}


// SCIENTIFIC

function scientific(type){

    let num = Number(display.value);

    switch(type){

        case "sin":
            display.value=Math.sin(num);
            break;

        case "cos":
            display.value=Math.cos(num);
            break;

        case "tan":
            display.value=Math.tan(num);
            break;

        case "sqrt":
            display.value=Math.sqrt(num);
            break;

        case "cbrt":
            display.value=Math.cbrt(num);
            break;

    }

}



function power(number){

    display.value=Math.pow(Number(display.value),number);

}



function factorial(){

    let num=Number(display.value);
    let result=1;

    for(let i=1;i<=num;i++){

        result*=i;

    }

    display.value=result;

}


// MEMORY

function memoryClear(){

    memory=0;

}


function memoryRecall(){

    display.value=memory;

}


function memoryAdd(){

    memory += Number(display.value);

}


function memorySubtract(){

    memory -= Number(display.value);

}


// DARK MODE

let themeBtn=document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick=function(){

    document.body.classList.toggle("dark");

};

}


// LANGUAGE SEARCH

let languages=[
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


let languageList=document.getElementById("languageList");
let languageSearch=document.getElementById("languageSearch");


function loadLanguages(){

    if(!languageList) return;

    languageList.innerHTML="";

    languages.forEach(lang=>{

        let p=document.createElement("p");
        p.textContent=lang;

        languageList.appendChild(p);

    });

}


if(languageSearch){

languageSearch.oninput=function(){

    let search=this.value.toLowerCase();

    languageList.innerHTML="";

    languages
    .filter(lang=>lang.toLowerCase().includes(search))
    .forEach(lang=>{

        let p=document.createElement("p");
        p.textContent=lang;

        languageList.appendChild(p);

    });

};

}


loadLanguages();



// EXPLANATION

function showExplanation(){

alert(
"SITB Explanation:\n\n"+
"Your calculation was processed using mathematical rules."
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


console.log("SITB JavaScript Loaded");
