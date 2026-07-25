let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

let memory = 0;
let calcHistory = JSON.parse(localStorage.getItem("SITB_HISTORY")) || [];


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
        expression = expression.replace(/\^/g,"**");

        let answer = eval(expression);

        addHistory(expression + " = " + answer);

        display.value = answer;

    }
    catch{

        display.value = "Error";

    }

}



// HISTORY

function addHistory(text){

    calcHistory.unshift(text);

    if(calcHistory.length > 20){
        calcHistory.pop();
    }

    localStorage.setItem(
        "SITB_HISTORY",
        JSON.stringify(calcHistory)
    );

    showHistory();

}


function showHistory(){

    if(!historyList) return;

    historyList.innerHTML="";

    calcHistory.forEach(item=>{

        let li=document.createElement("li");

        li.textContent=item;

        historyList.appendChild(li);

    });

}


showHistory();



// SCIENTIFIC

function scientific(type){

    let num = Number(display.value);


    if(type==="sin"){
        display.value=Math.sin(num);
    }

    if(type==="cos"){
        display.value=Math.cos(num);
    }

    if(type==="tan"){
        display.value=Math.tan(num);
    }

    if(type==="sqrt"){
        display.value=Math.sqrt(num);
    }

    if(type==="cbrt"){
        display.value=Math.cbrt(num);
    }

}



function power(num){

    display.value=Math.pow(
        Number(display.value),
        num
    );

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
    memory+=Number(display.value);
}


function memorySubtract(){
    memory-=Number(display.value);
}



// EXPLANATION

function showExplanation(){

    let problem=display.value;


    if(problem===""){

        alert("Enter a calculation first.");

        return;

    }


    try{

        let answer=eval(
            problem.replace(/\^/g,"**")
        );


        alert(
`SITB Explanation

Problem:
${problem}

Step 1:
Read the numbers and operators.

Step 2:
Follow mathematical order.

Step 3:
Solve the expression.

Answer:
${answer}


💎 Premium Version 5.0:
AI Tutor will provide advanced explanations.`
        );

    }
    catch{

        alert("Cannot explain this.");

    }

}



// DARK MODE

let themeBtn=document.getElementById("themeBtn");


if(themeBtn){

themeBtn.onclick=function(){

    document.body.classList.toggle("dark");

};

}



// THEMES

let themeSelect=document.getElementById("themeSelect");


if(themeSelect){

themeSelect.onchange=function(){

    document.body.className=this.value;

    localStorage.setItem(
        "SITB_THEME",
        this.value
    );

};

}


let savedTheme=localStorage.getItem("SITB_THEME");

if(savedTheme){

    document.body.className=savedTheme;

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
"Turkish",
"Dutch",
"Hebrew"
];


let languageSearch=document.getElementById("languageSearch");
let languageList=document.getElementById("languageList");


function loadLanguages(){

    if(!languageList)return;

    languageList.innerHTML="";

    languages.forEach(lang=>{

        let p=document.createElement("p");

        p.textContent=lang;

        languageList.appendChild(p);

    });

}


if(languageSearch){

languageSearch.oninput=function(){

    let text=this.value.toLowerCase();

    languageList.innerHTML="";


    languages
    .filter(lang=>lang.toLowerCase().includes(text))
    .forEach(lang=>{

        let p=document.createElement("p");

        p.textContent=lang;

        languageList.appendChild(p);

    });

};

}


loadLanguages();



// SHARE

function shareApp(){

    if(navigator.share){

        navigator.share({

            title:"SITB Calculator",

            text:"Try SITB Calculator"

        });

    }

}


console.log("SITB v3.1 Loaded");
