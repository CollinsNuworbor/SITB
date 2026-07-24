console.log("SITB JS OK");
let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

let memory = 0;
let history = [];


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

        expression = expression.replaceAll("π", Math.PI);
        expression = expression.replaceAll("e", Math.E);
        expression = expression.replaceAll("^","**");

        let result = eval(expression);

        display.value = result;

        addHistory(expression + " = " + result);

    }
    catch{
        display.value = "Error";
    }

}



function addHistory(item){

    history.unshift(item);

    if(history.length > 10){
        history.pop();
    }

    historyList.innerHTML="";

    history.forEach(x=>{

        let li=document.createElement("li");
        li.textContent=x;
        historyList.appendChild(li);

    });

}




function scientific(type){

    let value = Number(display.value);

    if(type==="sin"){
        display.value=Math.sin(value);
    }

    if(type==="cos"){
        display.value=Math.cos(value);
    }

    if(type==="tan"){
        display.value=Math.tan(value);
    }

    if(type==="sqrt"){
        display.value=Math.sqrt(value);
    }

    if(type==="cbrt"){
        display.value=Math.cbrt(value);
    }

}




function power(number){

    let value=Number(display.value);

    display.value=Math.pow(value,number);

}




function factorial(){

    let num=Number(display.value);

    if(num<0){
        display.value="Error";
        return;
    }

    let answer=1;

    for(let i=1;i<=num;i++){
        answer*=i;
    }

    display.value=answer;

}




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




// DARK MODE

let themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent="☀️";
    }
    else{
        themeBtn.textContent="🌙";
    }

};




// LANGUAGES

let languages=[

"English",
"Spanish",
"French",
"German",
"Italian",
"Portuguese",
"Chinese",
"Japanese",
"Korean",
"Arabic",
"Russian",
"Hindi",
"Swahili",
"Turkish",
"Dutch",
"Greek",
"Hebrew"

];


let languageList=document.getElementById("languageList");
let languageSearch=document.getElementById("languageSearch");


function showLanguages(){

    languageList.innerHTML="";

    languages.forEach(lang=>{

        let item=document.createElement("p");

        item.textContent=lang;

        languageList.appendChild(item);

    });

}


showLanguages();



languageSearch.oninput=function(){

    let text=this.value.toLowerCase();

    languageList.innerHTML="";

    languages
    .filter(x=>x.toLowerCase().includes(text))
    .forEach(lang=>{

        let item=document.createElement("p");

        item.textContent=lang;

        languageList.appendChild(item);

    });

};




// EXPLANATION

function showExplanation(){

    alert(
    "SITB Explanation:\n\n"+
    "The calculator solves your expression step by step.\n"+
    "Advanced AI explanations will come in Premium Version 5.0."
    );

}
